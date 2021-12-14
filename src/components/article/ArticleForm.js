import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider";
import "./Article.css"
import { useNavigate, useParams } from 'react-router-dom';

export const ArticleForm = () => {
    const { addArticle, getArticleById, updateArticle } = useContext(ArticleContext)
    

    //for edit, hold on to state of article in this view
    const [article, setArticle] = useState({})

    //wait for data before button is active
    //Button greys out until state is changed.
    const [isLoading, setIsLoading] = useState(true);

    //Helps navigate after article edit
    const {articleId} = useParams();
	  const navigate = useNavigate();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newArticle = { ...article }
      //article is an object with properties.
      //set the property to the new value
      //if we want to target id [event.target.id]
      newArticle[event.target.title] = event.target.value
      //update state
      setArticle(newArticle)
    }

    const handleSaveArticle = () => {
      if (parseInt(article.articleId) === 0 || parseInt(article.customerId) === 0) {
          window.alert("Please select a article and customer")
      } else {
        //setIsLoading disables the button - no extra clicks
        setIsLoading(true);
        //If there is an id in address bar run updateArticle(). If not run addArticle()
        if (articleId){
          //PUT - update. Gets article id from address
          updateArticle({
              id: article.id,
              title: article.title,
              url: article.url,
              synopsis: article.synopsis,
              date: ""
              
          })
          .then(() => navigate(`/articles/detail/${article.id}`))
        }else {
          //POST - add
          addArticle({
              title: article.title,
              url: article.url,
              synopsis: article.synopsis,
              date: ""
              
          })
          .then(() => navigate("/articles"))
        }
      }
    }

   

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="articleForm">
        <h2 className="articleForm__title">New Article</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="articleName">Article name: </label>
            <input type="text" id="articleName" name="name" required autoFocus className="form-control"
            placeholder="article name"
            onChange={handleControlledInputChange}
            defaultValue={article.name}/>
          </div>
        </fieldset>
        
        
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveArticle()
          }}>
        {articleId ? <>Save Article</> : <>Add Article</>}</button>
      </form>
    )
}
