import React from "react"
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleForm } from "./article/ArticleForm";


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

  return  (
        <ArticleProvider>
        <Routes>

          {/* Home render when http://localhost:3000/articles */}
          <Route exact path="articles/*" element={<ArticleList />} />

          {/* Article form */}
          <Route path="articles/create/*" element={<ArticleForm />} />

          {/* editArticls form */}
          <Route path="articles/edit/:articleId/*" element={<ArticleForm />} />
        
        
        </Routes>
        </ArticleProvider>

     
    );
  }
