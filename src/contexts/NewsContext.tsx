import React, { createContext, useEffect, useState } from 'react';
import { INewsAPI } from '../components/NewsList';

// ? Type declaration
interface IProps {
    children: React.ReactNode,
}

export interface ContextValue {
    currentCategory: string
    newsList: INewsAPI[]
    getNewsList: (newsFetch: INewsAPI[]) => void
    getCurrentCategory: (c: string) => void
}

// ? The context itself, this will be used to get and manipulate global state through Context
export const NewsContext = createContext<ContextValue>({
    currentCategory: "",
    getCurrentCategory: () => { },
    newsList: [],
    getNewsList: () => { }
});

// ? This will be rendered instead of usual ContextProvider. 
export const NewsProvider = (props: IProps) => {

    const [newsList, setNewsList] = useState<INewsAPI[]>([])

    const getNewsList = (news: INewsAPI[]) => setNewsList(news);

    // ? Default category is set to technology
    const [currentCategory, setCurrentCategory] = useState<string>('Technology')
    const getCurrentCategory = (c: string) => setCurrentCategory(c);

    const contextValue: ContextValue = { currentCategory, getCurrentCategory, newsList, getNewsList }

    return (
        <NewsContext.Provider value={contextValue}>
            {props.children}
        </NewsContext.Provider>
    );
};
