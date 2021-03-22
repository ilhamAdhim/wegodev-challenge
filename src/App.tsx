import React, { CSSProperties, useState } from 'react';
import './App.css';
import './components/NewsList';
import 'antd/dist/antd.css';
import NewsList from './components/NewsList';
import { Affix, Button, Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { Content } from 'antd/lib/layout/layout';

function App() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const buttonStyle: CSSProperties = {
        bottom: '5%',
        right: '10%',
        position: 'fixed',
        zIndex: 1,
    }

    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    return (
        <>

            <Affix target={() => container}>
                <Button type="primary" shape="circle" size="large" style={buttonStyle} onClick={showDrawer}>
                    <MenuOutlined key="Read" />
                </Button>
            </Affix>
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className="" ref={setContainer}>
                <Layout style={{ padding: '0' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            alignItems: 'center',
                            padding: 24,
                            margin: 0,
                        }}
                    >
                        <NewsList />

                    </Content>

                </Layout>

            </div>

        </>
    );
}

export default App;
