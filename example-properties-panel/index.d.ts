// bpmn-js.d.ts

declare module 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js' {
    namespace MyLib {
        class A { }

        class B { }

        // 使用时
        // 我们可以使用
        // import * as MyLib from 'my-lib'
        // const a = new MyLib.A();

        // 如果开启了 ES Module 融合模式 (esModuleInterop=true)
        // 我们可以使用
        // import { A } from 'my-lib'
        // const a = new A()
    }
    export = MyLib
}

declare module 'bpmn-js/lib/Modeler.js' {
    namespace MyLib {
        class A { }

        class B { }

        // 使用时
        // 我们可以使用
        // import * as MyLib from 'my-lib'
        // const a = new MyLib.A();

        // 如果开启了 ES Module 融合模式 (esModuleInterop=true)
        // 我们可以使用
        // import { A } from 'my-lib'
        // const a = new A()
    }
    export = MyLib
}
