import React, { useContext } from "react"
import "./Event.css"
import { useParams, useNavigate } from "react-router-dom"
import { EventContext } from "./EventData"

export const EventCard = ({event}) => {
    const {getEventById, deleteEvent} = useContext(EventContext)
    const navigate = useNavigate()
    const {eventId} = useParams()



    const handleDelete = () => {
        deleteEvent(event.id)
        .then(() => {
          navigate("/events")
        })
      }


    return (
    <section className="event">
        <h3 className="event__name">{event.eventName}</h3>
        <div className="event__location">{event.eventLocation}</div>
        <div className="event__date">{event.eventDate}</div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => {
        navigate(`/events/edit/${event.id}`)
        }}>Edit</button>
        <hr></hr>
    </section>
    )
}