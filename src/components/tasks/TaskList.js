import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { TasksContext } from "./TaskDataProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

export const TaskList = () => {
  const { tasks, getTasks } = useContext(TasksContext)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])


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
      </div>
    </>
  )
}