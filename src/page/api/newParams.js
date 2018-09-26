import React from 'react';
import { connect } from 'dva';
import {Row,Col,Input,Button,Select,Table,Checkbox} from 'antd'

const {Option,OptGroup} = Select;


@connect(() => ({

}))
export default class View extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            params:[{
                name:'',
                type:'',
                defaultValue:'',
                require:false
            }]
        }
    }

    //根节点为object或者array
    //其余节点为string number bool null
    render(){
        return <div>
            <Row>
                <Col>
                    <textArea></textArea>
                </Col>
            </Row>
        </div>
    }

}