import React,{Component} from 'react'
import {
    NavItem,Nav
} from 'amazeui-react'

// 导航条
class NavInstance extends Component {
    render(){
        return(
            <div>
                <Nav pills>
                    <NavItem active href="/index">接口列表</NavItem>
                    <NavItem href="/newIns">新增接口</NavItem>
                </Nav>
            </div>
        )
    }
}

export default NavInstance