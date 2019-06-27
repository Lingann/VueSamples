/*
* 封装一波axios
* */
import axios from 'axios'


const service = axios.create({
    timeout:5000    // 请求超时时间
});

export function get(url,params = {}) {
    params.t = new Date().getTime();
    return service({
        url: url,
        method: 'get',
        header: {},
        params
    })
}

export function post(url,data={}) {
    //默认配置
    let sendObject = {
        url: url,
        method: 'post',
        header: {
            'Content-Type':'application/json;charset=UTF-8'
        },
        data: data
    };
    sendObject.data = JSON.stringify(data);
    return service(sendObject);
}

// 封装put方法(resfulAPI常用)
export function put(url,data ={}) {
    return service({
        url:url,
        method: 'put',
        header:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        data:JSON.stringify(data)
    })
}

export function deletes(url) {
    return service({
        url: url,
        method: 'delete',
        header: {}
    })
}

export {
    service
}
