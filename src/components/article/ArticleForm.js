import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider";
import "./Article.css"
import { useNavigate, useParams } from 'react-router-dom';

export const ArticleForm = () => {
    const { addArticle, getArticleById, updateArticle } = useContext(ArticleContext)
    
    const currentTimestamp = Date.now()
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)

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
      newArticle[event.target.name] = event.target.value
      //update state
      setArticle(newArticle)
    }

    

    const handleSaveArticle = () => {
      if (parseInt(article.articleId) === "" ){
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
              date: currentTimestamp,
              userId: +localStorage.activeUser
              
          })
          .then(() => navigate(`/articles/detail/${article.id}`))
        }else {
          //POST - add
          addArticle({
              title: article.title,
              url: article.url,
              synopsis: article.synopsis,
              date: currentTimestamp,
              userId: +localStorage.activeUser
              
          })
          .then(() => navigate("/articles"))
        }
      }
    }

    // Get customers and locations. If articleId is in the URL, getArticleById and set state. Gives inputs information.
    //If fills information for edit form. Else populates new form.
    useEffect(() => {
        
          if (articleId){
            getArticleById(articleId)
            .then(article => {
                setArticle(article)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        
      }, [])

   

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="articleForm">
        <h2 className="articleForm__title">{articleId ? <>Update Article</> : <>Add Article</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="articleName">Article title: </label>
            <input type="text" id="articleName" name="title" required autoFocus className="form-control"
            placeholder="Article title"
            onChange={handleControlledInputChange}
            defaultValue={article.title}/>
          </div>
        </fieldset>
        
        <fieldset>
          <div className="form-group">
            <label htmlFor="articleURL">URL: </label>
            <input type="text" id="articleURL" name="url" required className="form-control"
            placeholder="URL"
            onChange={handleControlledInputChange}
            defaultValue={article.url}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="articleSynopsis">Synopsis: </label>
            <input type="text" id="articleSynopsis" name="synopsis" required className="form-control"
            placeholder="Synopsis"
            onChange={handleControlledInputChange}
            defaultValue={article.synopsis}/>
          </div>
        </fieldset>

        <fieldset>
        <div>
            <div value="{new Date (article.dateSaved).toLocaleDateString('en-US')}"/>
        </div>    
        </fieldset>    
        
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveArticle()
          }}>
        {articleId ? <>Update Article</> : <>Add Article</>}</button>
      </form>
    )
}
