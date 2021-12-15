import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { TasksContext } from "../tasks/TaskDataProvider"
import "./Tasks.css"

export const TaskForm = () => {
  const { addTask, getTaskById, updateTask } = useContext(TasksContext)

  //for edit, hold on to state of task in this view
  const [task, setTask] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const {taskId} = useParams();
  const navigate = useNavigate();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newTask = { ...task }
    //task is an object with properties.
    //set the property to the new value
    newTask[event.target.name] = event.target.value
    //update state
    setTask(newTask)
  }

  const handleSaveTask = () => {
    if (parseInt(task.id) === 0) {
        window.alert("placeholder")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (taskId){
        //PUT - update
        updateTask({
            id: task.id,
            taskName: task.taskName,
            completionDate: task.completionDate,
            complete: false
        })
        .then(() => navigate(`/tasks/${task.id}`))
      }else {
        //POST - add
        addTask({
            taskName: task.name,
            completionDate: task.date,
            complete: false
        })
        .then(() => navigate("/tasks"))
      }
    }
  }

  // Get tasks. If taskId is in the URL, getTaskById
  useEffect(() => {
      if (taskId){
          console.log(taskId)
        getTaskById(taskId)
        .then(task => {
            setTask(task)
              console.log(taskId)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
  }, [])

  //since state controls this component, we no longer need
  //useRef(null) or ref

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="taskName">Task name: </label>
          <input type="text" id="taskName" name="name" required autoFocus className="form-control"
          placeholder="Task name"
          onChange={handleControlledInputChange}
          defaultValue={task.taskName}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="taskDate">Completion Date: </label>
          <input type="date" id="taskDate" name="date" required className="form-control"
          onChange={handleControlledInputChange}
          defaultValue={task.completionDate}/>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveTask()
        }}>
        {taskId ? <>Save Task</> : <>Add Task</>}
      </button>
    </form>
  )
}