import { Route, Routes } from "react-router-dom"
import React, { Component } from "react";
import { TasksProvider } from "./tasks/TaskDataProvider";

export const ApplicationViews = () => {
    return (
        <TasksProvider>
            <Routes>
                <Route path="tasks/*" element={<TasklList />} />
            </Routes>
        </TasksProvider>
    )
}
