import React from "react"
import "./Event.css"
// import { EventContext } from "./EventData"
// import { useParams, useNavigate } from "react-router-dom"

// const { getEventById, deleteEvent } = useContext(EventContext)

// 	const [setEvent] = useState({})
// 	const {eventId} = useParams();
// 	const navigate = useNavigate();

//   useEffect(() => {
//     console.log("useEffect", eventId)
//     getEventById(eventId)
//     .then((response) => {
//       setEvent(response)
//     })
//     // eslint-disable-next-line
//     }, [])

export const EventCard = ({ event }) => {
    return (
    <section className="event">
        <h3 className="event__name">{event.eventName}</h3>
        <div className="event__location">{event.eventLocation}</div>
        <div className="event__date">{event.eventDate}</div>
        {/* <button onClick={deleteEvent}>Delete</button>
        <button onClick={() => {
        navigate(`/events/edit/${event.id}`)
        }}>Edit</button> */}
        <hr></hr>
    </section>
    )
}