import React from "react"
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleForm } from "./article/ArticleForm";
import { TasksProvider } from "./tasks/TaskDataProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

  return  (
    <TasksProvider>
    <ArticleProvider>
    <Routes>

      {/* Home render when http://localhost:3000/articles */}
      <Route exact path="articles/*" element={<ArticleList />} />

      {/* Article form */}
      <Route path="articles/create/*" element={<ArticleForm />} />

      {/* editArticls form */}
      <Route path="articles/edit/:articleId/*" element={<ArticleForm />} />

      <Route path="tasks/*" element={<TaskList />} />
      <Route path="tasks/create/*" element={<TaskForm />} />
      <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
        
        
    </Routes>
    </ArticleProvider>
    </TasksProvider>


     
    );
  }
