import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { DIRECTION } from '@/constants/directions'
import { addHours, format, parse } from 'date-fns'

function SessionCard({
  speakers,
  speakerAvatars,
  sessionTitle,
  sessionDesc,
  sessionTime,
  sessionRoom,
}) {
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)

  const toggle = () => {
    if (direction == DIRECTION.TOP) {
      setDirection(DIRECTION.BOTTOM)
    } else {
      setDirection(DIRECTION.TOP)
    }
  }

  const getSessionTimes = () => {
    if (!sessionTime) return { startTime: '', endTime: '' }

    if (sessionTime.includes('-')) {
      const [startStr, endStr] = sessionTime.split('-').map((str) => str.trim())
      return {
        startTime: format(parse(startStr, 'h:mm', new Date()), 'h:mm'),
        endTime: format(parse(endStr, 'h:mm', new Date()), 'h:mm'),
      }
    }

    const parsedStartTime = parse(sessionTime, 'h:mm', new Date())
    return {
      startTime: format(parsedStartTime, 'h:mm'),
      endTime: format(addHours(parsedStartTime, 1), 'h:mm'),
    }
  }

  const { startTime, endTime } = getSessionTimes()
  const isExpanded = direction === DIRECTION.TOP
  const hasTimeInfo = startTime && endTime
  const hasSessionInfo = hasTimeInfo || sessionRoom

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg transition duration-200 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => sessionDesc && toggle()}
        aria-expanded={sessionDesc ? isExpanded : undefined}
        aria-controls={
          sessionTitle
            ? `session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`
            : undefined
        }
        aria-label={
          sessionTitle
            ? `Toggle session details for ${sessionTitle}`
            : `Session: ${sessionTitle}`
        }
        className="flex w-full items-center justify-between p-3 md:px-8 lg:px-14"
      >
        <div className="flex items-center text-left">
          {speakerAvatars?.length && (
            <div className="shrink-0 overflow-hidden rounded-full md:flex">
              {speakerAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={
                    !avatar
                      ? `https://ui-avatars.com/api/?name=${speakers[index]}&background=random`
                      : avatar
                  }
                  alt={`Headshot of ${speakers[index]}`}
                  className={`${
                    speakerAvatars?.length >= 3
                      ? 'size-20 lg:size-32'
                      : 'size-40'
                  } object-cover`}
                />
              ))}
            </div>
          )}
          <div className="ml-5">
            {sessionTitle && (
              <h3 className="font-bold text-gray-900 md:text-xl lg:text-2xl xl:text-3xl dark:text-white">
                {sessionTitle}
              </h3>
            )}
            <p className="text-gray-700 dark:text-gray-300">
              by {speakers.join(' & ')}
            </p>
            {hasSessionInfo && (
              <div className="mt-2.5 flex items-center space-x-4 text-sm sm:space-x-2 sm:text-base">
                {hasTimeInfo && (
                  <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-2">
                    <p className="text-gray-900 dark:text-gray-100">at</p>
                    <p className="whitespace-nowrap font-bold text-slate-500 sm:text-xl md:block lg:text-2xl dark:text-slate-400">
                      {startTime} - {endTime}
                    </p>
                  </div>
                )}
                {sessionRoom && (
                  <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-2">
                    <p className="text-gray-900 dark:text-gray-100">in</p>
                    <p className="whitespace-nowrap text-gray-900 dark:text-gray-100">
                      {sessionRoom}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {sessionDesc && (
          <IoChevronDown
            className={`size-10 shrink-0 text-gray-900 transition-transform duration-100 ease-linear sm:size-14 md:size-16 lg:size-20 dark:text-gray-100 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            }`}
          />
        )}
      </button>
      {isExpanded && sessionDesc && (
        <div
          id={`session-${sessionTitle.replace(/\s+/g, '-').toLowerCase()}`}
          className="border-t border-gray-600 px-3 pb-10 pt-5 md:px-8 lg:px-14 dark:border-gray-600"
        >
          <p className="whitespace-pre-wrap text-gray-900 dark:text-gray-100">
            {sessionDesc}
          </p>
        </div>
      )}
    </div>
  )
}

SessionCard.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  speakerAvatars: PropTypes.arrayOf(PropTypes.string).isRequired,
  sessionTitle: PropTypes.string.isRequired,
  sessionDesc: PropTypes.string.isRequired,
  sessionTime: PropTypes.string.isRequired,
  sessionRoom: PropTypes.string.isRequired,
}

export default SessionCard
