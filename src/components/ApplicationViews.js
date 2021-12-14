import React from "react"
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleForm } from "./article/ArticleForm";
=======
import { Route, Routes } from "react-router-dom"
import { TasksProvider } from "./tasks/TaskDataProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
>>>>>>> main


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {
<<<<<<< HEAD

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
=======
    return (
<<<<<<< HEAD
                        <Routes>
                          <Route path="/"/>
                        </Routes>
=======
        <TasksProvider>
            <Routes>
                <Route path="tasks/*" element={<TaskList />} />
                <Route path="tasks/create/*" element={<TaskForm />} />
            </Routes>
        </TasksProvider>
>>>>>>> c29fe6bbd3dfead2733af182d2d740a620f38d91
    )}
>>>>>>> main
