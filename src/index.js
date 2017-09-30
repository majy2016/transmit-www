import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import {
    Button,
} from 'amazeui-touch';

class App extends Component {
    render() {
        return (
            <div>
                <Button>Hello World</Button>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
