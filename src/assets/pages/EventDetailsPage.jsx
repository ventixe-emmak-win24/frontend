import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()

    const [event, setEvent] = useState({});

    const getEvent = async () => {
        const res = await fetch(`https://ek-win24-eventservice-hpbzephwfyavhrgr.swedencentral-01.azurewebsites.net/api/events/${id}`)
        
        if (res.ok){
            const response = await res.json();
            setEvent(response.result);
        }
    }

    useEffect(() => {
        getEvent();
    }, []);


  return (
    <div className="event-details">
        <h2>{event.title}</h2>
       
        <div> 
            <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
        </div>   

        <p>{event.description}</p>

        <Link to={`/events/booking/${event.id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetailsPage