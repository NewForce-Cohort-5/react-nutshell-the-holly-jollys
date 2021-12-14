import React, { useState, createContext } from "react"

export const TasksContext = createContext()

export const TasksProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch(`http://localhost:8088/tasks`)
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = taskObj => {
        return fetch(`http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
        .then(res => res.json())
    }

    const completeTask = (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({complete: true}) 
        })
        .then(getTasks)} 

    // const [ completed ] = useState()

    return (
        <TasksContext.Provider value={{
            tasks, getTasks, addTask, getTaskById, completeTask
        }}>
            {props.children}
        </TasksContext.Provider>
    )
}