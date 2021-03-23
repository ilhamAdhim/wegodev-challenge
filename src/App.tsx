import './App.css';
import './components/NewsList';
import 'antd/dist/antd.css';
import NewsList from './components/NewsList';
import { Layout } from 'antd';

import { Content } from 'antd/lib/layout/layout';
import Sidebar from './components/Sidebar';

function App() {

    return (
        <>
            <Layout style={{ padding: '0' }}>
                <Sidebar />
                <Content
                    style={{
                        alignItems: 'center',
                        padding: 24,
                        margin: 0,
                    }}>
                    <h1> Technology News </h1>

                    <NewsList />
                </Content>
            </Layout>
        </>
    );
}

export default App;
