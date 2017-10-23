import React from 'react';   //var React = require('react');
import ReactDOM from 'react-dom';
import registerServiceWorker from './js/registerServiceWorker';
import {
    NavItem,Nav,Table
} from 'amazeui-react';

// 导航条
var navInstance = (
    <Nav pills>
        <NavItem active href="#">接口列表</NavItem>
        <NavItem href="src/www/newIns.html">新增接口</NavItem>
    </Nav>
);

//列表
var tabelInstance = (
    <Table bordered striped responsive>
        <thead>
        <tr>
            <th>接口名称</th>
            <th>接口URL</th>
            <th>请求类型</th>
            <th>开启状态</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Amaze UI</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
        </tr>
        <tr className="am-active">
            <td>Amaze UI(Active)</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
        </tr>
        </tbody>
    </Table>
);

ReactDOM.render(navInstance, document.getElementById('navInstance'));
ReactDOM.render(tabelInstance, document.getElementById('tabelInstance'));

registerServiceWorker();
