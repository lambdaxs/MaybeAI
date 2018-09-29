import rq from './request';
import axios from 'axios'

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

const postReq = (url,data)=>{
  return axios.post(`${host}${url}`,data).then(rs=>{
      const {status,data} = rs;
      if (status === 200){
          return data
      }else {
          throw new Error('req error')
      }
  }).catch(err=>{
      return err
  })
};

export const addApi = async(data)=>{
  return await postReq(`/admin/api/add`,data)
};

export const updateApi = async(id,data)=>{
  return await postReq(`/admin/api/edit`,{_id:id,data})
};

export const detailApi = async(_id)=>{
  return await postReq(`/admin/api/detail`,{_id})
};

export const listApi = async(query)=>{
    return await postReq(`/admin/api/list`,query)
};