
// fetch 请求方法
function RequestText(arg1,arg2) {
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
    return fetch(url,parms).then(function (response) {
        if (2000 === response.status) {
            console.log("请求:" + url + " 成功！")
            return response.text()
        }else {
            console.log("请求失败！")
        }
    })
}

export default RequestText