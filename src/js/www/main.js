/*
*   author:majiayang
*   2017
*
*   主页页面
*
*/

import React, {Component} from 'react'
import {Table} from 'antd'
import LayoutMa,{MenuMa} from './common'
import RequestText,{Eval} from '../biz/base'
import getConfig from './config'

//主页列表
class TabelInstance extends Component {

    constructor(props) {
        super(props)
        this.state = {r:""}
    }

    componentWillMount(){
        //构造请求
        let self = this
        let url = getConfig("indexPageUrl")
        let type ="GET"
        let r = RequestText(url,type)
        r.then(function (text) {
            // console.log(text)
            if(text){
                let rest = Eval(text)
                self.setState(
                    {r:rest.result}
                )
            }
        })
    }

    //返回列表
    render() {
        //表头
        const columns = [{
            title: '接口名称',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        }, {
            title: '接口类型',
            dataIndex: 'request_type',
        }, {
            title: '接口url',
            dataIndex: 'urlv',
        },{
            title: '开启状态',
            dataIndex: 'status'
        }]

        //处理数据
        const list = () => {
            let l = []
            let ls = this.state.r
            for(let i in ls){
                let sts
                let rtype
                if(ls[i].request_type ===1){
                    rtype = "GET"
                }else {
                    rtype = "POST"
                }
                if(ls[i].status === 1){
                    sts = "开启"
                }else {
                    sts = "关闭"
                }
                let ll = {
                    key:ls[i].id,
                    name:ls[i].name,
                    request_type:rtype,
                    urlv:ls[i].urlv,
                    status:sts
                }
                l.push(ll)
            }
            return l
        }

        //列表选择方法
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
            }),
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={list()} />
        )
    }
}

class Main extends Component {
    render() {
        return (
            <LayoutMa spider={<MenuMa />} content={<TabelInstance />} />
        )
    }
}

export default Main