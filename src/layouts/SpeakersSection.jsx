import { useState } from 'react'

import SpeakersLogo from '@/assets/images/speakers-logo.png'
import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'
import { SpeakersData } from '@/data/speakers'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

function SpeakersSection() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [direction, setDirection] = useState(DIRECTION.BOTTOM)

  const uniqueSpeakers = SpeakersData.filter(
    (speaker, index, self) =>
      index === self.findIndex((s) => s.email === speaker.email)
  )

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.TOP : DIRECTION.BOTTOM)
  }

  return (
    <SpeakerProvider>
      <section
        id="speakers"
        className="flex flex-col justify-center px-8 sm:px-10 md:px-14 lg:px-16"
      >
        <div className="flex w-full justify-between pt-6 sm:pt-8 md:pt-12 lg:pt-14">
          <header className="font-russell text-4xl md:text-5xl lg:text-6xl">
            Speakers
          </header>
          <img
            src={SpeakersLogo}
            alt="Speakers"
            className="h-8 md:h-10 lg:h-12"
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
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-32 grid grid-cols-1 items-stretch gap-20 sm:grid-cols-2 lg:mt-36 lg:grid-cols-3 xl:grid-cols-4">
            {uniqueSpeakers.map((speaker, index) => (
              <div key={index}>
                <SpeakerCard
                  id={speaker.id}
                  name={speaker.name}
                  twitter={speaker.twitter}
                  avatar={speaker.avatar}
                  organization={speaker.organization}
                  position={speaker.position}
                  bio={speaker.bio}
                  sessionTitle={speaker.session.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SpeakerProvider>
  )
}

export default SpeakersSection
