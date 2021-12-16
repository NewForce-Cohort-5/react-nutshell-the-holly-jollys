import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { TasksContext } from "./TaskDataProvider"
import { TaskCard } from "./TaskCard"
import { TaskCompleteCard } from "./TaskCompleteCard"
import "./Tasks.css"

export const TaskList = () => {
  const { tasks, getTasks } = useContext(TasksContext)

  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])

  // const formattedDate = new Date(task.completionDate);
  // const taskDate = new Intl.DateTimeFormat('en-US', {timeZone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' }).format(formattedDate)

  return (
    <>
      <div className="tasksContainer">
        <h2>Tasks</h2>
        <button onClick={() => navigate("/tasks/create")}>
            Add Task
        </button>
        <div className="tasks">
            {/* {console.log("TaskList: Render", tasks)} */}
            {
              //filter tasks for those not yet complete, then sort through those and put them in date order, then map to return TaskCard
              tasks.filter(task => task.complete === false).sort((a,b) => {return new Date(a.completionDate) - new Date (b.completionDate)}).map(task => 
                <TaskCard key={task.id} task={task} />)
            }
        </div>

        <hr></hr>

        <h4>Completed Tasks:</h4>
        <div className="tasksCompletedList">
          <table className="tasksCompleted">
            <tbody>
              <tr>
                <td className="taskNameColumn"><em>Task:</em></td>
                <td className="taskDateColumn"><em>Due Date:</em></td>
                <td className="taskCompletedColumn"><em>Completed:</em></td>
              </tr>
                {
                  //returns the task Complete Card after filters/sorts by date
                  tasks.filter(task => task.complete === true).sort((a,b) => {return new Date(a.completionDate) - new Date (b.completionDate)}).map(task => 
                  <TaskCompleteCard key={task.id} task={task} />)
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

// ${guestWeWantToEdit.rightHanded ? "checked" : "" }

// <fieldset>
// <div className="form-group">
//   <label htmlFor="taskManager">Manager</label>
//   <input type="checkbox" checked={task.manager} id="taskManager" name="manager" required className="form-control"
//   placeholder="task manager"
//   onChange={handleControlledInputChangeBool} value={task.manager}
//   />
// </div>
// </fieldset>
// white_check_mark
// +1
// slightly_smiling_face

// 11:50 AM
// const handleControlledInputChangeBool = (event) => {
// //When changing a state object or array,
// //always create a copy make changes, and then set state.
// const newTask = { ...task }
// //task is an object with properties.
// //set the property to the new value
// newTask[event.target.name] = event.target.checked
// //update state
// setTask(newTask)
// }