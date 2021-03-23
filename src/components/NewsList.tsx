import Axios from 'axios';

import { useEffect, useState } from 'react';
import { Col, List, Row, Skeleton } from 'antd';
import { NewsCard } from "./NewsCard";

export interface INewsAPI {
    id: string | undefined;
    title: string | undefined;
    author: string | undefined;
    description: string | undefined;
    url: string;
    urlToImage: string | undefined;
    publishedAt: string | undefined;
    content: string | undefined;
}

const NewsList = () => {

    const [news, setNews] = useState<INewsAPI[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchNews = async () => {
        // const { data } = await Axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=edbb84a97bec4665907e48275e71360f`)

        // Mock JSON local server
        const { data } = await Axios.get(`http://localhost:3001/articles`)
        console.log(data)
        setNews(data);

        // Mock fetching data from JSON local server
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        !loading ?
            <Row justify='center'>
                {news?.map((item) =>
                    <Col key={item.id} style={{ marginBottom: '2em' }}>
                        <NewsCard
                            id={item.id}
                            key={item.id}
                            url={item.url}
                            title={item.title}
                            author={item.author}
                            content={item.content}
                            urlToImage={item.urlToImage}
                            publishedAt={item.publishedAt}
                            description={item.description}
                        />
                    </Col>
                )}
            </Row>
            :
            <>
                <Skeleton active avatar paragraph={{ rows: 3 }} />
                <Skeleton active avatar paragraph={{ rows: 3 }} />
                <Skeleton active avatar paragraph={{ rows: 3 }} />
                <Skeleton active avatar paragraph={{ rows: 3 }} />
            </>


    );
};

export default NewsList;