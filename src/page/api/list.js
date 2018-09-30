import react from 'react'
import {Table,Input,Row,Col,Button,Popconfirm,message} from 'antd'
import {connect} from 'dva';
import Link from 'umi/link';
import router from 'umi/router';

@connect(({api}) => ({
    List:api.list
}))
class View extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            query_url:'',
            query_comment:'',
            current_page:1,
        }
    }

    componentWillMount() {
        this.getList()
    }

    getList = ()=>{
        this.props.dispatch({
            type:'api/getApiList',
            payload:{}
        })
    };

    render(){
        const that = this;
        const cols = [{
            title:'接口路径',
            dataIndex:'url',
            key:'url',
        },{
            title:'接口备注',
            dataIndex:'comment',
            key:'comment',
        },{
            title:'操作',
            dataIndex:'op',
            key:'op',
            render(_,r){
                const {_id} = r;
                return (
                    <div>
                        <Link to={`/api/edit/${_id}`}>编辑</Link>/<Popconfirm title={"是否删除"} onConfirm={()=>{
                        that.props.dispatch({
                            type:'api/delApi',
                            payload:_id
                        }).then(rs=>{
                            if (rs){
                                message.success('删除成功');
                                that.getList()
                            }else {
                                message.error('删除失败');
                            }
                        })
                    }}><a>删除</a></Popconfirm>
                    </div>
                )
            }
        }];

        const datas = this.props.List.map((v,i)=>{
            v.key = i;
            return v;
        });
        const {query_url,query_comment} = this.state;
        const query_style = {marginRight:'8px',marginTop:'8px',marginBottom:'8px'};

        return (
            <div>
                <div>
                    <Row>
                        <Col span={3} style={query_style}>
                            <Input  placeholder={'查询url'} value={query_url} onChange={(e)=>{
                                this.setState({
                                    query_url:e.target.value
                                })
                            }}/>
                        </Col>
                        <Col span={3} style={query_style}>
                            <Input  placeholder={'查询备注'} value={query_comment} onChange={(e)=>{
                                this.setState({
                                    query_comment:e.target.value
                                })
                            }}/>
                        </Col>
                        <Col span={1} style={query_style}>
                            <Button>查询</Button>
                        </Col>
                        <Col span={2} style={query_style}>
                            <Button onClick={()=>{
                                router.push('/api/new')
                            }}>新增接口</Button>
                        </Col>
                    </Row>

                </div>
                <Table dataSource={datas} columns={cols}></Table>
            </div>
        )
    }
}

export default View