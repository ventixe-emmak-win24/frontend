import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <EventList />
        </main>
        <Footer />
    </div>
  )
}

export default EventPage