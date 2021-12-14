import React, { useContext } from "react"
import { TasksContext } from "./TaskDataProvider"
import { TaskList } from "./TaskList"
import "./Tasks.css"

export const TaskCard = ({ task }) => {
    const { completeTask, getTasks } = useContext(TasksContext)
    const handleCheckedInputChange = () => {
        completeTask(task.id)
        .then(getTasks)
    }

    // document.querySelector("#container").addEventListener("change", (event) => {
    //     console.log(event.target.id)
    //     if(event.target.id.startsWith("completed--")){
    //         const taskId = +event.target.id.split("--")[1]
    //         updateTask(taskId)
    //         .then(TaskList) 
            
            
    //     }
    // })
    

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
            </div>
        </section>
    )
}