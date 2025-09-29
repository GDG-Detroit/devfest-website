import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SessionsLogo from '@/assets/images/sessions-logo.png'
import SessionCard from '@/components/sessions/SessionCard'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

const convertTo24Hour = (time) => {
  const [hour, minute] = time.split(':').map(Number)

  if (hour === 12) {
    return `12:${minute.toString().padStart(2, '0')}`
  }
  if (hour >= 1 && hour <= 5) {
    return `${(hour + 12).toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`
  }
  return `${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}`
}

const SessionsSection = ({
  speakersData,
  year = new Date().getFullYear(),
  tracks = [],
  defaultExpanded = true,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [direction, setDirection] = useState(
    defaultExpanded === true ? DIRECTION.TOP : DIRECTION.BOTTOM
  )

  const tabs = [...tracks]

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.BOTTOM : DIRECTION.TOP)
  }

  let combinedSpeakerData = []

  speakersData.forEach((speaker) => {
    let existingSession = combinedSpeakerData.find(
      (session) => session.sessionTitle === speaker.session.title
    )

    if (existingSession) {
      existingSession.speakers.push(speaker.name)
      existingSession.speakerAvatars.push(speaker.avatar)
      existingSession.id += `_${speaker.id}`
    } else {
      combinedSpeakerData.push({
        id: speaker.id,
        speakers: [speaker.name],
        speakerAvatars: [speaker.avatar],
        sessionTitle: speaker.session.title,
        sessionDesc: speaker.session.description,
        track: speaker.session.track,
        sessionTime: speaker.session.time,
        sessionRoom: speaker.session.room,
      })
    }
  })

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-center bg-primary-100"
    >
      <div className="relative w-full px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <h2 className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          {year} Sessions
        </h2>
        <img
          src={SessionsLogo}
          alt="Sessions"
          className="absolute right-2 top-6 h-10 sm:right-10 sm:h-12 md:right-14 md:top-8 md:h-14 lg:right-16 lg:top-12 lg:h-16"
        />
        <button
          onClick={toggleExpanded}
          className="flex cursor-pointer items-center hover:text-gray-600"
        >
          <IoChevronDown
            className={`h-10 w-10 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-100 ease-linear`}
          />
        </button>
      </div>
      <div
        className={`mt-4 inline-flex w-5/6 items-center justify-between rounded-md bg-black md:w-auto ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {index !== 0 && (
              <div
                className={`h-5 w-1 bg-primary-400 ${
                  [activeTab, activeTab + 1].includes(index) && 'invisible'
                }`}
              />
            )}

            <button
              key={tab}
              className={`relative grow rounded-md px-1 py-2 text-lg font-medium transition-colors duration-300 focus:outline-none md:w-40 lg:w-56 ${
                activeTab === index
                  ? 'bg-primary-400 text-black'
                  : 'bg-black text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab === 'Miscellaneous' ? (
                <>
                  <span className="inline max-xs:hidden">Miscellaneous</span>
                  <span className="hidden max-xs:inline">Misc</span>
                </>
              ) : (
                tab
              )}
              {activeTab === index && (
                <div className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[12px] border-t-[12px] border-primary-400 border-x-transparent"></div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div
        className={`flex items-center justify-center ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {combinedSpeakerData && combinedSpeakerData.length ? (
          <ul className="grid w-5/6 grid-cols-1 gap-10 py-7">
            {combinedSpeakerData
              .filter((session) => session.track === tabs[activeTab])
              .sort((a, b) => {
                const timeA = convertTo24Hour(a.sessionTime)
                const timeB = convertTo24Hour(b.sessionTime)
                return timeA < timeB ? -1 : 1
              })
              .map((session) => (
                <li key={session.id}>
                  <SessionCard
                    speakers={session.speakers}
                    speakerAvatars={session.speakerAvatars}
                    sessionTitle={session.sessionTitle}
                    sessionDesc={session.sessionDesc}
                    sessionTime={session.sessionTime}
                    sessionRoom={session.sessionRoom}
                  />
                </li>
              ))}
          </ul>
        ) : (
          <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
            <p>
              We are currently looking for speakers and will update the list of
              sessions once we have more information. If you are interested in
              speaking, sign up with the link below.
            </p>
            <a
              href="https://www.papercall.io/midevfest2025"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-400 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
              rel="noreferrer"
            >
              {' '}
              APPLY TO SPEAK
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

SessionsSection.propTypes = {
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      session: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        track: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  year: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.string),
  defaultExpanded: PropTypes.bool,
}

export default SessionsSection
