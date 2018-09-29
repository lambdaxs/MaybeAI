import {listApi} from "../util/service";

export default {
    namespaces: 'api',
    state: {
        list: [{
            id:'',
            url:'/user/sgin',
            comment:'用户登录',
        }]
    },
    effects:{
        *getApiList({payload},{call,put}){
            const res = yield call(listApi,payload);
            console.log(res);
            // yield put({
            //     type:'setList',
            //     payload:res.
            // })
        },
    },
    reducers: {
        setList(state,{payload}){
            return {
                ...state,
                list:payload,
            }
        }
    }
}