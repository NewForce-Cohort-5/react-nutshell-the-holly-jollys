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

    //boolean is assigned a variable that can then be told its true or false elsewhere (true in TaskCard for incomplete task list, false in TaskList for the completed tasks list)
    const completeTask = (taskId, isComplete) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({complete: isComplete}) 
        })
        .then(getTasks)
    } 

    // boolean is set to true in this version:
    // const completeTask = (taskId) => {
    //     return fetch(`http://localhost:8088/tasks/${taskId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({complete: true}) 
    //     })
    //     .then(getTasks)
    // }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(getTasks)
    }

    const updateTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTasks)
    }

    // const [ completed ] = useState()

    return (
        <TasksContext.Provider value={{
            tasks, getTasks, addTask, getTaskById, completeTask, deleteTask, updateTask
        }}>
            {props.children}
        </TasksContext.Provider>
    )
}