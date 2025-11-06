import PropTypes from 'prop-types'

const HackathonEventCard = ({ title, description, alignRight = false }) => {
  return (
    <div
      className={`group relative w-full cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 ${
        alignRight ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
      }`}
    >
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>

      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-lg bg-gray-900 p-3 text-left text-xs font-normal leading-relaxed text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-gray-300">{description}</div>
        {/* Arrow */}
        <div className="absolute left-1/2 top-full -mt-1 size-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-gray-900" />
      </div>
    </div>
  )
}

HackathonEventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
}

export default HackathonEventCard
