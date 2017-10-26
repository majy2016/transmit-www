/*
*   author:majiayang
*   2017
*
*   新增接口页面
*
*/

import React, {Component} from 'react';
import NavInstance,{ ButtonsInstance,ModalInstance }  from './common'
import RequestText,{ Eval } from '../biz/base'
import getConfig from './config'
import {
    ButtonToolbar,Input,Form
} from 'amazeui-react';

//新增接口表单
class FormInstance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"",
            url:""
        }
        //内部函数需要bind一下外面类的中this才能使用
        this.handleChange = this.handleChange.bind(this)
    }

    //onclick后调用方法
    handleChange(){
        var thiz = this
        var i = thiz.refs.inputName.getValue()
        var u = thiz.refs.inputUrl.getValue()
        var s = thiz.refs.inputType.getValue()
        var url = getConfig("addNewUrl")
        var type ="POST"
        var body = {
            "name":i,
            "urlv":u,
            "request_type":s
        }
        var r = RequestText(url,type,body)
        r.then(function (text) {
            if(text){
                var rest = Eval(text)
                // console.log(rest)
                if (rest.status ===1){
                    <ModalInstance />.show()
                }
            }
        })
    }

    render() {
        return (
            <div>
                <Form className="am-form" target="_blank">
                    <Input type="text" label="接口名称：" id="doc-ipt-1" placeholder="输入接口名称"  ref="inputName" defaultValue=""/>
                    <Input type="text" label="接口URL：" id="doc-ipt-2" placeholder="输入URL" ref="inputUrl" />
                    <Input type="select" label="请求类型："  ref="inputType" >
                        <option value="0">POST</option>
                        <option value="1">GET</option>
                    </Input>
                    <ButtonToolbar>
                        <ButtonsInstance onclik={this.handleChange} vl = "提交"/>
                        <ButtonsInstance ty="reset" vl = "重置"/>
                    </ButtonToolbar>
                </Form>
            </div>
        )
    }
}

class MainNewIns extends Component {
    render() {
        return (
            <div>
                <NavInstance/>
                <FormInstance/>
            </div>
        )
    }
}

export default MainNewIns