/*
*   author:majiayang
*   2017
*
*   html 基础方法类
*
*/

// fetch 请求方法
function RequestText(arg1,arg2,arg3) {
    var url = arg1
    var type = arg2
    var parms = {
        method:type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }
    var body = arg3
    return fetch(url,parms,body).then(function (response) {
        if (200 === response.status) {
            console.log("请求:" + url + " 成功！")
            return response.text()
        }else {
            console.log("请求失败！")
        }
    })
}

export default RequestText

//字符串转object方法，同eval('('+data+')')
function Eval(fn) {
    var Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)();
}

export {Eval}