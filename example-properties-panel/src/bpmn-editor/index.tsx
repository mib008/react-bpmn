import React, { PureComponent } from 'react';

import Viewer from './viewer';
//import Editor from './editor';

import './style.scss';

// "bpmn-js": "file:../../bpmn-js"

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

//function Hello({ name, enthusiasmLevel = 1 }: Props) {
//  if (enthusiasmLevel <= 0) {
//    throw new Error('You could be a little more enthusiastic. :D');
//  }

//  return (
//    <div className="hello">
//      <div className="greeting">
//        Hello {name + getExclamationMarks(enthusiasmLevel)}
//      </div>
//    </div>
//  );
//}

/**
 * 
 * */
class BpmnEditor extends PureComponent {
  private a: number;

  constructor(props: Props) {
    super(props);

    this.a = 1;
  }

  onClickCreateNew = () => {
    console.debug(this.a);
  };

  render() {
    return (
      <div className="bpmn-editor">
        <div className="create-or-load">
          <a href="" onClick={this.onClickCreateNew}>create new</a>
          or
          <a href="">load</a>
        </div>
        <Viewer />
        {/* <Editor /> */}
      </div>
    );
  }
}

export default BpmnEditor;
