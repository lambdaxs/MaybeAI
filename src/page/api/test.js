import react from 'react'
import {connect} from 'dva'
import EditView from 'react-ace'
import {Row,Col,Button} from 'antd'

import 'brace/mode/javascript'
import 'brace/theme/github'

@connect(({params}) => ({
    Test:params.test
}))
class View extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden:false
        }
    }
    componentWillMount() {

    }

    changeParams(v){
        this.props.dispatch({
            type:'params/changeTestParams',
            payload:v
        })
    }

    render(){

        const {params='',response=''} = this.props.Test;

        return (
            <div>
                {   !this.state.hidden &&
                    <div>
                        <Row>
                            <Col span={10}>
                                <span>测试参数</span>
                            </Col>
                            <Col span={10} offset={1}>
                                <span>结果</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <EditView
                                    style={{width: '100%', height: '150px'}}
                                    mode={'javascript'}
                                    theme={'github'}
                                    value={params}
                                    highlightActiveLine={true}
                                    wrapEnabled={true}
                                    onChange={(value) => {
                                        this.changeParams(value)
                                    }}
                                    name={`editor_id_1`}
                                />
                            </Col>
                            <Col span={10} offset={1}>
                                <EditView
                                    style={{width: '100%', height: '150px'}}
                                    mode={'javascript'}
                                    theme={'github'}
                                    value={response}
                                    readOnly={true}
                                    highlightActiveLine={true}
                                    wrapEnabled={true}
                                    name={`editor_id_2`}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Button onClick={()=>{
                            this.setState({
                                hidden:true
                            })
                        }}>折叠测试</Button>
                        <Button onClick={()=>{
                            if (this.props.callback_test){
                                this.props.callback_test(params)
                            }
                        }} style={{marginLeft:'8px',color:'green'}}>测试</Button>
                    </div>
                }
                {
                    this.state.hidden &&
                        <Button onClick={()=>{
                            this.setState({
                                hidden:false
                            })
                        }}>展开测试</Button>
                }
            </div>
        )
    }
}

export default View