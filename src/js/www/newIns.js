/*
*   author:majiayang
*   2017
*
*   新增接口页面
*
*/

import React, {Component} from 'react';
import { Form } from 'antd';
import LayoutMa,{ MenuMa,FormItem,ButtonMa }  from './common'
import RequestText,{ Eval } from '../biz/base'
import getConfig from './config'


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
        console.log(thiz.props.form)
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
                    console.log(rest)
                }
            }
        })
    }

    render() {
        return (
            <FormMa onClick={this.handleChange} />
        )
    }
}

class FormMa_ extends  Component{

    call(){
        console.log(this)
        console.log(this.props.form)
        var x = this.props.form
        console.log(x.getFieldsValue())
        console.log(x.getFieldValue('name'))
        var y = x.getFieldsValue()
        for(var i in y){
            console.log(i)
            console.log(y[i])
        }
        console.log(x.name)
        console.log(x.validateFields())
        // this.props.onClick()
    }

    render(){

        return(
            <Form >
                <FormItem label="接口名称" text="请输入接口名称" name="name" f={this.props.form} id="1"/>
                {/*<FormItem label="接口类型" text="请输入接口类型" name="type" form={this.props.form} id="2"/>*/}
                {/*<FormItem label="接口url" text="请输入接口url" ref="url" />*/}
                <ButtonMa text="提交" onClick={this.call.bind(this)}/>
                <ButtonMa text="重置" htmlType="reset"/>
            </Form>
        )
    }
}

var FormMa = Form.create()(FormMa_)

class MainNewIns extends Component {
    render() {
        return (
            <LayoutMa spider={<MenuMa />} content={<FormInstance />} />
        )
    }
}

export default MainNewIns