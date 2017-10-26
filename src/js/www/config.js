/*
*   author:majiayang
*   2017
*
*   配置文件类
*
*/

// 主页的请求url
const indexPageUrl = "http://192.168.1.85:5000/indexPage"

//新增接口url
const addNewUrl = "http://192.168.1.85:5000/addnew"


//获取配置文件函数
function getConfig(arg) {
    let myconfig = {
        "indexPageUrl":indexPageUrl,
        "addNewUrl":addNewUrl
    }
    return myconfig[arg]
}

export default getConfig