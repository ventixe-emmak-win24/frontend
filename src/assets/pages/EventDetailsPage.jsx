import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Packages from '../components/Packages';
import { useLocation, useParams } from 'react-router-dom';

const EventDetailsPage = () => {
    const {id} = useParams()
    const location = useLocation();

    const eventData = location.state?.event || {};
    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);

    const getEvent = async () => {
        const res = await fetch(`https://ek-win24-eventservice-hpbzephwfyavhrgr.swedencentral-01.azurewebsites.net/api/events/${id}`)
    
        if (res.ok){
            const response = await res.json();
            setEvent(response.result);
            setLoading(false);
        }
    }

    useEffect(() => {
       if (eventData.length > 0) {
           setEvent(eventData);
       } else {
           getEvent();
       }

    }, []);


  return (
    <>
    {loading ? (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    ) : (

        <div className="event-details">
        <div className="event-detail">
            <div className="event-container-image">
                <img src={event.image} alt={event.title} className="detail-image"/>
            </div>
            
            <div className="event-container-info">
                <h2 className="event-details-title">{event.title}</h2>
                <div className="event-details-info">
                    <p><i className="fa-regular fa-calendar"></i>
                        {(() => {
                            const date = new Date(event.eventDate);
                            const month = date.toLocaleString('en-US', { month: 'short' });
                            const day = date.getDate();
                            const year = date.getFullYear();
                            const time = date.toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                            });
                        return ` ${month} ${day}, ${year} - ${time}`;  
                        })()}
                    </p>
                    <p><i className="fa-sharp fa-solid fa-location-dot"></i> {event.location}</p>
                </div>   
                <div className="event-details-description">
                    <p>About Event</p>
                    <p>{event.description}</p>
                </div>
            </div>
            
        </div>

        <div className="terms-conditions"></div>

        <div className="event-packages"> 
            <Packages packages={event.packages} /> 
            <Link to={`/events/booking/${event.id}`}>Book Event</Link>
        </div>  
    </div>
     )
    
    
    }
    </>
  )

}

export default EventDetailsPage