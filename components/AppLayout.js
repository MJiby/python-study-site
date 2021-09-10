import { Layout, Menu, Input, Row, Col } from 'antd'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/GlobalStyle'
import Link from 'next/link'

const { Header, Content } = Layout;

const AppLayout = ({children}) => {
    
    return (
        // GlobalStyle에도 100% ,, Layout 에도 100%
        <Layout style={{height: '100%'}}>
            <GlobalStyle />
            <Header 
                style={{background: 'white', }}
                >
                <Menu 
                    mode="horizontal"
                    >
                    <Menu.Item key="home">
                        <Link href="/"><a>홈</a></Link>
                    </Menu.Item>
                    <Menu.Item key="quiz">
                        <Link href="/quiz"><a>퀴즈</a></Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{
                width: '100%', 
                background: 'white' 
            }}>
                {children}
            </Content>
        </Layout>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout