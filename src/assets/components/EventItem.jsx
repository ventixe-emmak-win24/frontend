import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
  

  return (
    <Link to={`/events/${item.id}`} state={{ event: item }} className="event-item-link">
      <div className="event-card">
        <div className="event-image">
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>
        
        <div className="event-date"> 
          {(() => {
            const date = new Date(item.eventDate);
            const month = date.toLocaleString('en-US', { month: 'short' });
            const day = date.getDate();
            const year = date.getFullYear();
            const time = date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            });
          return `${month} ${day}, ${year} - ${time}`;  
          })()}
        </div>
        
        <div className="event-title">{item.title}</div>
        <div className="event-location"><i className="fa-sharp fa-solid fa-location-dot"></i> {item.location}</div>
        
      </div>
    </Link>
    
  )
}

export default EventItem