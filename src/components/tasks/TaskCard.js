import React, { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TasksContext } from "./TaskDataProvider"
import "./Tasks.css"

export const TaskCard = () => {
    const { completeTask, getTasks, getTaskById, deleteTask } = useContext(TasksContext)
    const [task, setTask] = useState({})

	const {taskId} = useParams();
	const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedInputChange = () => {
        completeTask(task.id)
        .then(getTasks)
    }

    // Use for delete:
    const handleDelete = () => {
        deleteTask(task.id)
        .then(() => {
            // navigate("/tasks")
            getTasks()
        })
    }

    useEffect(() => {
        // console.log("useEffect", taskId)
        getTaskById(taskId)
        .then((response) => {
            setTask(response)
        })
    }, [])


    return(
        <section className="task">
            <div className="taskListContainer">
                <div className="taskList">
                    <p className="taskName"><strong>{task.taskName}</strong></p>
                    <p className="taskDate">Due Date:</p>
                    <p className="taskDate">{task.completionDate}</p>
                </div>
                <div className="checkedTaskContainer">
                    <label htmlFor="checkedTask" className="checkedTaskLabel">Completed: </label> 
                    <br />
                    <input type="checkbox" name="checkedTask" id="checkedTask" className="checkedTaskBox" onChange={handleCheckedInputChange}></input>
                </div>
                <div className="taskEditDel">
                    <button className="taskEdit" onClick={() => {navigate(`/tasks/edit/${task.id}`)}}>Edit</button>
                    <button className="taskDel" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </section>
    )
}