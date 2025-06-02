import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEventPage from './assets/pages/BookingEventPage'
import MainLayout from './assets/layouts/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
