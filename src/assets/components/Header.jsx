import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


// Used Claude Sonnet 4 to finish the functionality of the Header component
// This component dynamically sets the header title based on the current route
const Header = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setHeaderTitle("Events");
    } else if (path === '/events') {
      setHeaderTitle("Events");
    } else if (path.startsWith('/events/') && path.includes('/booking')) {
      setHeaderTitle("Booking Event");
    } else if (path.startsWith('/events/')) {
      setHeaderTitle("Event Details");
    } else {
      setHeaderTitle("Events");
    }
  }, [location.pathname]);

  const isDetailPage = location.pathname.startsWith('/events/') && location.pathname !== '/events';

  return (
    <header>
      {isDetailPage && (
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
        )}
      <h1 className="header-title">{headerTitle}</h1>
    </header>
  )
}

export default Header