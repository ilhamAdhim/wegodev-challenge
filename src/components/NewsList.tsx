import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';
import { Link } from "react-router-dom"
import { NewsCard } from "./NewsCard";

interface INewsList {
    products: INewsAPI[]
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
        const { data } = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=edbb84a97bec4665907e48275e71360f')
        return data;
    }

    useEffect(() => {
        fetchNews().then(data => {
            setNews(data)
            setLoading(false)
        });
    }, [])

    return (
        !loading ?
            <div id="listProduct">
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        column: 4
                    }}
                    dataSource={news}
                    renderItem={(item: INewsAPI) => (
                        <List.Item>
                            <Link to={item.url}>
                                <NewsCard urlToImage={item.urlToImage}
                                    id={item.id}
                                    url={item.url}
                                    key={item.id}
                                    author={item.author}
                                    title={item.title}
                                    content={item.content}
                                    publishedAt={item.publishedAt}
                                    description={item.description}
                                />
                            </Link>
                        </List.Item>
                    )}
                />
            </div>
            :
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "65vh" }}>
                <Spin size="large" tip="Loading products..." />
            </div>
    );
};

export default NewsList;