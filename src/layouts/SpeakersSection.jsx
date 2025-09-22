import { useState } from 'react'
import PropTypes from 'prop-types'

import SpeakersLogo from '@/assets/images/speakers-logo.png'
import SpeakerCard from '@/components/speakers/SpeakerCard'
import { SpeakerProvider } from '@/components/speakers/SpeakerContext'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

const SpeakersSection = ({
  speakersData = [],
  year = new Date().getFullYear(),
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [direction, setDirection] = useState(
    defaultExpanded === true ? DIRECTION.TOP : DIRECTION.BOTTOM
  )

  const uniqueSpeakers = speakersData.filter(
    (speaker, index, self) =>
      index === self.findIndex((s) => s.email === speaker.email)
  )

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.BOTTOM : DIRECTION.TOP)
  }

  return (
    <SpeakerProvider>
      <section
        id="speakers"
        className="flex flex-col justify-center border-b border-primary px-8 sm:px-10 md:px-14 lg:px-16"
      >
        <div className="flex w-full justify-between pt-6 sm:pt-8 md:pt-12 lg:pt-14">
          <header className="font-russell text-4xl md:text-5xl lg:text-6xl">
            {year} Speakers
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
          {uniqueSpeakers && uniqueSpeakers.length ? (
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
          ) : (
            <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
              <p>
                We are currently looking for speakers and will update the list
                once we have more information. If you are interested in
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
    </SpeakerProvider>
  )
}

SpeakersSection.propTypes = {
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
  logo: PropTypes.string,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersSection
