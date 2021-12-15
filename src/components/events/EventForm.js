import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventData"
import "./Event.css"
import { useNavigate } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [event, setEvent] = useState({})
    // eventName: "",
    //   eventLocation: "",
    //   eventDate: "",
    //   userId: +localStorage.activeUser
    const [isLoading, setIsLoading] = useState(true);

    const {eventId} = useParams();
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
      newEvent[eventObj.target.id] = parseInt(eventObj.target.value) ? parseInt(eventObj.target.value) : eventObj.target.value
      // update state
      setEvent(newEvent)
    }

    const handleSaveEvent = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (eventId){
          //PUT - update
          updateEvent({
              id: event.id,
              eventName: event.eventName,
              eventDate: event.eventDate,
              eventLocation: event.eventLocation,
              customerId: parseInt(animal.customerId),
              
          })
          .then(() => navigate(`/animals/detail/${animal.id}`))
        }else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              locationId: parseInt(animal.locationId),
              customerId: parseInt(animal.customerId)
          })
          .then(() => navigate("/animals"))
        }
      }
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
            disabled={isLoading}
            onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEvent()
          }}>
        {eventId ? <>Save Event</> : <>Add Event</>}</button>
      </form>
    )
    }
