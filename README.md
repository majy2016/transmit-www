插件：
npm install antd babel-plugin-import --save
网址：
https://ant.design/index-cn

npm install -g create-react-app yarn

create-react-app antd-demo

yarn add antd

yarn add react-app-rewired --dev

yarn add babel-plugin-import --dev

yarn add react-app-rewire-less --dev

yarn start

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    index.css
    index.js        //
    registerServiceWorker.js // 缓存
```

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

//class 定义要大写开头


```
class Test extends React.Component {
    constructor(props) {
        super(props);
        alert("constructor");
        this.state = {str: "hello"};
        //构造函数，在创建组件的时候调用一次。
    }

    componentWillMount() {
        alert("componentWillMount");
        //在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。
    }

    componentDidMount() {
        alert("componentDidMount");
        //在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs
    }

    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
        //props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
        //组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。
    }

    componentWillUpdate() {
        alert("componentWillUpdate");
        //shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。
    }

    componentDidUpdate() {
        alert("componentDidUpdate");
        //除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
    }

    componentWillUnmount() {
        alert("componentWillUnmount");
        //组件被卸载的时候调用。一般在componentDidMount里面注册的事件需要在这里删除。
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        alert("render");
        return(
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}

class Container  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle() {
        // 这里卸载父组件也会导致卸载子组件
        React.unmountComponentAtNode(document.getElementById("container"));
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                XXX
            </div>
        );
    }
}
```