import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.svg'

function PreviousEventsNavbar() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const isPreviousEventPage =
    location.pathname.startsWith('/previous-events/') &&
    location.pathname !== '/previous-events'

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className="fixed left-0 top-0 z-10 w-full bg-white text-gray-700 shadow-lg"
    >
      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {location.pathname === '/previous-events'
          ? 'Currently viewing all previous events'
          : 'Currently viewing previous event details'}
      </div>
      <div className="flex items-center justify-between p-4">
        <Link
          to="/"
          className="transition-opacity hover:opacity-80"
          aria-label="Go to home page"
        >
          <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />
        </Link>

        {/* Mobile NavBar Hamburger Button */}
        <button
          id="mobile-menu-button"
          aria-label={isNavVisible ? 'Close Main Menu' : 'Open Main Menu'}
          aria-expanded={isNavVisible}
          aria-controls="mobile-navigation"
          className="touch-manipulation rounded border-2 border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100 active:bg-gray-200 xl:hidden"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsNavVisible((prev) => !prev)
          }}
          onTouchStart={(e) => {
            e.preventDefault()
          }}
          onTouchEnd={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsNavVisible((prev) => !prev)
          }}
          style={{
            touchAction: 'manipulation',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            minHeight: '44px',
            minWidth: '44px',
          }}
        >
          {isNavVisible ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:block">
          <ul
            role="menubar"
            className="flex flex-row justify-end space-x-6 px-4 py-2"
          >
            <li role="none" className="text-center">
              <Link
                to="/"
                role="menuitem"
                className="relative px-2 py-6 pb-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-400 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:opacity-100"
              >
                Home
              </Link>
            </li>
            <li role="none" className="text-center">
              <Link
                to="/previous-events"
                role="menuitem"
                aria-current={
                  location.pathname === '/previous-events' ? 'page' : undefined
                }
                aria-label={
                  isPreviousEventPage
                    ? 'Back to all previous events'
                    : 'View all previous events'
                }
                className={`relative px-2 py-6 pb-2 ${
                  location.pathname === '/previous-events'
                    ? 'after:w-full after:opacity-100'
                    : 'after:w-0 after:opacity-0'
                } after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:opacity-100`}
              >
                {isPreviousEventPage ? 'Back to Events' : 'All Events'}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full xl:hidden">
        {isNavVisible && (
          <div
            id="mobile-navigation"
            aria-labelledby="mobile-menu-button"
            className="block w-full overflow-hidden bg-white shadow-lg"
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  to="/"
                  className="block rounded-lg px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/previous-events"
                  aria-current={
                    location.pathname === '/previous-events'
                      ? 'page'
                      : undefined
                  }
                  className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-gray-100 ${
                    location.pathname === '/previous-events'
                      ? 'bg-primary-100 font-semibold text-primary-700'
                      : 'text-gray-700'
                  }`}
                >
                  {isPreviousEventPage ? 'Back to Events' : 'All Events'}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default PreviousEventsNavbar
