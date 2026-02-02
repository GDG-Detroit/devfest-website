import { useCallback, useEffect, useRef, useState } from 'react'
import { FaBars, FaChevronDown, FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import CompassDetroitLogo from './ui/CompassDetroitLogo'
import { sections, pathways } from '@/data/2026/navigation'

function Navbar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isPathwaysOpen, setIsPathwaysOpen] = useState(false)
  const [isPathwaysExpandedMobile, setIsPathwaysExpandedMobile] =
    useState(false)
  const [isManualNavigation, setIsManualNavigation] = useState(false)

  // Auto-expand Pathways on mobile when we're on a pathway page
  const isPathwayPage = pathways.children.some(
    (link) => link.to === location.pathname
  )
  useEffect(() => {
    if (isPathwayPage) {
      setIsPathwaysExpandedMobile(true)
    }
  }, [isPathwayPage])
  const [isNavigating, setIsNavigating] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const navRef = useRef(null)
  const mobileButtonRef = useRef(null)
  const pathwaysContainerRef = useRef(null)
  const pathwaysTriggerRef = useRef(null)
  const pathwaysMenuRef = useRef(null)

  // Open Pathways menu and focus first item (for keyboard)
  const openPathwaysAndFocusFirst = () => {
    setIsPathwaysOpen(true)
    requestAnimationFrame(() => {
      const firstItem =
        pathwaysMenuRef.current?.querySelector('a[role="menuitem"]')
      firstItem?.focus()
    })
  }

  // Open Pathways menu and focus last item (for keyboard Arrow Up)
  const openPathwaysAndFocusLast = () => {
    setIsPathwaysOpen(true)
    requestAnimationFrame(() => {
      const items =
        pathwaysMenuRef.current?.querySelectorAll('a[role="menuitem"]')
      items?.[items.length - 1]?.focus()
    })
  }

  // Close Pathways and return focus to trigger
  const closePathwaysAndFocusTrigger = () => {
    setIsPathwaysOpen(false)
    pathwaysTriggerRef.current?.focus()
  }

  // Close Pathways when focus leaves the dropdown container (keyboard tabbing out)
  const handlePathwaysBlur = () => {
    // Use requestAnimationFrame so we check activeElement after focus has moved
    requestAnimationFrame(() => {
      if (
        pathwaysContainerRef.current &&
        !pathwaysContainerRef.current.contains(document.activeElement)
      ) {
        setIsPathwaysOpen(false)
      }
    })
  }

  // Keyboard: Pathways button keydown (Enter, Space, ArrowDown, ArrowUp, Escape)
  const handlePathwaysTriggerKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (isPathwaysOpen) {
        e.preventDefault()
        closePathwaysAndFocusTrigger()
      }
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (isPathwaysOpen) {
        const items =
          pathwaysMenuRef.current?.querySelectorAll('a[role="menuitem"]')
        if (items?.length) {
          const currentIndex = Array.from(items).indexOf(document.activeElement)
          if (currentIndex === -1) {
            // Focus on button; move to first or last item
            if (e.key === 'ArrowDown') {
              items[0]?.focus()
            } else {
              items[items.length - 1]?.focus()
            }
          } else if (e.key === 'ArrowDown') {
            items[Math.min(currentIndex + 1, items.length - 1)]?.focus()
          } else {
            items[Math.max(currentIndex - 1, 0)]?.focus()
          }
        }
      } else {
        if (e.key === 'ArrowDown') {
          openPathwaysAndFocusFirst()
        } else {
          openPathwaysAndFocusLast()
        }
      }
      return
    }
    // Enter and Space trigger click (toggle) - no preventDefault so button works normally
  }

  // Keyboard: Pathways menu item keydown (ArrowDown, ArrowUp, Escape)
  const handlePathwaysMenuItemKeyDown = (e, index) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      closePathwaysAndFocusTrigger()
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const items =
        pathwaysMenuRef.current?.querySelectorAll('a[role="menuitem"]')
      if (!items?.length) return
      const nextIndex =
        e.key === 'ArrowDown'
          ? Math.min(index + 1, items.length - 1)
          : Math.max(index - 1, 0)
      items[nextIndex]?.focus()
    }
  }

  // Helper function to get accurate navbar height
  const getNavbarHeight = useCallback(() => {
    const navbar = document.querySelector('nav')
    return navbar ? navbar.offsetHeight : 96
  }, [])

  // Helper function to calculate scroll position
  const calculateScrollPosition = useCallback(
    (target) => {
      const navbarHeight = getNavbarHeight()
      const targetRect = target.getBoundingClientRect()
      return targetRect.top + window.pageYOffset - navbarHeight
    },
    [getNavbarHeight]
  )

  // Helper function to reset navigation state after delay
  const resetNavigationState = useCallback((delay) => {
    setTimeout(() => {
      setIsManualNavigation(false)
      setIsNavigating(false)
    }, delay)
  }, [])

  // Helper function to perform scroll and reset state
  const performScroll = useCallback(
    (target, resetDelay) => {
      const scrollPosition = calculateScrollPosition(target)
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
      resetNavigationState(resetDelay)
    },
    [calculateScrollPosition, resetNavigationState]
  )

  // Helper function to close mobile nav
  const closeMobileNav = () => {
    if (isNavVisible) {
      setIsNavVisible(false)
      setIsPathwaysExpandedMobile(false)
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

  // Smooth scroll to section when navigating to /#section-id from another page
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return

    const sectionId = location.hash.slice(1).toLowerCase()
    const validSectionIds = sections.map((s) => s.id)
    if (!sectionId || !validSectionIds.includes(sectionId)) return

    const scrollToSection = (target) => {
      if (!target) return
      setActiveLink(sectionId)
      setIsManualNavigation(true)
      performScroll(target, 500)
    }

    const tryScroll = (retriesLeft = 10) => {
      const target = document.querySelector(`#${sectionId}`)
      if (target) {
        scrollToSection(target)
        return
      }
      if (retriesLeft > 0) {
        requestAnimationFrame(() => tryScroll(retriesLeft - 1))
      }
    }

    // Wait for home page to mount and render the section
    const id = requestAnimationFrame(() => {
      tryScroll()
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname, location.hash, performScroll])

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
  }, [isManualNavigation, activeLink, getNavbarHeight])

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
        setIsPathwaysOpen(false)
      }
    }

    // Attach the click event listener
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Check if color scheme preference was updated
  useEffect(() => {
    const colorSchemePref = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => setIsDarkMode(event.matches)

    colorSchemePref.addEventListener('change', handleChange)

    return () => colorSchemePref.removeEventListener('change', handleChange)
  }, [])

  // Desktop Navigation List
  const desktopNavList = (
    <ul
      role="menubar"
      className="z-50 flex flex-row flex-nowrap items-baseline justify-end gap-x-6 px-4 py-2"
    >
      {sections.map((section) => (
        <li key={section.id} role="none" className="text-center">
          <Link
            to={isHomePage ? `#${section.id}` : `/#${section.id}`}
            onClick={
              isHomePage
                ? (event) => handleNavigation(event, section.id)
                : undefined
            }
            role="menuitem"
            aria-current={activeLink === section.id ? 'page' : undefined}
            className={`${
              section.id === 'landing' ? 'hidden' : ''
            } relative px-2 py-4 pb-2 ${
              activeLink === section.id
                ? 'after:w-full after:opacity-100'
                : 'after:w-0 after:opacity-0'
            } after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary-400 after:transition-all after:duration-300 after:ease-in-out`}
          >
            {section.text}
          </Link>
        </li>
      ))}
      <li role="none" className="relative text-center">
        <div
          ref={pathwaysContainerRef}
          className="relative"
          onBlur={handlePathwaysBlur}
          onMouseEnter={() => setIsPathwaysOpen(true)}
          onMouseLeave={() => {
            if (
              !pathwaysContainerRef.current?.contains(document.activeElement)
            ) {
              setIsPathwaysOpen(false)
            }
          }}
        >
          <button
            ref={pathwaysTriggerRef}
            type="button"
            role="menuitem"
            aria-expanded={isPathwaysOpen}
            aria-haspopup="menu"
            aria-controls="pathways-menu"
            id="pathways-trigger"
            className="relative inline-flex items-baseline gap-1 px-2 py-4 pb-2 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-400 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:opacity-100"
            onClick={() => setIsPathwaysOpen((prev) => !prev)}
            onKeyDown={handlePathwaysTriggerKeyDown}
          >
            {pathways.text}
            <FaChevronDown
              className={`size-3.5 shrink-0 transition-transform duration-200 ${
                isPathwaysOpen ? 'rotate-180' : ''
              }`}
              aria-hidden
            />
          </button>
          <ul
            ref={pathwaysMenuRef}
            id="pathways-menu"
            role="menu"
            aria-labelledby="pathways-trigger"
            className={`absolute right-0 top-full z-40 -mt-0.5 min-w-40 rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-600 dark:bg-gray-700 ${
              isPathwaysOpen ? 'block' : 'hidden'
            }`}
          >
            {pathways.children.map((link, index) => (
              <li key={link.to} role="none">
                <Link
                  to={link.to}
                  role="menuitem"
                  className="relative block px-4 py-2 text-left text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-400 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:bg-gray-100 hover:after:w-full hover:after:opacity-100 dark:text-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setIsPathwaysOpen(false)}
                  onKeyDown={(e) => handlePathwaysMenuItemKeyDown(e, index)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  )

  // Mobile Navigation List
  const mobileNavList = (
    <ul className="flex flex-col space-y-2 p-4 dark:bg-gray-700 dark:text-white">
      {sections.map((section) => (
        <li
          key={section.id}
          className={`${section.id === 'landing' ? 'hidden' : ''}`}
        >
          <Link
            to={isHomePage ? `#${section.id}` : `/#${section.id}`}
            onClick={
              isHomePage
                ? (event) => handleNavigation(event, section.id)
                : undefined
            }
            aria-current={activeLink === section.id ? 'page' : undefined}
            className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-gray-100 dark:hover:bg-primary-400 ${
              activeLink === section.id
                ? 'bg-primary-100 font-semibold text-primary-700'
                : 'text-gray-700 dark:text-white dark:hover:text-gray-900'
            }`}
          >
            {section.text}
          </Link>
        </li>
      ))}
      <li>
        <button
          type="button"
          aria-expanded={isPathwaysExpandedMobile}
          aria-controls="pathways-mobile-menu"
          className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-center text-gray-700 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900"
          onClick={() => setIsPathwaysExpandedMobile((prev) => !prev)}
        >
          {pathways.text}
          <FaChevronDown
            className={`size-3.5 shrink-0 transition-transform duration-200 ${
              isPathwaysExpandedMobile ? 'rotate-180' : ''
            }`}
            aria-hidden
          />
        </button>
        <ul
          id="pathways-mobile-menu"
          className={`space-y-1 overflow-hidden pl-4 ${
            isPathwaysExpandedMobile ? 'mt-2' : 'hidden'
          }`}
        >
          {pathways.children.map((link) => {
            const isActivePathway = location.pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActivePathway ? 'page' : undefined}
                  className={`block rounded-lg px-4 py-3 text-center transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 ${
                    isActivePathway
                      ? 'bg-primary-100 font-semibold text-primary-700'
                      : 'text-gray-700'
                  }`}
                  onClick={closeMobileNav}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed left-0 top-0 z-30 w-screen ${
        activeLink === 'landing'
          ? 'bg-white text-sky-900'
          : 'bg-white text-gray-700 shadow-lg dark:bg-gray-700 dark:text-gray-100'
      }`}
    >
      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {activeLink &&
          `Currently viewing ${
            sections.find((s) => s.id === activeLink)?.text
          } section`}
      </div>
      <div
        className="grid w-full min-w-0 max-w-full grid-cols-[1fr_auto] items-center gap-2 p-2 sm:p-4"
        style={{ width: '100%', maxWidth: '100%' }}
      >
        <Link
          to="/"
          className="min-w-0 transition-opacity hover:opacity-80"
          onClick={handleHomeNavigation}
          aria-label="Go to home page"
        >
          <CompassDetroitLogo
            textColor={
              isDarkMode && activeLink !== 'landing' ? '#FFFFFF' : '#0c4a6e'
            }
            className="h-12 sm:h-16"
          />
        </Link>

        {/* Mobile NavBar Hamburger Button */}
        <button
          ref={mobileButtonRef}
          id="mobile-menu-button"
          aria-label={isNavVisible ? 'Close Main Menu' : 'Open Main Menu'}
          aria-expanded={isNavVisible}
          aria-controls="mobile-navigation"
          className={`touch-manipulation rounded border-2 p-2 transition-colors sm:px-4 xl:hidden ${
            activeLink === 'landing'
              ? 'border-sky-900 hover:bg-primary-300 active:bg-primary-200'
              : 'border-gray-300 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-100 dark:hover:bg-primary-400'
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
            <FaXmark className="size-6" />
          ) : (
            <FaBars className="size-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:block">{desktopNavList}</div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full max-w-full overflow-hidden xl:hidden">
        {isNavVisible && (
          <div
            id="mobile-navigation"
            aria-labelledby="mobile-menu-button"
            className={`block w-full overflow-hidden bg-white shadow-lg ${
              activeLink === 'landing'
                ? 'bg-primary-400'
                : 'bg-white dark:bg-gray-900 dark:text-white'
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
