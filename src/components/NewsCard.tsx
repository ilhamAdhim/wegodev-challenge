import { Avatar, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { INewsAPI } from './NewsList';

export const NewsCard = (props: INewsAPI) => {
    const { Meta } = Card;
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={props.urlToImage}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>
    );
}
