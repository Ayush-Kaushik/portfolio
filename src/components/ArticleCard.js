import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDev} from "@fortawesome/free-brands-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({article}) => {
    return (
        <div className={"card-container"}>
            <h2>{article.title}</h2>
            <div className={"card-content"}>
                <img src={article.social_image}/>

                <span>
                    <p> <FontAwesomeIcon
                        className={"project-icon"}
                        icon={faHeart}/>{"  " + article.positive_reactions_count}</p>
                    <p>{article.description}
                        </p>
                    <p><a href={article.url}><FontAwesomeIcon className={"project-icon"}
                                                              icon={faDev}
                                                              size={"2x"}/> {"Read More"}</a></p>
                </span>
            </div>
        </div>
    )
};

export default ArticleCard;