import React, { useState, createContext } from "react"

export const TasksContext = createContext()

export const TasksProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    export const updateTask = (taskId) => {

        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: true}) 
        })
        .then(getTasks)} 

    return (
        <TasksContext.Provider value={{
            tasks, getTasks, addTask, updateTask
        }}>
            {props.children}
        </TasksContext.Provider>
    )
}