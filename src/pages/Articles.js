import react, {useContext} from 'react';
import {ArticleContext} from "../context/ArticlesContext";
import ArticleCard from "../components/ArticleCard";

const Articles = (props) => {
    const articleContext = useContext(ArticleContext);

    return (
        <div className={"article-container"}>
            <h1>{"Articles"}</h1>
            {
            articleContext.articles.map(article => <ArticleCard key={article.id} article={article}/>)
        }</div>
    )
};


export default Articles;