import Axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { NewsCard } from "./NewsCard";
import { ContextValue, NewsContext } from '../contexts/NewsContext';
import Error from '../pages/Error';

export interface INewsAPI {
    id?: number,
    title?: string;
    author?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
}

const NewsList = (props: any) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    // ? Get news list, category, and news context updater from NewsContext
    const { newsList, currentCategory, getNewsList } = useContext<ContextValue>(NewsContext);

    const fetchNews = async () => {
        setLoading(true)

        try {
            const newsResponse = await Axios.get(`https://newsapi.org/v2/everything?q=${currentCategory}&apiKey=7bf1a32094944e6b804145f264db813b`)
            //Mock json Response
            // const newsResponse = await Axios.get('http://localhost:3001/articles')

            // ? JSON from localhost doesn't have articles attribute, set the context with 
            // newsResponse.data instead of newsResponse.data.articles

            // ? Add id for each fetched news, since it doesn't comes in JSON Response
            let id = 0
            newsResponse.data.articles.forEach((newsData: INewsAPI) => {
                newsData.id = id++
            });

            getNewsList(newsResponse.data.articles);
            setLoading(false)
            setError(false)

            // ? If the API Key is missing or json response is not blocked by cors yet still error
        } catch (error) {
            const { response } = error;
            const { request, ...errorObject } = response; // take everything but 'request'
            console.log(errorObject);

            setError(true)
        }

    }

    // ? Fetch news updated with updated category, and always scroll to top when currentCategory is updated
    useEffect(() => {
        // ? If the JSON is blocked by CORS
        fetchNews().catch(() => setError(true))
        window.scrollTo(0, 0);
    }, [currentCategory])


    return (
        <>
            <Row justify='center'>
                <h1> {currentCategory} News </h1>
            </Row>
            {!loading ?
                <Row justify='center'>
                    <br />
                    {newsList?.map((item) =>
                        <Col key={item.id} style={{ marginBottom: '2em' }}>
                            <NewsCard key={item.id}
                                {...item}
                            />
                        </Col>
                    )}
                </Row>
                :

                !error ?
                    <>
                        <Skeleton active avatar paragraph={{ rows: 3 }} />
                        <Skeleton active avatar paragraph={{ rows: 3 }} />
                        <Skeleton active avatar paragraph={{ rows: 3 }} />
                        <Skeleton active avatar paragraph={{ rows: 3 }} />
                    </>
                    :
                    <Error />
            }
        </>


    );
};

export default NewsList;