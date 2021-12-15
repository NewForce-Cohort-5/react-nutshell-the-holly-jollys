import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventData"
import "./Event.css"
import { useNavigate, useParams } from 'react-router-dom';

export const EventForm = () => {
  const { addEvent, getEventById, updateEvent } = useContext(EventContext)

  //for edit, hold on to state of animal in this view
  const [event, setEvent] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const {eventId} = useParams();
  const navigate = useNavigate();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (eventObj) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newEvent = { ...event }
    //animal is an object with properties.
    //set the property to the new value
    newEvent[eventObj.target.name] = eventObj.target.value
    //update state
    setEvent(newEvent)
  }

  const handleSaveEvent = () => {
      setIsLoading(true);
      if (eventId){
        //PUT - update
        updateEvent({
            eventName: event.eventName,
            eventLocation: event.eventLocation,
            eventDate: event.eventDate,
            userId: +localStorage.activeUser,
            id: event.id
        })
        .then(() => navigate("/events"))
      } else {
        //POST - add
        addEvent({
            eventName: event.eventName,
            eventLocation: event.eventLocation,
            eventDate: event.eventDate,
            userId: +localStorage.activeUser,
        })
        .then(() => navigate("/events"))
      }
    
  }

  useEffect(() => {
      if (eventId){
        getEventById(eventId)
        .then(event => {
            setEvent(event)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    
    // eslint-disable-next-line
  }, [])

  //since state controlls this component, we no longer need
  //useRef(null) or ref

    
    //   const eventDate = Date(event.eventDate)
    //   event.eventDate = eventDate
    return (
      <form className="eventForm">
          <h2 className="eventForm__title">{eventId ? <>Update Event</> : <>New Event</>}</h2>
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
        {eventId ? <>Save Changes</> : <>Add Events</>}</button>
      </form>
    )
    }
