import { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import SpeakersLogo from '@/assets/images/icn-speakers.png'
import SpeakerCard from '@/components/speakers/SpeakerCard'

import { SpeakerContext } from '@/components/speakers/SpeakerContext'

import { DIRECTION } from '@/constants/directions'
import { IoChevronDown } from 'react-icons/io5'

const SpeakersContent = ({ year, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [direction, setDirection] = useState(
    defaultExpanded === true ? DIRECTION.TOP : DIRECTION.BOTTOM
  )

  const { uniqueSpeakersSortedByFirstName } = useContext(SpeakerContext)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    setDirection(isExpanded ? DIRECTION.BOTTOM : DIRECTION.TOP)
  }

  return (
    <section
      id="speakers"
      className="flex flex-col justify-center border-b border-primary bg-sky-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-between pt-0">
        <button
          aria-label={
            isExpanded ? `Collapse ${year} Speakers` : `Expand ${year} Speakers`
          }
          onClick={toggleExpanded}
          className="flex cursor-pointer items-center text-black transition-colors hover:text-gray-600"
        >
          <IoChevronDown
            className={`h-10 w-10 shrink-0 text-sky-900 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 ${
              direction === DIRECTION.TOP && '-scale-y-100'
            } transition-transform duration-100 ease-linear`}
          />
        </button>
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          {year} Speakers
        </h2>
        <img
          src={SpeakersLogo}
          alt="Speakers"
          className="h-8 sm:h-10 md:h-12 lg:h-12"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {uniqueSpeakersSortedByFirstName &&
        uniqueSpeakersSortedByFirstName.length ? (
          <div className="my-16 grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {uniqueSpeakersSortedByFirstName.map((speaker, index) => (
              <div
                className="flex justify-center"
                key={speaker.id || `speaker-${index}`}
              >
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
              once we have more information. If you are interested in speaking,
              sign up with the link below.
            </p>
            <a
              href="https://www.papercall.io/midevfest2025"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-400 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
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

SpeakersContent.propTypes = {
  year: PropTypes.number.isRequired,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersContent
