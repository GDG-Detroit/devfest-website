import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import HackathonInfo from '@/components/sessions/HackathonInfo'
import NoSessionsAvailable from '@/components/sessions/NoSessionsAvailable'
import Schedule from '@/components/sessions/Schedule'
import SessionCard from '@/components/sessions/SessionCard'
import VenueMaps from '@/components/sessions/VenueMaps'
import SessionsLogo from '@/assets/images/icn-sessions.png'

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
  Leadership:
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
  const navRef = useRef(null)
  const buttonRefs = useRef([])

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
        sessionDuration: speaker.session.sessionDuration || 1,
      })
    }
  })

  // Get sessions for current track
  const currentTrackSessions = combinedSpeakerData.filter((session) => {
    // Handle the Misc/Miscellaneous mapping in eventData.js
    const normalizeSessionTrack =
      session.track === 'Miscellaneous' ? 'Misc' : session.track
    const normalizeCurrentSession =
      currentSession === 'Miscellaneous' ? 'Misc' : currentSession

    return normalizeSessionTrack === normalizeCurrentSession
  })

  const hasSessionsForTrack = currentTrackSessions.length > 0

  // Scroll focused button into view for keyboard navigation
  useEffect(() => {
    if (buttonRefs.current[activeTab] && navRef.current) {
      const button = buttonRefs.current[activeTab]
      const nav = navRef.current
      const buttonRect = button.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()

      // Check if button is outside visible area
      if (buttonRect.left < navRect.left) {
        // Scroll left to show button
        nav.scrollTo({
          left: nav.scrollLeft + (buttonRect.left - navRect.left) - 16,
          behavior: 'smooth',
        })
      } else if (buttonRect.right > navRect.right) {
        // Scroll right to show button
        nav.scrollTo({
          left: nav.scrollLeft + (buttonRect.right - navRect.right) + 16,
          behavior: 'smooth',
        })
      }
    }
  }, [activeTab])

  // Handle keyboard navigation for horizontal scrolling
  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      const nextIndex =
        event.key === 'ArrowLeft'
          ? Math.max(0, index - 1)
          : Math.min(tabs.length - 1, index + 1)
      setActiveTab(nextIndex)
      buttonRefs.current[nextIndex]?.focus()
    }
  }

  const renderNoSessionsOrSpeakersMessage = () => (
    <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
      <p>
        We are currently looking for speakers and will update the list of
        sessions once we have more information. If you are interested in
        speaking, sign up with the link below.
      </p>
      <a
        href="https://www.papercall.io/midevfest2025"
        target="_blank"
        aria-label="Apply to speak at Michigan DevFest 2025 - opens in new tab"
        className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        rel="noreferrer"
      >
        APPLY TO SPEAK
      </a>
    </div>
  )

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

      <div
        className={`flex w-full flex-col overflow-hidden transition-all duration-500 ease-in-out md:overflow-x-visible ${
          isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          ref={navRef}
          id="sessions-nav"
          aria-label="Session track navigation"
          className={`scrollbar-visible mt-4 flex w-full flex-nowrap items-center justify-start gap-1 overflow-x-auto overflow-y-visible rounded-md bg-black py-3 pe-4 ps-4 md:px-6 ${
            isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {tabs.map((tab, index) => (
            <React.Fragment key={tab}>
              {index !== 0 && ![activeTab, activeTab + 1].includes(index) && (
                <div className="hidden h-5 w-0 shrink-0 bg-primary-400 sm:w-0.5 md:mx-2 md:block md:w-1 lg:mx-3" />
              )}

              <button
                key={tab}
                ref={(el) => {
                  buttonRefs.current[index] = el
                }}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`session-panel-${index}`}
                id={`session-tab-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={`relative shrink-0 whitespace-nowrap rounded-md p-2 text-sm font-black uppercase !leading-5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-black md:min-w-20 md:px-3 md:py-2 lg:min-w-36 lg:px-4 lg:text-lg ${
                  index === 0 ? 'md:ml-14' : ''
                } ${
                  activeTab === index
                    ? 'bg-primary-400 text-black after:absolute after:-bottom-3 after:left-1/2 after:block after:size-0 after:-translate-x-1/2 after:border-x-[12px] after:border-t-[12px] after:border-primary-400 after:border-x-transparent'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {tab === 'Miscellaneous' ? (
                  <>
                    <span className="inline max-xs:hidden">Miscellaneous</span>
                    <span className="hidden max-xs:inline">Misc</span>
                  </>
                ) : tab === 'Hackathon' ? (
                  <>Hackathon</>
                ) : tab === 'Tech+Design' ? (
                  <>Tech+Design</>
                ) : tab === 'Level Up' ? (
                  <>Level Up</>
                ) : tab === 'Leadership' ? (
                  <>Leadership</>
                ) : tab === 'Build with AI' ? (
                  <>Build with AI</>
                ) : tab === 'Workshops' ? (
                  <>Workshops</>
                ) : (
                  tab
                )}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <div
          id={`session-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`session-tab-${activeTab}`}
          className={`flex w-full items-start px-[2.5%] md:px-[5%] ${
            isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          } ${
            currentTrackSessions.length > 0 ? 'justify-start' : 'justify-center'
          }`}
        >
          {currentSession === 'Schedule' ? (
            <Schedule />
          ) : currentSession === 'Map' ? (
            <VenueMaps />
          ) : currentSession === 'Hackathon' ? (
            <HackathonInfo />
          ) : currentTrackSessions.length > 0 ? (
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
                        sessionDuration={session.sessionDuration}
                      />
                    </li>
                  ))
              ) : (
                <NoSessionsAvailable currentSession={currentSession} />
              )}
            </ul>
          ) : (
            renderNoSessionsOrSpeakersMessage()
          )}
        </div>
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
