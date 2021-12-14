import React from "react"
import "./Event.css"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__name">{event.eventName}</h3>
        <div className="event__location">{event.eventLocation}</div>
        <div className="event__date">{event.eventDate}</div><hr></hr>
    </section>
)