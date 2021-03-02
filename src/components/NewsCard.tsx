import { Card } from 'antd';
import React from 'react';
import { INewsAPI } from './NewsList';

export const NewsCard = (props: INewsAPI) => {
    return (
        <Card hoverable>
            <img alt={props.urlToImage} src={props.urlToImage} width="100%" height={250} />
        </Card>
    );
}
