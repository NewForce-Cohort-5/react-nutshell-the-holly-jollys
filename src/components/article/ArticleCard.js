import React, { useContext } from "react"
import "./Article.css"
import { useParams, useNavigate } from "react-router-dom"
import { ArticleContext } from "./ArticleProvider"

export const ArticleCard = ({article}) => {
    const {getAnimalById, deleteArticle} = useContext(ArticleContext)
    const navigate = useNavigate()
    const {articleId} = useParams
    
    const handleTimestamp = ""
    
    const handleDelete = () => {
        deleteArticle(article.id)
        .then(() => {
          navigate("/articles")
        })
      }
    
    return (
    <section className="article">
        <h3 className="articleTitle">{article.title}</h3>
        <div className="articleSynopsis">{article.synopsis}</div>
        <div className="articleURL">{article.url}</div>
        <button onClick={() => {
    navigate(`/articles/edit/${article.id}`)}}
    >Edit</button>
    <button onClick={handleDelete}>Delete Article</button>
    
    </section>
)
        }
