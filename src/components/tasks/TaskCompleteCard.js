import React, { useContext } from "react"
// import { useNavigate } from "react-router-dom"
import { TasksContext } from "./TaskDataProvider"
import "./Tasks.css"

export const TaskCompleteCard = ({task}) => {
    const { completeTask, getTasks } = useContext(TasksContext)

	// const navigate = useNavigate();

    //Use for checkbox:
    const handleCheckedAsCompleted = (task) => {
        completeTask(task.id, false)
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

    //Use to format date into MM/DD/YYYY
    const formattedDate = new Date(task.completionDate);
    const taskDate = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit' }).format(formattedDate)

    return(
        <tr key={task.id}>
            <td className="taskNameColumn">{task.taskName}</td> 
            <td className="taskDateColumn">{taskDate}</td>
            <td className="taskCompletedColumn checkedTaskBox-completed">
                <input type="checkbox" checked={task.complete} name="checkedTask" id="checkedTask" className="checkedTaskBox-completed" onChange={() => handleCheckedAsCompleted(task)} value={task.complete}></input>
            </td>
        </tr>
    )
}