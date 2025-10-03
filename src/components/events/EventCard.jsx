import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const EventCard = ({ eventMetadata }) => {
  const { year, speakerCount, sessionCount, tracks, available } = eventMetadata

  if (!available) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 opacity-50">
        <h3 className="mb-2 text-xl font-bold text-gray-500">DevFest {year}</h3>
        <p className="text-gray-400">Data not available</p>
      </div>
    )
  }

  return (
    <Link
      to={`/previous-events/${year}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary-300 hover:shadow-md"
    >
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-bold text-primary-800 group-hover:text-primary-600">
          DevFest {year}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
            {speakerCount} Speaker{speakerCount !== 1 ? 's' : ''}
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            {sessionCount} Session{sessionCount !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {tracks.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-700">Tracks</h4>
          <div className="flex flex-wrap gap-1">
            {tracks.slice(0, 3).map((track, index) => (
              <span
                key={index}
                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
              >
                {track}
              </span>
            ))}
            {tracks.length > 3 && (
              <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                +{tracks.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center text-sm text-primary-600 group-hover:text-primary-500">
        <span>View Details</span>
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
}

EventCard.propTypes = {
  eventMetadata: PropTypes.shape({
    year: PropTypes.number.isRequired,
    speakerCount: PropTypes.number.isRequired,
    sessionCount: PropTypes.number.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
}

export default EventCard
