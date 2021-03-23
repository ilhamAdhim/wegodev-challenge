import Axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { Col, List, Row, Skeleton } from 'antd';
import { NewsCard } from "./NewsCard";
import { ContextValue, NewsContext } from '../contexts/NewsContext';

export interface INewsAPI {
    id?: string;
    title?: string;
    author?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
}

const NewsList = (props: any) => {
    // TODO, add category and news context
    const [news, setNews] = useState<INewsAPI[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const { newsList, currentCategory } = useContext<ContextValue>(NewsContext);


    const fetchNews = async () => {
        // const { data } = await Axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=edbb84a97bec4665907e48275e71360f`)

        // Mock JSON local server
        const { data } = await Axios.get(`http://localhost:3001/articles`)
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
                <h1> {currentCategory} News </h1>

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