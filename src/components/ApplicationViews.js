import React from "react"
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./article/ArticleList";
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleForm } from "./article/ArticleForm";
import { TasksProvider } from "./tasks/TaskDataProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { EventProvider } from "./events/EventData";
import { EventList } from "./events/EventList";
import { EventForm } from "./events/EventForm";


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

  return  (
    <TasksProvider>
    <ArticleProvider>
    <EventProvider>
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

      <Route path="events/*" element={<EventList />} />
      <Route path="events/create/*" element={<EventForm />} />
      <Route path="events/edit/:eventId/*" element={<EventForm />} />

        
        
    </Routes>
    </EventProvider>
    </ArticleProvider>
    </TasksProvider>


     
    );
  }
