import react from 'react'
import {connect} from 'dva';
import {Row,Col,Input,Button} from 'antd'
import ReqView from './request'
import ParamView from './params'
import CalView from './cal'
import TestView from './test'

@connect(({params}) => ({
    Params:params.params,
    Cals:params.cals,
}))
class View extends react.Component {
    constructor(props) {
        super(props)

    }
    componentWillMount() {

    }

    save = ()=>{
        const {Cals,Params} = this.props;
        console.log(Cals,Params);
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
                <Button onClick={this.save}>show</Button>
            </div>
        )
    }
}

export default View