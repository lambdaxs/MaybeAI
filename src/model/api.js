import {listApi,delApi} from "../util/service";

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
        *delApi({payload},{call,put}){
            const {code} = yield call(delApi,payload);
            return code === 0
        }
    },
    reducers: {
        setList(state,{payload}){
            payload = payload.map(v=>{
                const {_id,request={}} = v;
                const {url,comment} = request;
               return  {_id,url,comment}
            });
            return {
                ...state,
                list:payload,
            }
        }
    }
}