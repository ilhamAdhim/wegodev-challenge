import { Affix, Button, Drawer } from 'antd';
import React, { useState, CSSProperties } from 'react';

const Sidebar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const buttonStyle: CSSProperties = {
        position: 'absolute',
        bottom: '5%',
        right: '20%'
    }

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Affix bottom
            </Button>
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
        </>
    );
};


export default Sidebar;