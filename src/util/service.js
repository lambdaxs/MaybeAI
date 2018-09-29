import rq from './request'

const host = 'http://127.0.0.1:3000';

const jsonOption = (body,headers={})=>{
    return {
        method:'POST',
        body:JSON.stringify(body),
        headers:new Headers({
            ...headers,
            'Content-Type': 'application/json'
        }),
    }
};

const jsonRequest = (url,body,headers={})=>{
    const option = jsonOption(body,headers);
    return new Promise((s,f)=>{
        rq(`${host}${url}`,option).then(res=>{
            s(res)
        }).catch(err=>{
            console.log("req error:"+err.message);
            f('err')
        })
    })
};

export const addApi = async(data)=>{
  return await jsonRequest(`/admin/api/add`,data)
};

export const listApi = async(query)=>{
    return await jsonRequest(`/admin/api/list`,query)
};