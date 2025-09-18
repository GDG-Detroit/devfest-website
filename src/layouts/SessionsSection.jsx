import React, { useState } from 'react'

import SessionsLogo from '@/assets/images/sessions-logo.png'
import SessionCard from '@/components/sessions/SessionCard'
import { SpeakersData } from '@/data/speakers'

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

// TODO: Abstract this logic into a more reusable component
// This will allow us to reset the years, sessions, etc... more easily
function SessionsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']

  let combinedSpeakerData = []

  SpeakersData.forEach((speaker) => {
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
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          2025 Sessions
        </header>
        <img
          src={SessionsLogo}
          alt="Sessions"
          className="h-12 md:h-14 lg:h-16"
        />
      </div>
      <div className="mt-4 inline-flex w-5/6 items-center justify-between rounded-md bg-black md:w-auto">
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
              {tab}
              {activeTab === index && (
                <div className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[12px] border-t-[12px] border-primary-400 border-x-transparent"></div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
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
    </section>
  )
}

export default SessionsSection
