import React, {Component} from 'react'
import {Table} from 'amazeui-react'
import NavInstance from './common'

//主页列表
class TabelInstance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            a:""
        }
    }

    componentWillMount(){
        let self = this
        var url = "http://192.168.1.244:5000/indexPage"
        var parms = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }
        fetch(url, parms).then(function (response) {
            if ("200" == response.status) {
                console.log("请求:" + url + " 成功！")
                return response.text()
            }
        }).then(function (text) {
            var rest = eval('('+ text +')')
            //这里不用使用this 因为返回后的this不再是本类中的this
            self.setState(
                {a: rest.result.a}
            )
        })
    }

    render() {
        return (
            <div>
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
                        <td>{this.state.a}</td>
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
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <NavInstance/>
                <TabelInstance/>
            </div>
        )
    }
}

export default Main