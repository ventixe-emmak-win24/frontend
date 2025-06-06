import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/Logo.svg"

// Used Claude Sonnet 4 to finish the functionality of the Header component
const Header = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const location = useLocation();

   const [showMenu, setShowMenu] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isDetailPage = location.pathname.startsWith('/events/') && location.pathname !== '/events';
  const isEventsPage = location.pathname === '/' || location.pathname === '/events';

  return (
  <>
    {/* Mostly Claude Sonnet 4 */}
    {isMobile ? (
    
    <header className="mobile-header">
      <div className="header-left">
        {isDetailPage && (
          <Link to="/" className="back-arrow">
            <i class="fa-solid fa-chevron-left"></i>
          </Link>
        )}
        {isEventsPage && isMobile && (
          <img src={Logo} alt="Logo" className="header-logo" />
        )}

      </div>
      
      <h1 className="header-title-mobile">{headerTitle}</h1>
      
      <div className="header-right">
        {isMobile && (
          <button 
          className="hamburger-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
      </div>
      
      {showMenu && isMobile && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-menu-item">
            <i className="fa-sharp fa-solid fa-ticket"></i>
            <span>Events</span>
          </Link>
        </div>
      )}
    </header>

    ) : (

    <header>
      {isDetailPage && (
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
        )}
      <h1 className="header-title">{headerTitle}</h1>
    </header>
    )}

    </>
  )
}

export default Header