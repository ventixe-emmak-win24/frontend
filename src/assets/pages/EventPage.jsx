import React from 'react'
import Footer from '../components/Footer'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <div> test</div>
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