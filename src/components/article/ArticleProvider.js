import React, {useState, createContext} from "react"


// The context is imported and used by individual components that need data
//ArticleContext stores date used in application
export const ArticleContext = createContext()

// This component allows other components to use the context data
export const ArticleProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [articles, setArticles] = useState([])

    
    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(res => res.json())
        .then(setArticles)
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getArticles)
    }

    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}`)
            .then(res => res.json())
    }
    
    const updateArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(article)
        })
          .then(getArticles)
      }
      
      const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
            .then(getArticles)
    }

    const [ searchTerms, setSearchTerms ] = useState("")
    /*
        You return a context provider which has the
        `Articles` state, `getArticles` function,
        and the `addArticles` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, getArticleById, updateArticle, deleteArticle, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}