import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.png'
import MobileNav from './MobileNav'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)

  const navRef = useRef(null)

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
      // { id: 'jobboard', text: 'Job Board' },
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
      const navbar = document.querySelector('nav')
      const navbarHeight = navbar ? navbar.offsetHeight : 96

      // Set Defautl section to landing (first element in sections)
      let currentSection = sections[0].id

      // This will track the closest distance to navbar
      let minDistance = Infinity

      sections.forEach((section, index) => {
        const target = document.querySelector(`#${section.id}`)
        if (!target) return

        const rect = target.getBoundingClientRect()
        const distance = Math.abs(rect.top - navbarHeight)

        // only consider sections that have passed the navbar
        if (rect.top - navbarHeight <= 0 && distance < minDistance) {
          currentSection = section.id
          minDistance = distance
        }

        // Special case: last section
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

    // TODO: DELETE THE FOLLOWING OLD CODE.

    // const handleScroll = () => {
    //   // Initialize the active section and its IoU
    //   let activeIoU = 0

    //   // For each section
    //   sections.forEach((section) => {
    //     const target = document.querySelector(`#${section.id}`)

    //     // Check if the target element exists
    //     if (!target) return

    //     // Get the bounding rectangle of the section
    //     const rect = target.getBoundingClientRect()

    //     // Calculate the intersection height
    //     const intersectionHeight = Math.max(
    //       0,
    //       Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
    //     )

    //     // Calculate the IoU
    //     const IoU =
    //       intersectionHeight /
    //       (rect.height + window.innerHeight - intersectionHeight)

    //     // If this section's IoU is higher than the current active section's IoU, update the active section
    //     if (IoU > activeIoU) {
    //       setActiveLink(section.id)
    //       activeIoU = IoU
    //     }
    //   })
    // }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()

    const target = document.querySelector(`#${sectionId}`)

    if (target) {
      // The following was implemented previously, problem with this is that
      // the section header goes behind the navbar, making it not visible.
      // target.scrollIntoView({ behavior: 'smooth' })

      // We have to adjust for the height of the navbar. Using 96px as a fallback
      const hardcoded_navbar_height = 96

      // I implemented dynamic navbar calculation, but it doesn't work on mobile because the navbar is expanded,
      // so the height is much larger than what it should be. I am leaving the code below in case we decide to fix it in the future.

      // const navbar = document.querySelector('nav');
      // const navbar_height = navbar ? navbar.offsetHeight : hardcoded_navbar_height;

      const navbar_height = hardcoded_navbar_height

      const y =
        target.getBoundingClientRect().top + window.pageYOffset - navbar_height

      window.scrollTo({ top: y, behavior: 'smooth' })

      // Closing NavBar (for mobile navigation). Note: it doesn't work without setTimeout.
      setTimeout(() => setIsNavVisible(false), 10)
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

  //   Separating NavList DOM because we need to use the same thing links twice, once in the desktop version
  //   an the other in the mobile version
  const navList = (
    <ul
      className={`flex flex-col space-y-4 overflow-hidden lg:flex-row lg:justify-end lg:space-x-2 lg:space-y-0 lg:px-4 lg:py-2 ${
        isNavVisible ? 'h-full' : 'h-0 lg:h-full'
      }`}
    >
      {sections.map((section) => (
        <li key={section.id} className="px-3 lg:text-center">
          <Link
            to={`#${section.id}`}
            onClick={(event) => handleNavigation(event, section.id)}
            className={`text-center ${
              section.id === 'landing' ? 'hidden' : ''
            } ${
              activeLink === section.id ? 'border-b-2 border-primary-400' : ''
            }`}
          >
            {section.text}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 z-10 w-full ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />

        {/* Mobile NavBar Hamburger Button */}
        <button
          aria-label={isNavVisible ? 'Close Main Menu' : 'Open Main Menu'}
          className="rounded border-2 px-4 lg:hidden"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FaBars className="h-10" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">{navList}</div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full py-2 lg:hidden">
        <MobileNav
          open={isNavVisible}
          className={activeLink === 'landing' ? 'bg-primary-400' : 'bg-white'}
        >
          {navList}
        </MobileNav>
      </div>
    </nav>
  )
}

export default Navbar
