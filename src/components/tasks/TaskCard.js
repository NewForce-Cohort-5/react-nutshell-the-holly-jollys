import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TasksContext } from "./TaskDataProvider"
import "./Tasks.css"

export const TaskCard = ({task}) => {
    const { completeTask, getTasks } = useContext(TasksContext)

	const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedInputChange = () => {
        completeTask(task.id)
        .then(getTasks)
    }

    // Use for delete:
    // const handleDelete = () => {
    //     deleteTask(task.id)
    //     // .then(() => {
    //     //     navigate("/tasks")
    //     // })
    //     .then(getTasks)
    // }

    return(
        <section className="task">
            <div className="taskListContainer">
                <div className="taskList">
                    <p className="taskName"><strong>{task.taskName}</strong></p>
                    <p className="taskDateText">Due Date:</p>
                    <p className="taskDate">{task.completionDate}</p>
                </div>
                <div className="checkedTaskContainer">
                    <label htmlFor="checkedTask" className="checkedTaskLabel">Completed: </label> 
                    <br />
                    <input type="checkbox" name="checkedTask" id="checkedTask" className="checkedTaskBox" onChange={handleCheckedInputChange}></input>
                <div className="taskEditDel">
                    <button className="taskEdit" onClick={() => {navigate(`/tasks/edit/${task.id}`)}}>EDIT</button>
                    {/* <button className="taskDel" onClick={handleDelete}>Delete</button> */}
                </div>
                </div>
            </div>
        </section>
    )
}