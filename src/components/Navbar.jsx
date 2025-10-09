import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.svg'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  const navRef = useRef(null)
  const mobileButtonRef = useRef(null)

  const externalLinks = useMemo(
    () => [{ to: '/previous-events', text: 'Previous Events' }],
    []
  )

  // Helper function to get accurate navbar height
  const getNavbarHeight = () => {
    const navbar = document.querySelector('nav')
    return navbar ? navbar.offsetHeight : 96
  }

  // Helper function to calculate scroll position
  const calculateScrollPosition = (target) => {
    const navbarHeight = getNavbarHeight()
    const targetRect = target.getBoundingClientRect()
    return targetRect.top + window.pageYOffset - navbarHeight
  }

  // Helper function to reset navigation state after delay
  const resetNavigationState = (delay) => {
    setTimeout(() => {
      setIsManualNavigation(false)
      setIsNavigating(false)
    }, delay)
  }

  // Helper function to perform scroll and reset state
  const performScroll = (target, resetDelay) => {
    const scrollPosition = calculateScrollPosition(target)
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    resetNavigationState(resetDelay)
  }

  // Helper function to close mobile nav
  const closeMobileNav = () => {
    if (isNavVisible) {
      setIsNavVisible(false)
    }
  }

  // Helper function to navigate to home
  const handleHomeNavigation = () => {
    // Close mobile nav if open
    if (isNavVisible) {
      setIsNavVisible(false)
    }

    // Set active link to landing
    setActiveLink('landing')

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // TODO: Update navigation once Aaron's PR is merged
  // TODO: Customize navigation if it's the previous-events route
  // Add a link to previous-events
  // Don't need the links to the different sections
  // Need a link back to the home page
  // Create a separate component for the previous-events navbar?
  const sections = useMemo(
    () => [
      { id: 'landing', text: 'Landing' },
      { id: 'location', text: 'Location' },
      { id: 'sessions', text: 'Sessions' },
      { id: 'sponsors', text: 'Sponsors' },
      { id: 'jobboard', text: 'Job Board' },
      { id: 'organizers', text: 'Organizers' },
      { id: 'facilitators', text: 'Facilitators' },
      { id: 'speakers', text: 'Speakers' },
      { id: 'devteam', text: 'Dev Team' },
    ],
    []
  )

  useEffect(() => {
    // Function to set the active link based on scroll position
    // Algorithm Explanation:
    // Section will be set to active if it touches or pass the navbar
    const handleScroll = () => {
      // Skip scroll detection during manual navigation
      if (isManualNavigation) return

      // Use dynamic navbar height for accurate scroll detection
      const navbarHeight = getNavbarHeight()

      // Set Default section to landing (first element in sections)
      let currentSection = sections[0].id

      // This will track the closest distance to navbar
      let minDistance = Infinity

      sections.forEach((section, index) => {
        const target = document.querySelector(`#${section.id}`)
        if (!target) return

        const rect = target.getBoundingClientRect()

        // Check if section is in view (top is above navbar but bottom is below navbar)
        const sectionTop = rect.top
        const sectionBottom = rect.bottom
        const isInView =
          sectionTop <= navbarHeight && sectionBottom > navbarHeight

        // Check if section has passed the navbar by a reasonable amount
        const hasPassedNavbar = sectionTop <= navbarHeight - 50 // 50px buffer

        if (isInView) {
          // Section is currently in view
          currentSection = section.id
        } else if (hasPassedNavbar) {
          // Section has passed the navbar, use it as fallback
          const distance = Math.abs(sectionTop - navbarHeight)
          if (distance < minDistance) {
            currentSection = section.id
            minDistance = distance
          }
        }

        // Special case: last section when scrolled to bottom
        if (index === sections.length - 1) {
          const scrolledToBottom =
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 10 // near bottom

          if (scrolledToBottom) {
            currentSection = section.id
          }
        }
      })

      setActiveLink(currentSection)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections, isManualNavigation, activeLink])

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()

    // Prevent multiple rapid clicks
    if (isNavigating) {
      return
    }

    const target = document.querySelector(`#${sectionId}`)

    if (target) {
      // Check if we're already at this section (within a reasonable distance)
      const navbarHeight = getNavbarHeight()
      const targetRect = target.getBoundingClientRect()
      const distanceFromTarget = Math.abs(targetRect.top - navbarHeight)

      // If we're already close to the target (within 100px), just update active link and return
      if (distanceFromTarget < 100 && !isNavVisible) {
        setActiveLink(sectionId)
        return
      }

      // Set navigation state
      setIsNavigating(true)
      setActiveLink(sectionId)
      setIsManualNavigation(true)

      // Check if this is a mobile navigation (mobile nav is visible)
      const isMobileNavigation = isNavVisible

      if (isMobileNavigation) {
        // Mobile navigation logic
        closeMobileNav()

        // Wait for mobile nav animation to complete before scrolling
        setTimeout(() => {
          performScroll(target, 1000) // 1000ms reset delay for mobile
        }, 350) // Wait for mobile nav animation
      } else {
        // Desktop navigation logic - immediate scroll
        performScroll(target, 500) // 500ms reset delay for desktop
      }
    }
  }

  useEffect(() => {
    // Function to close the nav when the user clicks outside of it
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    // Attach the click event listener
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Desktop Navigation List
  const desktopNavList = (
    <ul
      role="menubar"
      className="flex flex-row justify-end space-x-6 px-4 py-2"
    >
      {sections.map((section) => (
        <li key={section.id} role="none" className="text-center">
          <Link
            to={`#${section.id}`}
            onClick={(event) => handleNavigation(event, section.id)}
            role="menuitem"
            aria-current={activeLink === section.id ? 'page' : undefined}
            className={`${
              section.id === 'landing' ? 'hidden' : ''
            } relative px-2 py-6 pb-2 ${
              activeLink === section.id
                ? 'after:w-full after:opacity-100'
                : 'after:w-0 after:opacity-0'
            } after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-in-out`}
          >
            {section.text}
          </Link>
        </li>
      ))}
      {externalLinks.map((link) => (
        <li key={link.to} role="none" className="text-center">
          <Link
            to={link.to}
            role="menuitem"
            className="relative px-2 py-6 pb-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-400 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:opacity-100"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )

  // Mobile Navigation List
  const mobileNavList = (
    <ul className="flex flex-col space-y-2 p-4">
      {sections.map((section) => (
        <li
          key={section.id}
          className={`${section.id === 'landing' ? 'hidden' : ''}`}
        >
          <Link
            to={`#${section.id}`}
            onClick={(event) => handleNavigation(event, section.id)}
            aria-current={activeLink === section.id ? 'page' : undefined}
            className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-gray-100 ${
              activeLink === section.id
                ? 'bg-primary-100 font-semibold text-primary-700'
                : 'text-gray-700'
            }`}
          >
            {section.text}
          </Link>
        </li>
      ))}
      {externalLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="block rounded-lg px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-100"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed left-0 top-0 z-10 w-full ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white text-gray-700 shadow-lg'
      }`}
    >
      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {activeLink &&
          `Currently viewing ${
            sections.find((s) => s.id === activeLink)?.text
          } section`}
      </div>
      <div className="flex items-center justify-between p-4">
        <Link
          to="/"
          className="transition-opacity hover:opacity-80"
          onClick={handleHomeNavigation}
          aria-label="Go to home page"
        >
          <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />
        </Link>

        {/* Mobile NavBar Hamburger Button */}
        <button
          ref={mobileButtonRef}
          id="mobile-menu-button"
          aria-label={isNavVisible ? 'Close Main Menu' : 'Open Main Menu'}
          aria-expanded={isNavVisible}
          aria-controls="mobile-navigation"
          className={`touch-manipulation rounded border-2 px-4 py-2 transition-colors xl:hidden ${
            activeLink === 'landing'
              ? 'border-sky-900 hover:bg-primary-300 active:bg-primary-200'
              : 'border-gray-300 hover:bg-gray-100 active:bg-gray-200'
          }`}
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
        <div className="hidden xl:block">{desktopNavList}</div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full xl:hidden">
        {isNavVisible && (
          <div
            id="mobile-navigation"
            aria-labelledby="mobile-menu-button"
            className={`block w-full overflow-hidden bg-white shadow-lg ${
              activeLink === 'landing' ? 'bg-primary-400' : 'bg-white'
            }`}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {mobileNavList}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
