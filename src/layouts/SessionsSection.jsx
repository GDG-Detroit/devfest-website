import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SessionsLogo from '@/assets/images/icn-sessions.png'
import NoSessionsAvailable from '@/components/sessions/NoSessionsAvailable'
import SessionCard from '@/components/sessions/SessionCard'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

const convertTo24Hour = (time) => {
  if (!time) return ''

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

// Track descriptions
const trackDescriptions = {
  'Build with AI':
    'Explore cutting-edge AI development, from machine learning to generative models. Learn how to build intelligent applications that push the boundaries of innovation.',
  Hackathon:
    'Put your skills to the test in our collaborative hackathon. Build innovative solutions, network with fellow developers, and compete for amazing prizes.',
  Innovation:
    'Discover groundbreaking ideas and emerging technologies that are shaping the future. Join us for sessions that challenge conventional thinking and inspire creativity.',
  'Level Up':
    'Advance your career and personal growth. From mentorship to leadership, explore sessions that help you level up professionally and personally in tech.',
  Startup:
    'Discover insights from founders and entrepreneurs building the next generation of tech companies. Learn about startup strategies, funding, product-market fit, and scaling from idea to execution.',
  'Tech+Design':
    'Where technology meets user experience. Dive into sessions covering frontend development, design systems, accessibility, and creating delightful user interfaces.',
  Workshops:
    'Get hands-on with interactive workshops. Build, code, and create alongside experts in intimate learning sessions designed for practical skill development.',
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
  const currentSession = tabs[activeTab]

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

  // Get sessions for current track
  const currentTrackSessions = combinedSpeakerData.filter(
    (session) => session.track === currentSession
  )

  const hasSessionsForTrack = currentTrackSessions.length > 0

  return (
    <section
      id="sessions"
      className="flex flex-col items-center justify-start bg-primary-100 p-4 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-between pt-0">
        <button
          aria-label={
            isExpanded ? `Collapse ${year} Sessions` : `Expand ${year} Sessions`
          }
          onClick={toggleExpanded}
          className="flex cursor-pointer items-center text-black transition-colors hover:text-gray-600"
        >
          <IoChevronDown
            className={`size-10 shrink-0 text-sky-900 sm:size-14 md:size-16 lg:size-20 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-100 ease-linear`}
          />
        </button>
        <h2 className="text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          {year} Sessions
        </h2>
        <img
          src={SessionsLogo}
          alt=""
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          width={82}
          height={69}
          loading="lazy"
        />
      </div>

      {/* Track Description */}
      {isExpanded && currentSession && trackDescriptions[currentSession] && (
        <div className="mt-6 w-full px-[10%] md:px-[25%]">
          <p className="text-left text-base leading-relaxed text-gray-700 md:text-lg">
            {trackDescriptions[currentSession]}
          </p>
        </div>
      )}

      <nav
        id="sessions-nav"
        className={`mt-4 flex w-full flex-wrap items-center justify-center gap-1 rounded-md bg-black md:inline-flex md:flex-nowrap ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Session track navigation"
      >
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {index !== 0 && ![activeTab, activeTab + 1].includes(index) && (
              <div className="hidden h-5 w-0 bg-primary-400 sm:w-0.5 md:block md:w-1" />
            )}

            <button
              key={tab}
              className={`relative whitespace-normal rounded-md px-0.5 py-2 text-sm font-black uppercase transition-colors duration-300 focus:outline-none md:w-20 lg:w-36 lg:text-lg ${
                tab === 'Innovation' ? 'mx-1 py-5 md:w-24 lg:w-40' : ''
              } ${tab === 'Startup' ? 'py-5' : ''} ${
                activeTab === index
                  ? 'bg-primary-400 text-black'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab === 'Miscellaneous' ? (
                <>
                  <span className="inline max-xs:hidden">Miscellaneous</span>
                  <span className="hidden max-xs:inline">Misc</span>
                </>
              ) : tab === 'Hackathon' ? (
                <>
                  Hack-
                  <br />
                  athon
                </>
              ) : tab === 'Tech+Design' ? (
                <>
                  Tech+
                  <br />
                  Design
                </>
              ) : tab === 'Level Up' ? (
                <>
                  Level
                  <br />
                  Up
                </>
              ) : tab === 'Build with AI' ? (
                <>
                  Build
                  <br />
                  with AI
                </>
              ) : tab === 'Workshops' ? (
                <>
                  Work-
                  <br />
                  shops
                </>
              ) : (
                tab
              )}
              {activeTab === index && (
                <div className="absolute -bottom-3 left-1/2 hidden size-0 -translate-x-1/2 border-x-[12px] border-t-[12px] border-primary-400 border-x-transparent md:block"></div>
              )}
            </button>
          </React.Fragment>
        ))}
      </nav>

      <div
        className={`flex min-h-[800px] w-full items-start justify-start px-[2.5%] md:px-[5%] ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {combinedSpeakerData && combinedSpeakerData.length ? (
          <ul className="grid w-full grid-cols-1 gap-10 py-7">
            {hasSessionsForTrack ? (
              currentTrackSessions
                .sort((a, b) => {
                  const timeA = convertTo24Hour(a.sessionTime)
                  const timeB = convertTo24Hour(b.sessionTime)
                  return timeA < timeB ? -1 : 1
                })
                .map((session) => (
                  <li key={session.id} className="w-full">
                    <SessionCard
                      speakers={session.speakers}
                      speakerAvatars={session.speakerAvatars}
                      sessionTitle={session.sessionTitle}
                      sessionDesc={session.sessionDesc}
                      sessionTime={session.sessionTime}
                      sessionRoom={session.sessionRoom}
                    />
                  </li>
                ))
            ) : (
              <NoSessionsAvailable currentSession={currentSession} />
            )}
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
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
              rel="noreferrer"
            >
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
