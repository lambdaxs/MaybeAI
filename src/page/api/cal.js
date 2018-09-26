import React from 'react';
import { connect } from 'dva';
import {Input,Button,Select,Table,Checkbox} from 'antd'

const {Option,OptGroup} = Select;


@connect(() => ({

}))
export default class View extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            params:[{
                name:'name',
                type:'string',
                defaultValue:'xiaos',
                require:false
            }]
        }
    }

    changeListValue = (key,value,index)=>{
        const {params} = this.state;
        params[index][key] = value;
        this.setState({
            params
        });
    };

    addParams = ()=>{
        let {params} = this.state;
        params.push({
            name:'',
            type:'',
            defaultValue:'',
            require:true,
        });
        this.setState({
            params
        });
    };

    render(){

        const that = this;
        const dataSource = this.state.params;

        const columns = [{
            title:'计算类型',
            dataIndex:'cal',
            key:'cal',
            render(t,_,i){
                return (
                    <div>
                        <Select value={t} style={{ width: 135 }} onChange={(value)=>{that.changeListValue('cal',value,i)}}>
                            <OptGroup label={"数据计算"}>
                                <Option value={"mongo"}>mongo</Option>
                                <Option value={"redis"}>redis</Option>
                            </OptGroup>
                            <OptGroup label={"逻辑计算"}>
                                <Option value={"cal"}>calculate</Option>
                            </OptGroup>
                        </Select>
                    </div>
                )
            }
        },{
            title:'计算函数',
            dataIndex:'cmd',
            key:'cmd',
            render(t,_,i){
                return (
                    <div>
                        <Input value={t} onChange={(e)=>{that.changeListValue('cmd',e.target.value,i)}}/>
                    </div>
                )
            }
        },{
            title:'参数值',
            dataIndex:'args',
            key:'args',
            editable: true,
            render: function (t,_,i) {
                return (
                    <div>
                        <Input placeholder={'默认值'} value={t} onChange={(e)=>{that.changeDefault(e,i)}}/>
                    </div>
                )
            }
        },{
            title:'数据集合',
            dataIndex:'require',
            key:'require',
            render(t,r,i){
                return (
                    <div>
                        <Checkbox onChange={()=>{that.changeRequire(i)}} checked={t}></Checkbox>
                    </div>
                )
            }
        },{
            title:'操作',
            dataIndex:'option',
            key:'option',
            render(t,r){
                return (
                    <div>
                        <a href="">删除</a>
                    </div>
                )
            }
        }];


        return (
            <div>
                <Table dataSource={dataSource} columns={columns} pagination={false} title={()=>"计算单元"} footer={()=>{
                    return <Button onClick={that.addParams}>添加</Button>
                }}/>
            </div>
        )
    }
}

