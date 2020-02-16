import React, { PureComponent } from 'react';

import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
import BpmnModeler from 'bpmn-js/lib/Modeler';

interface Props {
  url: string,
  diagramXML: any,

  onLoading: Function,
  onError: Function,
  onShown: Function,
}

class Editor extends PureComponent<Props> {
  static defaultProps = {
    url: undefined,
    diagramXML: undefined
  }

  readonly state = {
    diagramXML: undefined,
  }; 

  private containerRef: any;
  private bpmnViewer: BpmnJS;
  private modeler: BpmnModeler;

  constructor(props: Props) {
    super(props);

    this.containerRef = React.createRef();

    this.modeler = new BpmnModeler();
  }

  componentDidMount() {
    const { url, diagramXML } = this.props;

    const container = this.containerRef.current;

    this.bpmnViewer = new BpmnJS({ container });

    this.bpmnViewer.on('import.done', (event: { error: any; warnings: any; }) => {
      const {
        error,
        warnings
      } = event;

      if (error) {
        return this.handleError(error);
      }

      this.bpmnViewer.get('canvas').zoom('fit-viewport');

      return this.handleShown(warnings);
    });

    if (url) {
      return this.fetchDiagram(url);
    }

    if (diagramXML) {
      return this.displayDiagram(diagramXML);
    }
  }

  componentWillUnmount() {
    this.bpmnViewer.destroy();
  }

  componentDidUpdate(prevProps: Props, prevState: { diagramXML: any; }) {
    const {
      props,
      state
    } = this;

    if (props.url !== prevProps.url) {
      return this.fetchDiagram(props.url);
    }

    const currentXML = props.diagramXML || state.diagramXML;

    const previousXML = prevProps.diagramXML || prevState.diagramXML;

    if (currentXML && currentXML !== previousXML) {
      return this.displayDiagram(currentXML);
    }
  }

  displayDiagram(diagramXML: any) {
    this.bpmnViewer.importXML(diagramXML);
  }

  fetchDiagram(url: RequestInfo) {

    this.handleLoading();

    fetch(url)
      .then(response => response.text())
      .then(text => this.setState({ diagramXML: text }))
      .catch(err => this.handleError(err));
  }

  handleLoading() {
    const { onLoading } = this.props;

    if (onLoading) {
      onLoading();
    }
  }

  handleError(err: any) {
    const { onError } = this.props;

    if (onError) {
      onError(err);
    }
  }

  handleShown(warnings: any) {
    const { onShown } = this.props;

    if (onShown) {
      onShown(warnings);
    }
  }

  render() {
    return (
      <div className="react-bpmn-diagram-container" ref={this.containerRef}>
        editor
            </div>
    );
  }
}

export default Editor;
