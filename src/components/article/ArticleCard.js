import React, { useContext } from "react"
import "./Article.css"
import { useParams, useNavigate } from "react-router-dom"
import { ArticleContext } from "./ArticleProvider"
import { Link } from "react-router-dom"

export const ArticleCard = ({article}) => {
    const {getArticleById, deleteArticle} = useContext(ArticleContext)
    const navigate = useNavigate()
    const {articleId} = useParams
    
    
    
    const handleDelete = () => {
        deleteArticle(article.id)
        .then(() => {
          navigate("/articles")
        })
      }
    
      let currentTimestamp = article.date
      let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
      
    return (
    <section className="article">
        <h3 className="articleTitle">Title: {article.title}</h3>
        
        <h4 className="articleSynopsis">Synopsis</h4>
        <p>{article.synopsis}</p>
        <a href={article.url} target="_blank" className="articleURL">Read Article</a><br></br>
        <p>Last updated: {date}</p>
        
        <button onClick={() => {
    navigate(`/articles/edit/${article.id}`)}}
    >Edit</button>
    <button onClick={handleDelete}>Delete Article</button>
    
    </section>
)
}

