import React, { useContext } from "react"
import "./Event.css"
import { useNavigate } from "react-router-dom"
import { EventContext } from "./EventData"

export const EventCard = ({event}) => {
    const {deleteEvent} = useContext(EventContext)
    const navigate = useNavigate()



    const handleDelete = () => {
        deleteEvent(event.id)
        .then(() => {
          navigate("/events")
        })
      }

    // let canDelete = (+localStorage.activeUser === event.userId) ? <><button onClick={handleDelete}>Delete</button></> : "";
    // let canEdit = (+localStorage.activeUser === event.userId) ? <><button onClick={() => {
    //     navigate(`/events/edit/${event.id}`)
    //     }}>Edit</button></> : "";
  
    if (+localStorage.activeUser === event.userId){
    return (
        <section className="event">
            <h3 className="event__name">{event.eventName}</h3>
            <div className="event__location">{event.eventLocation}</div>
            <div className="event__date">{event.eventDate}</div>
            <button onClick={handleDelete}>Delete</button>
            {/* {canDelete} */}
            <button onClick={() => {
            navigate(`/events/edit/${event.id}`)
            }}>Edit</button>
            {/* {canEdit} */}
            <hr></hr>
        </section>
        )
        } else {
            return ""
        }
}

// {/* <button onClick={handleDelete}>Delete</button> */}