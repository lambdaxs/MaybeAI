import React from 'react';
import {connect} from 'dva';
import {Input, Button, Select, Table, Checkbox, Row, Col} from 'antd'
import EditView from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/github'

const {Option, OptGroup} = Select;


@connect(({params}) => ({
    Cals:params.cals
}))
export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    changeListValue = (key, value, index) => {
        this.props.dispatch({
            type:'params/changeCalsValue',
            payload:{key,value,index}
        })
    };

    addParams = () => {
        this.props.dispatch({
            type:'params/addCals',
        })
    };

    addArgs = (index) => {
        this.props.dispatch({
            type:'params/addCalsArg',
            payload:{index}
        })
    };

    removeArgs = (index, argIndex) => {
        this.props.dispatch({
            type:'params/removeCalsArg',
            payload:{index,argIndex}
        })
    };

    removeParams = (index) => {
        this.props.dispatch({
            type:'params/removeCals',
            payload:{index}
        })
    };

    changeArgs = (value, index, argIndex) => {
        this.props.dispatch({
            type:'params/changeCalsArgs',
            payload:{value,index,argIndex}
        })
    };

    render() {

        const that = this;
        const colStyle = {marginRight: '8px', marginTop: '8px'};

        const paramItemView = (item) => {
            const {cal = '', cmd = '', args = [], dataInfo = '', contextKey = '', index, comment = ''} = item;
            return (
                <div key={item.index}>
                    <Row>
                        <Col span={2} style={colStyle}>
                            <Select value={cal} style={{width: 135}} onChange={(value) => {
                                that.changeListValue('cal', value, index)
                            }}>
                                <OptGroup label={"数据计算"}>
                                    <Option value={"mongo"}>mongo</Option>
                                    <Option value={"redis"}>redis</Option>
                                </OptGroup>
                                <OptGroup label={"逻辑计算"}>
                                    <Option value={"cal"}>cal</Option>
                                </OptGroup>
                            </Select>
                            <Col style={colStyle}>
                                <Input value={contextKey} placeholder={'中间结果key'} onChange={(v) => {
                                    that.changeListValue('contextKey', v.target.value, index)
                                }}/>
                            </Col>
                        </Col>
                        <Col span={3} style={colStyle}>
                            <Input value={cmd} placeholder={'函数'} onChange={(value) => {
                                that.changeListValue('cmd', value.target.value, index)
                            }}/>
                            {
                                (cal === 'mongo' || cal === 'redis') &&
                                <Col style={colStyle}>
                                    <Input value={dataInfo} placeholder={'数据源，以/分割'} onChange={(value) => {
                                        that.changeListValue('dataInfo', value.target.value, index)
                                    }}/>
                                </Col>
                            }
                        </Col>
                        <Col span={10} style={colStyle}>
                            {
                                args.map((arg, argIndex) => {
                                    return (
                                        <div key={argIndex}>
                                            <Row>
                                                <Col span={19} style={colStyle}>
                                                    <EditView
                                                        style={{width: '100%', height: '100px'}}
                                                        mode={'javascript'}
                                                        theme={'github'}
                                                        value={arg}
                                                        highlightActiveLine={true}
                                                        wrapEnabled={true}
                                                        onChange={(newv) => {
                                                            this.changeArgs(newv, index, argIndex)
                                                        }}
                                                        name={`editor_id_${index}_${argIndex}`}
                                                    />
                                                </Col>
                                                <Col span={4}>
                                                    <Button onClick={() => {
                                                        if (args.length === 1){
                                                            return
                                                        }
                                                        that.removeArgs(index, argIndex)
                                                    }}>删除</Button>
                                                    {
                                                        (argIndex === args.length - 1) &&
                                                        <Button onClick={() => {
                                                            that.addArgs(index)
                                                        }}>添加</Button>
                                                    }
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col span={3} style={colStyle}>
                            <Input placeholder={'备注'} value={comment} onChange={(e) => {
                                that.changeListValue('comment',e.target.value, index)
                            }}/>
                        </Col>
                        <Col span={1} style={colStyle}>
                            <Button type={'danger'} onClick={() => {
                                this.removeParams(index)
                            }}>删除</Button>
                        </Col>
                    </Row>
                </div>
            )
        };

        const items = this.props.Cals.map((v, index) => {
            v.index = index;
            return v
        });

        return (
            <div>
                <p style={{marginTop:'8px',fontSize:'16px',fontWeight:500}}>计算逻辑</p>
                <Row>
                    <Col span={2} style={colStyle}>
                        <span>计算方式</span>
                    </Col>
                    <Col span={3} style={colStyle}>
                        <span>计算函数</span>
                    </Col>
                    <Col span={8} style={colStyle}>
                        <span>参数组</span>
                    </Col>
                    <Col span={3} style={colStyle}>
                        <span>备注</span>
                    </Col>
                    <Col span={1} style={colStyle}>
                        <span>操作</span>
                    </Col>
                </Row>
                {
                    items.map(item => {
                        return paramItemView(item)
                    })
                }
                <Button onClick={this.addParams}>添加</Button>
            </div>
        )
    }
}

