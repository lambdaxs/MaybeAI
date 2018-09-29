import react from 'react'
import {connect} from 'dva'
import {Row,Col,Select,Input} from 'antd'

const Option = Select.Option;

@connect(({params}) => ({
    Request:params.request
}))
class View extends react.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }

    changeRequestValue(key,value){
        this.props.dispatch({
            type:'params/changeRequestValue',
            payload:{
                key,value
            }
        })
    }

    render(){
        const {url='',comment=''} = this.props.Request;

        return (
            <div>
                <p style={{marginTop:'8px',fontSize:'16px',fontWeight:500}}>http接口</p>
                <div>
                    <Row>
                        <Col span={16} style={{marginRight:'8px'}}>
                            <span>接口名</span>
                        </Col>
                        <Col span={6}>
                            <span>备注</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} style={{marginRight:'8px'}}>
                            <Input value={url} onChange={(e)=>{
                                this.changeRequestValue('url',e.target.value)
                            }}/>
                        </Col>
                        <Col span={6}>
                            <Input value={comment} onChange={(e)=>{
                                this.changeRequestValue('comment',e.target.value)
                            }}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default View