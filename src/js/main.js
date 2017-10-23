import React from 'react';
import {Table} from 'amazeui-react';
import navInstance from './common'

//主页列表
var tabelInstance = (
    <div>
        <navInstance />
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
    </div>
);
export default tabelInstance;