import PropTypes from 'prop-types'

import EventCard from './EventCard'

const Timeline = ({ schedule, compact = false }) => {
  return (
    <div className="relative">
      {/* Schedule items */}
      <div className={compact ? 'space-y-8' : 'space-y-12'}>
        {schedule.map((timeSlot, timeIndex) => (
          <div key={timeSlot.time} className="relative">
            {/* Vertical line segment */}
            {timeIndex < schedule.length - 1 && (
              <div
                className={`absolute ${
                  compact ? 'left-6' : 'left-8 md:left-1/2'
                } ${
                  compact ? 'top-12' : 'top-16 md:top-8'
                } w-0.5 bg-gradient-to-b from-primary-400 via-sky-500 to-primary-400`}
                style={{
                  height: compact ? 'calc(100% + 2rem)' : 'calc(100% + 3rem)',
                }}
              />
            )}

            {/* Time badge */}
            <div
              className={`absolute ${
                compact
                  ? 'left-0 size-12'
                  : 'left-0 size-16 md:left-1/2 md:-translate-x-1/2'
              } flex items-center justify-center rounded-full bg-primary-400 text-sm font-bold text-gray-900 shadow-lg`}
            >
              <span
                className={`text-center ${
                  compact ? 'text-[10px]' : 'text-xs md:text-sm'
                } leading-tight`}
              >
                {timeSlot.time}
              </span>
            </div>

            {/* Events for this time */}
            <div
              className={`${
                compact ? 'ml-16 space-y-3' : 'ml-24 space-y-4 md:ml-0'
              }`}
            >
              {timeSlot?.events.length === 1 ? (
                // Single event - alternate sides on desktop (unless compact)
                <EventCard
                  title={timeSlot?.events[0]?.title}
                  description={timeSlot?.events[0]?.description}
                  alignRight={!compact && timeIndex % 2 !== 0}
                  compact={compact}
                />
              ) : (
                // Multiple events for a single time slot
                <div
                  className={`flex flex-col gap-4 ${
                    !compact && 'md:flex-row md:justify-between md:gap-8'
                  }`}
                >
                  <EventCard
                    title={timeSlot?.events[0]?.title}
                    description={timeSlot?.events[0]?.description}
                    alignRight={false}
                    compact={compact}
                  />
                  <EventCard
                    title={timeSlot?.events[1]?.title}
                    description={timeSlot?.events[1]?.description}
                    alignRight={!compact}
                    compact={compact}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Timeline.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  compact: PropTypes.bool,
}

export default Timeline
