export default {
    namespaces: 'params',
    state: {
        request:{
            url:'',
            comment:'',
        },
        params:[{
            name:'xiaos',
            type:'string',
            defaultValue:'',
            required:true,
            comment:''
        }],
        cals:[{
            cmd: '',
            args: [''],
            dataInfo: '',
            contextKey: '',
            index: 0,
            comment: '',
        }],
        test:{
            params:"",
            response:"",
        }
    },
    effects:{
        *getList({payload},{call,put}){
            console.log(payload)
        }
    },
    reducers: {
        changeTestParams(state,{payload}){
            const {test} = state;
            test.params = payload;
            return {
                ...state,
                test:Object.assign({},test)
            }
        },
        changeRequestValue(state,{payload}){
            const {key, value} = payload;
            const {request} = state;
            request[key] = value;
            return {
                ...state,
                request:Object.assign({},request),
            };
        },
        changeParamsValue(state,{payload}) {
            const {key, value, index} = payload;
            const {params} = state;
            params[index][key] = value;
            return {
                ...state,
                params:Object.assign([],params),
            };
        },
        addParams(state,{payload}){
            const {params} = state;
            params.push({
                name:'',
                type:'string',
                defaultValue:'',
                required:true,
                comment:''
            });
            return {
                ...state,
                params:Object.assign([],params),
            }
        },
        removeParams(state,{payload}){
            const {index} = payload;
            const {params} = state;
            params.splice(index,1);
            return {
                ...state,
                params:Object.assign([],params),
            }
        },
        changeCalsValue(state,{payload}) {
            const {key, value, index} = payload;
            const {cals} = state;
            cals[index][key] = value;
            return {
                ...state,
                cals:Object.assign([],cals),
            };
        },
        addCals(state,{payload}){
            const {cals} = state;
            cals.push({
                cmd: '',
                args: [''],
                dataInfo: '',
                contextKey: '',
                index: 0,
                comment: '',
            });
            return {
                ...state,
                cals:Object.assign([],cals),
            }
        },
        removeCals(state,{payload}){
            const {index} = payload;
            const {cals} = state;
            cals.splice(index,1);
            return {
                ...state,
                cals:Object.assign([],cals),
            }
        },
        addCalsArg(state,{payload}){
            const {index} = payload;
            const {cals} = state;
            const {args} = cals[index];
            args.push('');
            cals[index].args = args;
            return {
                ...state,
                cals:Object.assign([],cals)
            }
        },
        removeCalsArg(state,{payload}) {
            const {index,argIndex} = payload;
            const {cals} = state;
            let {args} = cals[index];
            args.splice(argIndex, 1);
            cals[index].args = args;
            return {
                ...state,
                cals:Object.assign([],cals)
            }
        },
        changeCalsArgs(state,{payload}){
            const {index,argIndex,value} = payload;
            let {cals} = state;
            const {args} = cals[index];
            args[argIndex] = value;
            cals[index].args = args;
            return {
                ...state,
                cals:Object.assign([],cals)
            }

        }
    }
}