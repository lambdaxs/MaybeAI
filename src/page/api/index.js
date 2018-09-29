import react from 'react'
import {connect} from 'dva';
import {Row,Col,Input,Button} from 'antd'
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
        super(props)

    }
    componentWillMount() {

    }

    save = ()=>{
        const {Request,Cals,Params,Test} = this.props;
        const data = {
            request:Request,
            params:Params,
            cals:Cals,
            test:Test,
        };
        //add
        console.log(data);
        //
        this.props.dispatch({
            type:'params/addApi',
            payload:data
        })
    }
    ;

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
                <Button onClick={this.save}>show</Button>
            </div>
        )
    }
}

export default View