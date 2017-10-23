import React,{Component} from 'react';
import NavInstance from './common'
import {
    Button,Icon,Form,Input
} from 'amazeui-react';

//新增接口表单
var iconUser = <span className="am-icon-user"></span>;
var btnSearch = (
    <Button amStyle="primary">{/* Button 仍然需要设置样式 */}
        <Icon icon="search" />
    </Button>
)

class FormInstance extends Component {
    render(){
        return(
            <div>
                <Form>
                    <Input addonBefore={iconUser} placeholder="User Name" amStyle="primary" />
                    <Input addonBefore={iconUser} placeholder="User Name" amStyle="secondary" />
                    <Input addonBefore={iconUser} placeholder="User Name" amStyle="success" />
                    <Input addonBefore={iconUser} placeholder="User Name" amStyle="warning" />
                    <Input addonBefore={iconUser} placeholder="User Name" amStyle="danger" />
                    <Input btnBefore={btnSearch} placeholder="手气不错" amStyle="primary" />
                </Form>
            </div>
        )
    }
}

class MainNewIns extends Component{
    render(){
        return(
            <div>
                <NavInstance />
                <FormInstance/>
            </div>
        )
    }
}

export default MainNewIns