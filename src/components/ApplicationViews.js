import React from "react"
import { Route, Routes } from "react-router-dom"
import { TasksProvider } from "./tasks/TaskDataProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"

export const ApplicationViews = () => {
    return (
        <TasksProvider>
            <Routes>
                <Route path="tasks/*" element={<TaskList />} />
                <Route path="tasks/create/*" element={<TaskForm />} />
            </Routes>
        </TasksProvider>
    )}
