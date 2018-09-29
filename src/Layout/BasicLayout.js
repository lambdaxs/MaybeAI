import {Component} from 'react'
import {Layout,Menu,Icon} from 'antd'
import style from './BasicLayout.less'
const {SubMenu} = Menu;
import Link from 'umi/link';
import config from '../../config/config'

const {Header,Footer,Sider,Content} = Layout;

class BasicLayout extends Component {
    render(){

        const routes = config.routes;

        return (
          <Layout className={style.container}>
              <Sider className={style.sider}>
                  <div className={style.logo}/>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1">
                          <Link to={'/helloworld'}>
                              <span className="nav-text">大盘</span>
                          </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                          <Link to={'/api/list'}>接口列表</Link>
                      </Menu.Item>
                      <Menu.Item key="3">
                          <Link to={'/api/list'}>数据源</Link>
                      </Menu.Item>
                      <Menu.Item key="4">
                          <Link to={'/api/list'}>定时任务</Link>
                      </Menu.Item>
                      <Menu.Item key="5">
                          <Link to={'/api/list'}>接口文档</Link>
                      </Menu.Item>
                      <Menu.Item key="6">
                          <Link to={'/api/list'}>测试</Link>
                      </Menu.Item>
                      <Menu.Item key="7">
                          <Link to={'/api/list'}>监控</Link>
                      </Menu.Item>
                      <Menu.Item key="8">
                          <Link to={'/api/list'}>日志</Link>
                      </Menu.Item>
                      <Menu.Item key="9">
                          <Link to={'/api/list'}>版本管理</Link>
                      </Menu.Item>
                      <Menu.Item key="10">
                          <Link to={'/api/list'}>部署</Link>
                      </Menu.Item>
                      <Menu.Item key="11">
                          <Link to={'/api/list'}>项目配置</Link>
                      </Menu.Item>

                  </Menu>
              </Sider>
              <Layout>
                  <Header className={style.header}>Header</Header>
                  <Content className={style.content}>{this.props.children}</Content>
                  <Footer className={style.footer}>Footer</Footer>
              </Layout>
          </Layout>
        )
    }
}

export default BasicLayout;