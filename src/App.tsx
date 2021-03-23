import './App.css';
import './components/NewsList';
import 'antd/dist/antd.css';
import NewsList from './components/NewsList';
import { Layout } from 'antd';

import { Content } from 'antd/lib/layout/layout';
import Sidebar from './components/Sidebar';
import { ContextValue, NewsContext, NewsProvider } from './contexts/NewsContext';
import { useContext, useEffect } from 'react';

function App() {

    const { currentCategory, getCurrentCategory } = useContext<ContextValue>(NewsContext);

    return (
        <NewsProvider>
            <Layout style={{ padding: '0' }}>
                <Sidebar />
                <Content
                    style={{
                        alignItems: 'center',
                        padding: 24,
                        margin: 0,
                    }}>
                    <NewsList />
                </Content>
            </Layout>
        </NewsProvider>
    );
}

export default App;
