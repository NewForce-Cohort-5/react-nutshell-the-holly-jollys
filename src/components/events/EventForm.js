import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventData"
import "./Event.css"
import { useNavigate } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [event, setEvent] = useState({
      eventName: "",
      eventLocation: "",
      eventDate: "",
      userId: +localStorage.activeUser
    });

    const navigate = useNavigate();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      // eslint-disable-next-line
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (eventObj) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEvent = { ...event }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEvent[eventObj.target.id] = parseInt(eventObj.target.value) ? parseInt(eventObj.target.value) : eventObj.target.value
      // update state
      setEvent(newEvent)
    }

    const handleClickSaveEvent = (eventObj) => {
      eventObj.preventDefault() //Prevents the browser from submitting the form

        addEvent(event)
        .then(() => navigate("/events"))
      }
    
    //   const eventDate = Date(event.eventDate)
    //   event.eventDate = eventDate
    return (
      <form className="eventForm">
          <h2 className="eventForm__title">New Event</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="eventName">Event name:</label>
                  <input type="text" id="eventName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" name="eventName" value={event.eventName}/>
              </div>
              <div className="form-group">
                  <label htmlFor="eventLocation">Event location:</label>
                  <input type="text" id="eventLocation" onChange={handleControlledInputChange} required className="form-control" placeholder="Event location" name="eventLocation" value={event.eventLocation}/>
              </div>
              <div className="form-group">
                  <label htmlFor="eventDate">Event date:</label>
                  <input type="date" id="eventDate" onChange={handleControlledInputChange} required className="form-control" name="eventDate"/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveEvent}>
            Save Event
          </button>
      </form>
    )
    }
