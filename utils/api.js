import * as okayapi from '../components/okayapi/okayapi.js';

export const myRequest = (options)=>{
    return new Promise((resolve,reject)=>{
        uni.request({
            url:okayapi.baseUrl,
            method: options.method || 'GET',
            data: okayapi.enryptData(options.data) || {},
            success: (res)=>{
                if(res.statusCode !== 200) {
                    return uni.showToast({
                        title: '获取数据失败'
                    })
                }
                resolve(res)
            },
            fail: (err)=>{
                uni.showToast({
                    title: '请求接口失败'
                })
                reject(err)
            }
        })
    })
}