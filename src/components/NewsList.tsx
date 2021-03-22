import Axios from 'axios';

import { useEffect, useState } from 'react';
import { List, Skeleton, Spin } from 'antd';
import { NewsCard } from "./NewsCard";

interface INewsList {
    articles: INewsAPI[]
}

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

        // Mock JSON
        const { data } = await Axios.get(`http://localhost:3001/articles`)
        console.log(data)
        setNews(data);

        // Mock loader from JSON
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        !loading ?

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                }}
                dataSource={news}
                renderItem={(item: INewsAPI) => (
                    <List.Item>
                        <a href={item.url}>
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
                        </a>
                    </List.Item>
                )}
            />
            :
            /* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
                <Spin size="large" tip="Loading products..." />
            </div> */
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    lg: 4,
                    xl: 4
                }}
                dataSource={news}
                renderItem={() => (
                    <List.Item>
                        <Skeleton active avatar paragraph={{ rows: 4 }} />
                    </List.Item>
                )}
            />

    );
};

export default NewsList;