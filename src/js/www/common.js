import React, {Component} from 'react'
import {
    NavItem, Nav, Button,ModalTrigger,Modal
} from 'amazeui-react'

// 导航条
class NavInstance extends Component {
    render() {
        return (
            <div>
                <Nav pills>
                    <NavItem active href="/index">接口列表</NavItem>
                    <NavItem href="/newIns">新增接口</NavItem>
                </Nav>
            </div>
        )
    }
}

//按钮
/*<Button amStyle="primary">Primary</Button>*/
/*<Button amStyle="secondary">Secondary</Button>*/
/*<Button amStyle="success">Success</Button>*/
/*<Button amStyle="warning">Warning</Button>*/
/*<Button amStyle="danger">Danger</Button>*/
/*<Button amStyle="link">Link</Button>*/
class ButtonsInstance extends Component {
    render() {
        return (
            <Button  type={this.props.ty}  amStyle={this.props.stl} onClick={this.props.onclik}>{this.props.vl}</Button>
        )
    }
}

//弹窗
var modal = <Modal title="Amaze UI Modal">请求结果：</Modal>;
// var modal = <Modal title="Amaze UI Modal">{this.props.title}</Modal>;
class ModalInstance extends Component {
    render(){
        return(
            <ModalTrigger modal={modal}>
                <Button amStyle='primary'>{this.props.text}</Button>
            </ModalTrigger>
        )
    }
}

export default NavInstance
export  { ButtonsInstance,ModalInstance }