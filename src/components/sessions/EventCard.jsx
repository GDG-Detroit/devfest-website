import PropTypes from 'prop-types'

const EventCard = ({
  title,
  description,
  alignRight = false,
  compact = false,
}) => {
  return (
    <div
      className={`group relative w-full ${
        compact
          ? 'rounded-lg bg-white p-3 shadow-sm'
          : `rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-lg ${
              alignRight
                ? 'md:ml-auto md:w-[calc(50%-3rem)]'
                : 'md:mr-auto md:w-[calc(50%-3rem)]'
            }`
      }`}
    >
      <h4
        className={`${
          compact ? 'mb-1 text-base' : 'mb-2 text-lg md:text-xl'
        } font-bold text-gray-900`}
      >
        {title}
      </h4>

      {/* Hover tooltip */}
      <div
        className={`pointer-events-none absolute z-10 ${
          compact
            ? 'hidden'
            : 'opacity-0 transition-opacity duration-200 group-hover:opacity-100'
        } ${
          alignRight
            ? 'right-0 top-full mr-4 mt-2'
            : 'left-0 top-full ml-4 mt-2'
        } w-72 rounded-lg border border-gray-200 bg-gray-900 p-4 shadow-xl`}
      >
        <div className="text-sm leading-relaxed text-gray-300">
          {description}
        </div>
        {/* Arrow */}
        <div
          className={`absolute -top-2 ${
            alignRight ? 'right-8' : 'left-8'
          } size-0 border-8 border-transparent border-b-gray-900`}
        />
      </div>

      {/* Show description inline for compact mode */}
      {compact && (
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      )}
    </div>
  )
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  compact: PropTypes.bool,
}

export default EventCard
