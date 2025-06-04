import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false); // Claude Sonnet 4

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

    // Claude Sonnet 4
    const handleQuantityChange = (increment) => {
        const newQuantity = formData.ticketQuantity + increment;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setFormData(prev => ({
                ...prev,
                ticketQuantity: newQuantity
            }));
        }
    };  

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
                setShowConfirmation(true); // Claude Sonnet 4
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    }

    // Claude Sonnet 4
    const getSelectedPackage = () => {
        if (!event.packages || !formData.packageId) return null;
        return event.packages.find(pkg => pkg.id == formData.packageId);
    };

    const handleBackToEvents = () => {
        setShowConfirmation(false);
        navigate("/");
    };

    const selectedPackage = getSelectedPackage();


  return (
    <div className="booking-event-page">
        <h1>Book Event</h1>
        <h2>{event.title}</h2>
        <div className="booking-event-form">
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="input-medium"  name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="input-medium" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" required />
                </div>
                <div className="form-group">
                    <label >Email:</label>
                    <input type="email" className="input-medium" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label >Street Name:</label>
                    <input type="text" className="input-medium" name="streetName" value={formData.streetName} onChange={handleChange} placeholder="Enter your street name" required />
                </div>
                <div className="form-group">
                    <label >Postal Code:</label>
                    <input type="text" className="input-medium" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Enter your postal code" required />
                </div>
                <div className="form-group">
                    <label >City:</label>
                    <input type="text" className="input-medium" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" required />
                </div>

                <div className="form-group"> 
                    <label>Package:</label>
                    <select className="select-medium" name="packageId" value={formData.packageId} onChange={handleChange} required>
                        {event.packages && event.packages.map(x => (
                            <option key={x.id} value={x.id}>{x.title} - {x.price}{x.currency}</option>
                        ))}
                    </select>
                </div>

                {/* Claude Sonnet 4 */}
                <div className="form-group">
                    <label>Ticket Quantity:</label>
                    <div className="quantity-selector">
                        <button 
                            type="button" 
                            className="quantity-btn minus-btn" 
                            onClick={() => handleQuantityChange(-1)}
                            disabled={formData.ticketQuantity <= 1}
                        >
                            -
                        </button>
                        <span className="quantity-display">{formData.ticketQuantity}</span>
                        <button 
                            type="button" 
                            className="quantity-btn plus-btn" 
                            onClick={() => handleQuantityChange(1)}
                            disabled={formData.ticketQuantity >= 10}
                        >
                            +
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn-medium-primary-noIcon">Book Now</button>
            </form>
        </div>

        {/* Claude Sonnet 4 */}
        {showConfirmation && (
            <div className="popup-overlay">
                <div className="popup-content">
                    <h2>Booking Confirmed!</h2>
                    <div className="booking-summary">
                        <h3>Booking Summary</h3>
                        <div className="summary-section">
                            <h4>Event Details</h4>
                            <p><strong>Event:</strong> {event.title}</p>
                            <p><strong>Package:</strong> {selectedPackage ? `${selectedPackage.title} - ${selectedPackage.price}${selectedPackage.currency}` : 'N/A'}</p>
                            <p><strong>Tickets:</strong> {formData.ticketQuantity}</p>
                        </div>
                        <div className="summary-section">
                            <h4>Personal Information</h4>
                            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Address:</strong> {formData.streetName}, {formData.postalCode} {formData.city}</p>
                        </div>
                    </div>
                    <button onClick={handleBackToEvents} className="btn-medium-primary-noIcon">
                        Back to Events
                    </button>
                </div>
            </div>
        )}



    </div>
  )
}

export default BookingEventPage