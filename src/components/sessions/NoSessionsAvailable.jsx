import PropTypes from 'prop-types'
import { FaClock } from 'react-icons/fa'

const NoSessionsAvailable = ({ currentSession }) => {
  return (
    <li className="w-full">
      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 text-center shadow-md md:p-12 dark:border-gray-600 dark:bg-gray-800">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary-400 p-4 dark:bg-primary-900">
            <FaClock className="size-12 text-white" aria-hidden="true" />
          </div>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Coming Soon!
        </h3>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
          Watch for updates on {currentSession} sessions
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          We&apos;re working hard to bring you exciting content. Stay tuned for
          announcements!
        </p>
      </div>
    </li>
  )
}

NoSessionsAvailable.propTypes = {
  currentSession: PropTypes.string.isRequired,
}

export default NoSessionsAvailable
