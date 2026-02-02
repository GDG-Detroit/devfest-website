import { Link } from 'react-router-dom'
import { sections, externalLinks } from '@/data/2026/navigation'
import GdgDetroitLogo from '@/assets/images/gdg-detroit-logo-footer.svg'
import CompassDetroit from '@/assets/images/sponsors/Compass_Detroit_logo.webp'

function Footer() {
  // Section links always use /#section-id so that smooth scrolling is handled
  // consistently by the Navbar's hash-based useEffect (from any page, including home).
  return (
    <footer
      role="contentinfo"
      className="flex flex-col bg-charcoal-100 text-black dark:bg-indigo-800 dark:text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-2">
          {sections
            .filter((section) => section.id !== 'landing')
            .map((section) => (
              <Link
                key={section.id}
                to={`/#${section.id}`}
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
          © {new Date().getFullYear()} Compass Detroit. All rights reserved.
        </p>
      </div>
      <div className="mx-auto w-full max-w-full border-t border-gray-300 bg-indigo-950 px-6 pb-24 pt-8 lg:px-8 dark:border-gray-700">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1 md:col-span-3">
              {/* Full width column */}
              <div>
                <h3 className="mb-2 text-lg font-semibold uppercase tracking-wide text-gray-400">
                  Brought to you by:
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Left column - 1/3 width */}
              <img
                src={GdgDetroitLogo}
                alt="GDG Detroit Logo"
                className="h-auto w-64 object-contain object-center"
              />
            </div>
            <div className="flex items-center justify-center">
              {/* Middle column - 1/3 width */}
              <img
                src={CompassDetroit}
                alt="Compass Detroit Logo"
                className="h-auto w-64 object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-1 items-center">
              {/* Right column - 1/3 width */}
              <p className="prose text-pretty text-sm text-white">
                The Compass Detroit and GDG Detroit teams are volunteers who are
                passionate about helping the community learn and grow in the
                field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
