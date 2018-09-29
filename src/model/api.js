import {listApi} from "../util/service";

export default {
    namespaces: 'api',
    state: {
        list: []
    },
    effects:{
        *getApiList({payload},{call,put}){
            const {code,data} = yield call(listApi,payload);
            if (code === 0){
                yield put({
                    type:'setList',
                    payload:data.list
                })
            }
        },
    },
    reducers: {
        setList(state,{payload}){
            payload = payload.map(v=>{
                const {_id,request:{url,comment}} = v;
               return  {_id,url,comment}
            });
            return {
                ...state,
                list:payload,
            }
        }
    }
}