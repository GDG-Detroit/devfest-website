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

  const renderSpeakerHeader = (
    <div className="flex w-full justify-between pt-0">
      <button
        aria-label={
          isExpanded ? `Collapse ${year} Speakers` : `Expand ${year} Speakers`
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
      <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
        {year} Speakers
      </h2>
      <img
        src={SpeakersLogo}
        alt=""
        className="h-8 sm:h-10 md:h-12 lg:h-12"
        width={96}
        height={45}
        loading="lazy"
      />
    </div>
  )

  const renderSpeakerDescription = (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto mt-6 max-w-3xl text-left">
        <p className="text-base text-gray-700 md:text-lg">
          Join us for engaging and inspiring talks from industry leaders,
          innovators, and experts who are shaping the future of technology. Our
          speakers bring real-world experience and cutting-edge insights across
          AI, cloud, design, development, robotics, startups, and more.
        </p>
      </div>
    </div>
  )

  const renderSpeakers = (
    <div className="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5">
      {uniqueSpeakersSortedByFirstName.map((speaker, index) => (
        <SpeakerCard
          key={speaker.id || `speaker-${index}`}
          id={speaker.id}
          name={speaker.name}
          twitter={speaker.twitter}
          linkedin={speaker.linkedIn}
          avatar={speaker.avatar}
          organization={speaker.organization}
          position={speaker.position}
          bio={speaker.bio}
          sessionTitle={speaker.session.title}
          track={speaker.session.track}
          isGDE={speaker.isGDE}
          isWTM={speaker.isWTM}
          url={speaker.url}
          mastodon={speaker.mastodon}
        />
      ))}
    </div>
  )

  const noSpeakersMessage = (
    <div className="col-span-1 my-4 flex flex-col items-center justify-center space-y-8 text-center text-lg leading-relaxed">
      <p>
        We are currently looking for speakers and will update the list once we
        have more information. If you are interested in speaking, sign up with
        the link below.
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
  )
  return (
    <section
      id="speakers"
      className="flex flex-col justify-center border-b border-primary bg-sky-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      {renderSpeakerHeader}
      {renderSpeakerDescription}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {uniqueSpeakersSortedByFirstName &&
        uniqueSpeakersSortedByFirstName.length
          ? renderSpeakers
          : noSpeakersMessage}
      </div>
    </section>
  )
}

SpeakersContent.propTypes = {
  year: PropTypes.number.isRequired,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersContent
