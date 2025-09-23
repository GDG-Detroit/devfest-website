import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.png'

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
    const handleScroll = () => {
      // Initialize the active section and its IoU
      let activeIoU = 0

      // For each section
      sections.forEach((section) => {
        const target = document.querySelector(`#${section.id}`)

        // Check if the target element exists
        if (!target) return

        // Get the bounding rectangle of the section
        const rect = target.getBoundingClientRect()

        // Calculate the intersection height
        const intersectionHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )

        // Calculate the IoU
        const IoU =
          intersectionHeight /
          (rect.height + window.innerHeight - intersectionHeight)

        // If this section's IoU is higher than the current active section's IoU, update the active section
        if (IoU > activeIoU) {
          setActiveLink(section.id)
          activeIoU = IoU
        }
      })
    }

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
      target.scrollIntoView({ behavior: 'smooth' })
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

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 z-10 w-full p-4 ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between">
        <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />
        <button
          className="rounded border-2 px-4 lg:hidden"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FaBars className="h-10" />
        </button>
        <ul
          className={`flex flex-col space-y-4 overflow-hidden lg:flex-row lg:justify-end lg:space-x-2 lg:space-y-0 lg:px-4 lg:py-2 ${
            isNavVisible ? 'h-full' : 'h-0 lg:h-full'
          }`}
        >
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={`#${section.id}`}
                onClick={(event) => handleNavigation(event, section.id)}
                className={`${section.id === 'landing' ? 'hidden' : ''} p-6 ${
                  activeLink === section.id ? 'text-primary-500' : ''
                }`}
              >
                {section.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
