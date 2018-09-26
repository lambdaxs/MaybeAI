import {Component} from 'react'
import {Layout,Menu,Icon} from 'antd'
import style from './BasicLayout.less'
const {SubMenu} = Menu;
import Link from 'umi/link';

const {Header,Footer,Sider,Content} = Layout;

class BasicLayout extends Component {
    render(){
        return (
          <Layout className={style.container}>
              <Sider className={style.sider}>
                  <div className={style.logo}/>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1">
                          <Link to={'/helloworld'}>
                              <Icon type="edit" />
                              <span className="nav-text">HelloWorld</span>
                          </Link>
                      </Menu.Item>
                      <SubMenu
                        key="sub1"
                        title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                      >
                          <Menu.Item key="2"><Link to={'/demo/view1'}>view1</Link></Menu.Item>
                          <Menu.Item key="3"><Link to={'/demo/view2'}>view2</Link></Menu.Item>
                          <Menu.Item key="4"><Link to={'/demo/view3'}>view3</Link></Menu.Item>
                      </SubMenu>
                      <SubMenu
                          key="api"
                          title={<span><Icon type="dashboard" /><span>Api</span></span>}
                      >
                          <Menu.Item key="2"><Link to={'/api/cal'}>cal</Link></Menu.Item>
                          <Menu.Item key="3"><Link to={'/api/params'}>params</Link></Menu.Item>
                          <Menu.Item key="3"><Link to={'/api/params/v2'}>paramsV2</Link></Menu.Item>
                      </SubMenu>
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