import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    Button,Icon,Form,Input
} from 'amazeui-react';

// 导航条
var navInstance = (
    <Nav pills>
        <NavItem active href="#">接口列表</NavItem>
        <NavItem href="newIns.html">新增接口</NavItem>
    </Nav>
);

//新增接口表单
var iconUser = <span className="am-icon-user"></span>;
var btnSearch = (
    <Button amStyle="primary">{/* Button 仍然需要设置样式 */}
        <Icon icon="search" />
    </Button>
);
var formInstance = (
    <Form>
        <Input addonBefore={iconUser} placeholder="User Name" amStyle="primary" />
        <Input addonBefore={iconUser} placeholder="User Name" amStyle="secondary" />
        <Input addonBefore={iconUser} placeholder="User Name" amStyle="success" />
        <Input addonBefore={iconUser} placeholder="User Name" amStyle="warning" />
        <Input addonBefore={iconUser} placeholder="User Name" amStyle="danger" />
        <Input btnBefore={btnSearch} placeholder="手气不错" amStyle="primary" />
    </Form>
);

ReactDOM.render(navInstance, document.getElementById('navInstance'));
ReactDOM.render(<div>formInstance</div>, document.getElementById('formInstance'));

registerServiceWorker();