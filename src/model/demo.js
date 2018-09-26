export default {
    namespaces: 'demo',
    state: {
        List: [{
            id: 1,
            setup: 'this is a setup words',
            txt: 'this is a txt'
        }, {
            id: 2,
            setup: 'this is a setup words!!!',
            txt: 'this is a txt???'
        }]
    },
    effects:{
        *getList({payload},{call,put}){
            console.log(payload)
        }
    },
    reducers: {
        addModel(state, {payload}) {
            let {List} = state;
            List = List.concat(payload);
            console.log('add');
            console.log(List);
            return {
                ...state,
                List
            }
        }
    }
}