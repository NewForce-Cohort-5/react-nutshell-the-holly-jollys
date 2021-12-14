import React from "react"
import "./Task.css"

export const TaskCard = ({ task }) => (
    <section className="task">
        <h3 className="task__name">
            {task.name}
        </h3>
        <p className="task__date">Completion Date: {task.completionDate}</p>
    </section>
)

// "tasks": [
//     {
//       "id": 1,
//       "taskName": "",
//       "completionDate": "",
//       "complete": false
//     }