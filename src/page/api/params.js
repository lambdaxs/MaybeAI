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
                type:'string',
                defaultValue:'',
                required:true,
                comment:''
            }],
        }
    }

    changeName = (e,i)=>{
        const {params} = this.state;
        params[i].name = e.target.value;
        this.setState({
            params
        });
    };

    changeType = (e,i)=>{
        const {params} = this.state;
        params[i].type = e;
        this.setState({
            params
        });
    };

    changeRequire = (index)=>{
        const {params} = this.state;
        const checked = params[index].required;
        params[index].required = !checked;
        this.setState({
            params
        })
    };

    changeDefault = (e,i)=>{
        const {params} = this.state;
        params[i].defaultValue = e.target.value;
        this.setState({
            params
        })
    };

    changeComment = (e,i)=>{
        const {params} = this.state;
        params[i].comment = e.target.value;
        this.setState({
            params
        })
    };

    addParams = ()=>{
        let {params} = this.state;
        params.push({
            name:'',
            type:'string',
            defaultValue:'',
            required:true,
        });
        this.setState({
            params
        });
    };

    removeParams = (index)=>{
        let {params} = this.state;
        const pre = params.filter((_,i)=>i<index);
        const next = params.filter((_,i)=>i>index);
        this.setState({
            params:[...pre,...next]
        })
    };

    render(){

        const that = this;

        const colStyle = {marginRight:'8px',marginTop:'8px'};

        //参数节点
        const paramItemView = (item)=>{
            const {index,name,type,defaultValue,required,comment} = item;
            return (
                <div>
                    <Row>
                        <Col span={3} style={colStyle}>
                            <Input placeholder={'字段名'} value={name} onChange={(e)=>{that.changeName(e,index)}}/>
                        </Col>
                        <Col span={2} style={colStyle}>
                            <Select value={type} style={{ width: 135 }} onChange={(e)=>{that.changeType(e,index)}}>
                                <OptGroup label={"基本类型"}>
                                    <Option value={"string"}>string</Option>
                                    <Option value={"number"}>number</Option>
                                    <Option value={"bool"}>bool</Option>
                                </OptGroup>
                                <OptGroup label={"复合类型"}>
                                    <Option value={"object"}>object</Option>
                                    <Option value={"array"}>array</Option>
                                </OptGroup>
                            </Select>
                        </Col>
                        <Col span={3} style={colStyle}>
                            <Input placeholder={'默认值'} value={defaultValue} onChange={(e)=>{that.changeDefault(e,index)}}/>
                        </Col>
                        <Col span={1} style={colStyle}>
                            <div>
                                <Checkbox onChange={()=>{that.changeRequire(index)}} checked={required}>必选</Checkbox>
                            </div>
                        </Col>
                        <Col span={6} style={colStyle}>
                            <Input placeholder={'备注'} value={comment} onChange={(e)=>{that.changeComment(e,index)}}/>
                        </Col>
                        <Col span={1} style={colStyle}>
                            <Button type={'danger'} onClick={()=>{
                                this.removeParams(index)
                            }}>删除</Button>
                        </Col>
                    </Row>
                </div>
            )
        };


        return (
          <div>
              <p style={{marginTop:'8px'}}>请求参数</p>
              {this.state.params.map((v,i)=>{
                  v.index = i;
                  return paramItemView(v);
              })}
              <hr/>
              <Button onClick={()=>{
                  this.addParams()
              }}>添加</Button>
          </div>
        )
    }
}
