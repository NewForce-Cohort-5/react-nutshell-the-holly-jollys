import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"
import { useNavigate } from "react-router"

export const ArticleList = () => {
    const { articles, getArticles, searchTerms, useArticles } = useContext(ArticleContext)
  
    // Since you are no longer ALWAYS displaying all of the articles
    const [ filteredArticles, setFiltered ] = useState([])
    const navigate = useNavigate()
    
    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getArticles()
    }, [])
  
    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    //We added search by breed by adding the paramiter to the subset
    useEffect(() => {
      if (searchTerms !== "") {
        // If the search field is not blank, display matching articles
        const subset = articles.filter(article => article.title.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(subset)
      } else {
        // If the search field is blank, display all articles
        setFiltered(articles)
      }
    }, [searchTerms, articles])
  
    
    
    //sorted 
    return (
      <>
        <h1>Articles</h1>
  
        <button onClick={() => navigate("/articles/create")}>
            Add Article
        </button>
        <div className="articles">
        {
          filteredArticles.sort((a,b) => { return new Date(b.date) - new Date(a.date)}).map(article => {
            return <ArticleCard key={article.id} article={article} />
          })
        }
        </div>
      </>
    )
  }