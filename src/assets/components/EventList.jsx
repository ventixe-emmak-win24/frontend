import React, { useEffect, useState } from 'react'
import EventItem from './EventItem';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const getEvents = async () => {
        const res = await fetch("https://ek-win24-eventservice-hpbzephwfyavhrgr.swedencentral-01.azurewebsites.net/api/events")
        if (res.ok){
            const response = await res.json();
            setEvents(response.result);
            setLoading(false);
        }
    }

    useEffect(() => {
        getEvents();
    }, []);


  return (
    <>
    {loading ? (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading events...</p>
      </div>
    ) : (
      <section id="events">
       {events.map(event => (<EventItem key={event.id} item={event} />))}
    </section>
    ) }

    </>
  )
}

export default EventList