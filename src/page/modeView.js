import React,{Component} from 'react'
import {Card,Button} from 'antd'
import {connect} from 'dva'
import Link from 'umi/link'

@connect((state) => {
    const {List} = state['demo'];
    return {
        List
    };
})
export default class ModelCardView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
              <div>
              {
                  this.props.List.map(v=>{
                      return (
                        <Card key={v.id}>
                            <div>Q:{v.setup}</div>
                            <div>
                                <strong>A:{v.txt}</strong>
                            </div>
                        </Card>
                      )
                  })
              }
              </div>
              <div>
                  <Button onClick={()=>{
                      this.props.dispatch({
                          type:'demo/addModel',
                          payload:{
                              id:3,
                              setup:'xxxx',
                              txt:'......'
                          }
                      })
                  }}>Add</Button>
                  <Button onClick={()=>{
                      this.props.dispatch({
                          type:'demo/getList',
                          payload:{
                              id:3,
                              setup:'xxxx',
                              txt:'......'
                          }
                      })
                  }}>Test</Button>
                  <Button><Link to={{pathname:'/helloworld/20',state:{name:'xiaos'}}}>Go</Link></Button>
              </div>
          </div>
        )
    }
}