import React from "react"
import { Route, Routes } from "react-router-dom"
import { TasksProvider } from "./tasks/TaskDataProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"

export const ApplicationViews = () => {
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
