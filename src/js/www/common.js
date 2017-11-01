/*
*   author:majiayang
*   2017
*
*   html 组件公共类
*
*/

import React, {Component} from 'react'
import {Form, Input, Button, Select, Menu, Icon, Layout} from 'antd'
import {Key} from '../biz/base'

/**
 *
 * 布局
 *
 */
class LayoutMa extends Component {

    render() {
        const {Header, Content, Footer, Sider} = Layout

        return (
            <div>
                <Layout>
                    <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '0'}}>
                        {this.props.spider}
                    </Sider>
                    <Layout style={{marginLeft: 200}}>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                                {this.props.content}
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Design ©2017 Created by Majy
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

/**
 *  菜单
 *
 * todo
 */
class MenuMa extends Component {
    render() {
        const SubMenu = Menu.SubMenu

        const MenuItemGroup = Menu.ItemGroup

        // handleClick = (e) => {
        //     console.log('click ', e);
        // }

        return (
            <Menu
                onClick={this.handleClick}
                style={{width: 240}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>测试系统</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1"><a href="/index">接口列表</a></Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3" ><a href="/newIns">新增接口</a></Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}


/**
 *  button
 *  通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled
 *
 *  type 设置按钮类型，可选值为 primary dashed danger 或者不设
 *  htmlType 设置 button 原生的 type 值，可选值请参考 HTML 标准
 *  icon   设置按钮的图标类型
 *  shape  设置按钮形状，可选值为 circle 或者不设   primary  search  dashed
 *  size   设置按钮大小，可选值为 small large 或者不设
 *  loading  设置按钮载入状态
 *  onClick   click 事件的 handler
 *  ghost   幽灵属性，使按钮背景透明
 *
 */
class ButtonMa extends Component {

    render() {
        return (
            <div>
                <Button type={this.props.type}
                        shape={this.props.shape}
                        size={this.props.size}
                        htmlType={this.props.htmlType}
                        onClick={this.props.onClick}
                        ref={this.props.ref}
                >
                    {this.props.text}
                </Button>
            </div>
        )

    }

}

/**
 *
 * 表格元素
 * 提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容
 * validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。
 * hasFeedback：用于给输入框添加反馈图标。
 * label  标签名
 * status 外框状态     unavailable // warning  // validating //success
 * text   input框内文字
 * help   设置校验文案
 * id     id
 *
 */
class FormItem extends Component {

    render() {
        const FormItem = Form.Item
        const Option = Select.Option
        const { getFieldDecorator  } = this.props.f
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        }

        var constrForm = () => {
            let r = []
            if (this.props.formtype === "1") {
                r.push(
                    <FormItem
                        {...formItemLayout}
                        label={this.props.label}
                        validateStatus={this.props.status}
                        help={this.props.help}
                        hasFeedback
                        key={Key()}
                    >
                        <Input placeholder={this.props.text} id={this.props.id} ref={this.props.ref} key={Key()}/>
                    </FormItem>
                )
            } else if (this.props.formtype === "2") {
                r.push(
                    <FormItem
                        {...formItemLayout}
                        label={this.props.label}
                        hasFeedback
                        validateStatus={this.props.status}
                        help={this.props.help}
                        key={Key()}
                    >
                        <Select defaultValue="1">
                            <Option value="0">POST</Option>
                            <Option value="1">GET</Option>
                        </Select>
                    </FormItem>
                )
            } else {
                r.push(
                    <FormItem
                        {...formItemLayout}
                        label={this.props.label}
                        validateStatus={this.props.status}
                        help={this.props.help}
                        key={Key()}
                        id={this.props.id}
                    >
                        <Input placeholder={this.props.text} id={this.props.id} {...getFieldDecorator ('name')} />
                    </FormItem>
                )
            }
            return r
        }

        return (
            <div>
                {constrForm()}
            </div>
        )
    }
}


export default LayoutMa
export {MenuMa, FormItem, ButtonMa}