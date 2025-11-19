import { Link } from 'react-router-dom'
import { sections, externalLinks } from '../data/2025/navigation'
import ShrinkrayLogo from '@/assets/images/icons/shrinkray.svg'
import ShumunovLogo from '@/assets/images/icons/shug40.png'

function Footer() {
  // Helper function to get navbar height for scroll offset
  const getNavbarHeight = () => {
    const navbar = document.querySelector('nav')
    return navbar ? navbar.offsetHeight : 96
  }

  // Easing function for smooth scrolling (ease-in-out)
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  // Smooth scroll with easing
  const smoothScrollTo = (targetPosition, duration = 800) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  // Handle navigation to section anchors
  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(`#${sectionId}`)

    if (target) {
      const navbarHeight = getNavbarHeight()
      const targetRect = target.getBoundingClientRect()
      const scrollPosition = targetRect.top + window.pageYOffset - navbarHeight

      smoothScrollTo(scrollPosition)
    }
  }

  return (
    <footer
      role="contentinfo"
      className="flex flex-col bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2">
          {sections
            .filter((section) => section.id !== 'landing')
            .map((section) => (
              <Link
                key={section.id}
                to={`#${section.id}`}
                onClick={(event) => handleNavigation(event, section.id)}
                className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {section.text}
              </Link>
            ))}
          {externalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
          © {new Date().getFullYear()} GDG Detroit. All rights reserved.
        </p>
      </div>
      <div className="mx-auto w-full max-w-full border-t border-gray-300 bg-gray-900 px-6 pb-24 pt-8 lg:px-8 dark:border-gray-700">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* Left column - 2/3 width */}
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Brought to you by:
                </h3>
              </div>
              <div className="my-8 grid grid-cols-2 gap-4 text-white">
                <div className="flex gap-4">
                  <div className="col-1 mt-1">
                    <img
                      src={ShumunovLogo}
                      alt="Shumunov Solutions logo"
                      className="size-8 object-contain"
                      width={40}
                      height={40}
                    />{' '}
                  </div>
                  <div className="col-1 mt-1">
                    <p className="text-sm font-medium text-white">
                      <a
                        href="http://shumunovsolutions.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-yellow-500 hover:text-gray-300"
                      >
                        Shumunov Solutions
                      </a>
                    </p>
                    <p className="text-xs text-gray-400">
                      UI/UX Development Fullstack React & Next.js
                    </p>
                    <p className="mt-2 text-xs italic text-gray-400">
                      We blend thoughtful code with storytelling that truly
                      connects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="col-1">
                    <img
                      src={ShrinkrayLogo}
                      alt="Shrinkray Interactive, LLC logo"
                      className="size-16 object-contain"
                      width={40}
                      height={40}
                    />{' '}
                  </div>
                  <div className="col-1 mt-4">
                    <p className="text-sm font-medium text-white">
                      <a
                        href="https://shrinkraylabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-yellow-500 hover:text-gray-300"
                      >
                        Shrinkray Interactive, LLC
                      </a>
                    </p>
                    <p className="text-xs text-gray-400">
                      UI/UX Design, Accessibility, & Development
                    </p>
                    <p className="mt-2 text-xs italic text-gray-400">
                      Enhancing Customer Experience through Accessibility,
                      Performance, Project Management, and UX Engineering
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-lf w-full text-left italic text-gray-400">
                ... just one damn project after another
              </div>
            </div>
            <div className="md:col-span-1">
              {/* Right column - 1/3 width */}
              <div className="flex flex-col gap-4 text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
