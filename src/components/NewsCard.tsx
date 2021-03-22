import { Card } from 'antd';
import { ReadFilled } from '@ant-design/icons';
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
                'Read Online',
                <ReadFilled key="Read" />,
            ]}
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>
    );
}
