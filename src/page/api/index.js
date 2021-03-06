import react from 'react'
import {connect} from 'dva';
import {Row,Col,Input,Button,message} from 'antd'
import ReqView from './request'
import ParamView from './params'
import CalView from './cal'
import TestView from './test'

@connect(({params}) => ({
    Request:params.request,
    Params:params.params,
    Cals:params.cals,
    Test:params.test,
}))
class View extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'new',
            id:'',
        }
    }

    componentWillMount() {
        const {match:{params={}}} = this.props;
        const {id} = params;
        if (id){//编辑模式
            this.setState({
                mode:'edit',
                id:id
            });
            this.props.dispatch({
                type:'params/getApiDetail',
                payload:id,
            }).then(rs=>{
                console.log('获取列表成功');
            }).catch(err=>{
                message.error('获取列表失败')
            })
        }else {
            this.setState({
                mode:'new'
            })
        }
    }

    componentWillUnmount(){
        this.props.dispatch({
            type:'params/cleanApiDetail'
        })
    }

    update = ()=>{
        const {id} = this.state;
        const {Request,Cals,Params,Test} = this.props;
        const data = {
            request:Request,
            params:Params,
            cals:Cals,
            test:Test,
        };
        this.props.dispatch({
            type:'params/updateApi',
            payload:{id,data}
        }).then(rs=>{
            if (rs){
                message.success('更新成功')
                //跳转
            }else {
                message.success('更新失败')
            }
        })
    };

    create = ()=>{
        const {Request,Cals,Params,Test} = this.props;
        const data = {
            request:Request,
            params:Params,
            cals:Cals,
            test:Test,
        };
        this.props.dispatch({
            type:'params/addApi',
            payload:data
        }).then(rs=>{
            if (rs){
                message.success('新增成功')
                //跳转
            }else {
                message.success('新增失败')
            }
        })
    };

    save = ()=>{
        const {mode} = this.state;
        if (mode === 'edit'){
            this.update();
        }else {
            this.create();
        }
    };

    render(){
        const septor = (<div><hr/></div>);

        return (
            <div>
                <ReqView/>
                {septor}
                <ParamView/>
                {septor}
                <CalView/>
                {septor}
                <TestView/>
                {septor}
                {
                    this.state.mode === 'new' &&
                    <Button onClick={this.save}>新建</Button>
                }
                {
                    this.state.mode === 'edit' &&
                    <Button onClick={this.save}>更新</Button>
                }
            </div>
        )
    }
}

export default View