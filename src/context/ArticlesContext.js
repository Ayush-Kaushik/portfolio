import React, {createContext, useState, useEffect} from 'react';
import axios from "axios";

export const ArticleContext = createContext(null);
export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([]);

    useEffect(async () => {
        const response = await axios.get("https://dev.to/api/articles?username=ayushkaushik");
        console.log(response.data);
        setArticles(response.data);
    }, []);

    return (
        <ArticleContext.Provider value={{
            articles: articles
        }}>
            {children}
        </ArticleContext.Provider>
    )
}


