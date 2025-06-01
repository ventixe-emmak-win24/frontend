import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const {id} = useParams();
    const [event, setEvent] = useState({});
    const [formData, setFormData] = useState({ 
        eventId: id, 
        firstName: '', 
        lastName: '', 
        email: '', 
        streetName: '', 
        postalCode: '', 
        city: '' ,
        ticketQuantity: 1
    });

    useEffect(() => {
        getEvent()
    }, []);

    const getEvent = async () => {
        try {
            const res = await fetch(`https://ek-win24-eventservice-hpbzephwfyavhrgr.swedencentral-01.azurewebsites.net/api/events/${id}`)
            if (!res.ok) throw new Error('Failed to fetch event.');
            
            const data = await res.json();
            setEvent(data.result);
        } catch (error) {
            console.error('Error fetching event:', error);
        }
    }

   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
                const res = await fetch(`https://ek-win24-bookingservice-hbhhhgh3eperffgk.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!res.ok){
                console.error("Booking failed.");
            } else {
                console.log("Booking successful.");
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }

    }

    

  return (
    <div>
        <h1>Book Event - {event.title}</h1>
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label >Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label >Street Name:</label>
                    <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
                </div>
                <div>
                    <label >Postal Code:</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
                <div>
                    <label >City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>

                <button type="submit">Book Now</button>
            </form>
        </div>
        
        
    </div>
  )
}

export default BookingEventPage