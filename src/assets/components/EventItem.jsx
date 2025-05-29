import React from 'react'

const EventItem = ({ item }) => {
  return (
    <div className="event-card">
        <div>{item.title}</div>
        <div>{item.date}</div>
        <div>{item.location}</div>
    </div>
  )
}

export default EventItem