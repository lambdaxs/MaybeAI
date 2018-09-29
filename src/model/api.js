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
        *getList({payload},{call,put}){
            console.log(payload)
        }
    },
    reducers: {
        addModel(state, {payload}) {
            let {list} = state;
            list = list.concat(payload);
            return {
                ...state,
                list
            }
        }
    }
}