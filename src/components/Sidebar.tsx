import { CSSProperties, useContext, useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CodeTwoTone, SmileTwoTone, UsbTwoTone, LaptopOutlined, HeartTwoTone, BulbTwoTone } from '@ant-design/icons';
import Category from './Category';


const Sidebar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true)

    const onClose = () => setVisible(false)

    const buttonStyle: CSSProperties = {
        bottom: '5%',
        right: '10%',
        position: 'fixed',
        zIndex: 1,
    }



    return (
        <>
            <Button type="primary" shape="circle" size="large" style={buttonStyle} onClick={showDrawer}>
                <MenuOutlined key="Read" />
            </Button>
            <Drawer
                title="Select News Category"
                placement="left"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <Category name="Business" icon={<LaptopOutlined />} />
                <Category name="Entertainment" icon={<SmileTwoTone twoToneColor="#e6b209" />} />
                <Category name="Health" icon={<HeartTwoTone twoToneColor="#eb2f96" />} />
                <Category name="Sciences" icon={<BulbTwoTone twoToneColor="#e6b710" />} />
                <Category name="Ports" icon={<UsbTwoTone />} />
                <Category name="Technology" icon={<CodeTwoTone twoToneColor="#157d1a" />} />
            </Drawer>
        </>
    );
};

export default Sidebar;