import React, {Component} from 'react'
import {Table} from 'amazeui-react'
import NavInstance from './common'
import RequestText from '../biz/base'

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
        var url = "http://192.168.1.85:5000/indexPage"
        var type ="GET"
        var r = RequestText(url,type)
        r.then(function (text) {
            // console.log(text)
            if(text){
                var rest = eval('('+ text +')')
                self.setState(
                    {a:rest.result.a}
                )
            }


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