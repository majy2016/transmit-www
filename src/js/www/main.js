import React, {Component} from 'react'
import {Table} from 'amazeui-react'
import NavInstance from './common'
import RequestText,{Eval} from '../biz/base'

//主页列表
class TabelInstance extends Component {

    constructor(props) {
        super(props)
        this.state = {r:""}
    }

    componentWillMount(){
        //构造请求
        let self = this
        var url = "http://192.168.1.244:5000/indexPage"
        var type ="GET"
        var r = RequestText(url,type)
        r.then(function (text) {
            // console.log(text)
            if(text){
                var rest = Eval(text)
                self.setState(
                    {r:rest.result}
                )
            }
        })
    }

    render() {
        // 循环数据构造列表
        var list = () =>{
            var l = []
            var is = this.state.r
            for (var i in is){
                var request_type
                var sts
                if(is[i].request_type === 1){
                    request_type = "GET"
                }else{
                    request_type = "POST"
                }
                if(is[i].status === 1){
                    sts = "开启"
                }else{
                    sts = "关闭"
                }
                l.push(<tr key={i}><td>{is[i].name}</td><td>{is[i].urlv}</td><td>{request_type}</td><td>{sts}</td></tr>)
            }
            return l
        }
        //返回html
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
                    {list()}
                    {/*<tr className="am-active">*/}
                        {/*<td></td>*/}
                        {/*<td>http://amazeui.org</td>*/}
                        {/*<td>2012-10-01</td>*/}
                    {/*</tr>*/}
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