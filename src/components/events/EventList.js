import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventData"
import { EventCard } from "./EventCard"
import "./Event.css"
import { useNavigate } from "react-router-dom"

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEvents()
// eslint-disable-next-line
  }, [])


  return (
    <>
    <h1>Events</h1>
    <button onClick={() => navigate("/events/create")}>
          Add Event
      </button>
    <div className="events">
      {
        events.map(event => {
          return <EventCard key={event.id} event={event} />
        })
      }
    </div>
    </>
  )
}
