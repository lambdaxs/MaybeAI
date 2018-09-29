import React from 'react';
import { connect } from 'dva';
import {Row,Col,Input,Button,Select,Table,Checkbox} from 'antd'

const {Option,OptGroup} = Select;


@connect(({params}) => ({
    Params:params.params,
    Value:params.v,
}))
export default class View extends React.Component{
    constructor(props){
        super(props);
    }

    changeValue = (key,value,index)=>{
        this.props.dispatch({
            type:'params/changeParamsValue',
            payload:{
                key, value, index
            }
        })
    };

    addParams = ()=>{
        this.props.dispatch({
            type:'params/addParams'
        })
    };

    removeParams = (index)=>{
        this.props.dispatch({
            type:'params/removeParams',
            payload:{
                index
            }
        })
    };

    render(){

        const that = this;

        const colStyle = {marginRight:'8px',marginTop:'8px'};
        const {Params} = this.props;


        //参数节点
        const paramItemView = (item)=>{
            const {index,name,type,defaultValue,required,comment} = item;
            return (
                <div key={index}>
                    <Row>
                        <Col span={3} style={colStyle}>
                            <Input placeholder={'字段名'} value={name} onChange={(e)=>{that.changeValue('name',e.target.value,index)}}/>
                        </Col>
                        <Col span={2} style={colStyle}>
                            <Select value={type} style={{ width: 135 }} onChange={(e)=>{that.changeValue('type',e,index)}}>
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
                            <Input placeholder={'默认值'} value={defaultValue} onChange={(e)=>{that.changeValue('defaultValue',e.target.value,index)}}/>
                        </Col>
                        <Col span={1} style={colStyle}>
                            <div>
                                <Checkbox onChange={(e)=>{that.changeValue('required',e.target.checked,index)}} checked={required}>必选</Checkbox>
                            </div>
                        </Col>
                        <Col span={6} style={colStyle}>
                            <Input placeholder={'备注'} value={comment} onChange={(e)=>{that.changeValue('comment',e.target.value,index)}}/>
                        </Col>
                        <Col span={1} style={colStyle}>
                            <Button type={'danger'} onClick={()=>{
                                that.removeParams(index)
                            }}>删除</Button>
                        </Col>
                    </Row>
                </div>
            )
        };


        return (
          <div>
              <p style={{marginTop:'8px',fontSize:'16px',fontWeight:500}}>请求参数</p>
              <Row>
                  <Col span={3} style={colStyle}>
                      <span>字段名</span>
                  </Col>
                  <Col span={2} style={colStyle}>
                      <span>类型</span>
                  </Col>
                  <Col span={3} style={colStyle}>
                      <span>默认值</span>
                  </Col>
                  <Col span={1} style={colStyle}>
                      <span>是否必选</span>
                  </Col>
                  <Col span={6} style={colStyle}>
                      <span>备注</span>
                  </Col>
                  <Col span={1} style={colStyle}>
                      <span>操作</span>
                  </Col>
              </Row>
              {Params.map((v,i)=>{
                  v.index = i;
                  return paramItemView(v);
              })}
              <p>{this.props.Value}</p>
              <Button onClick={this.addParams}>添加</Button>
          </div>
        )
    }
}
