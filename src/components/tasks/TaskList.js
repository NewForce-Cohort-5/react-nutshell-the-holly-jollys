import React, { useContext, useEffect } from "react"
import { TasksContext } from "./TaskDataProvider"
import { TaskCard } from "./TaskCard"
import "./Tasks.css"

export const TaskList = () => {
  const { tasks, getTasks, updateTask } = useContext(TasksContext)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log("TaskList: useEffect - getTasks")
    getTasks()
  }, [])


  return (
    <>
        <h2>Tasks</h2>
        <button onClick={() => navigate("/tasks/create")}>
            Add Task
        </button>
        <div className="tasks">
            {/* {console.log("TaskList: Render", tasks)} */}
            {
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            }
        </div>
    </>
  )
}