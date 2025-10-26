import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect } from 'react'
import {
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoLinkOutline,
  IoLogoTwitter,
} from 'react-icons/io5'
import { FaMastodon } from 'react-icons/fa6'

import { SpeakerContext } from './SpeakerContext'

function SpeakerDetails({
  avatar,
  bio,
  id,
  mastodon,
  name,
  onClose,
  organization,
  position,
  sessionTitle,
  twitter,
  url,
}) {
  const {
    speakerID,
    setSpeakerID,
    numSpeakers,
    uniqueSpeakersSortedByFirstName,
  } = useContext(SpeakerContext)

  const validateUrl = (url) => {
    try {
      new URL(url)
      return url
    } catch {
      return null
    }
  }

  const getUrlArray = () => {
    const urlList = Array.isArray(url) ? url : [url]
    return urlList.map(validateUrl).filter(Boolean)
  }

  const urls = getUrlArray()

  const goToPreviousSpeaker = useCallback(() => {
    const currentIndex = uniqueSpeakersSortedByFirstName.findIndex(
      (speaker) => speaker.id === speakerID
    )

    // If no speaker is currently selected, default to the last speaker
    if (currentIndex === -1) {
      setSpeakerID(
        uniqueSpeakersSortedByFirstName[
          uniqueSpeakersSortedByFirstName.length - 1
        ]?.id
      )
      return
    }

    const previousIndex =
      currentIndex === 0
        ? uniqueSpeakersSortedByFirstName.length - 1
        : currentIndex - 1
    setSpeakerID(uniqueSpeakersSortedByFirstName[previousIndex].id)
  }, [uniqueSpeakersSortedByFirstName, speakerID, setSpeakerID])

  const goToNextSpeaker = useCallback(() => {
    const currentIndex = uniqueSpeakersSortedByFirstName.findIndex(
      (speaker) => speaker.id === speakerID
    )

    // If no speaker is currently selected, default to the first speaker
    if (currentIndex === -1) {
      setSpeakerID(uniqueSpeakersSortedByFirstName[0]?.id)
      return
    }

    const nextIndex =
      currentIndex === uniqueSpeakersSortedByFirstName.length - 1
        ? 0
        : currentIndex + 1
    setSpeakerID(uniqueSpeakersSortedByFirstName[nextIndex].id)
  }, [uniqueSpeakersSortedByFirstName, speakerID, setSpeakerID])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft') {
        goToPreviousSpeaker()
      } else if (event.key === 'ArrowRight') {
        goToNextSpeaker()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose, goToPreviousSpeaker, goToNextSpeaker])

  const currentIndex = uniqueSpeakersSortedByFirstName.findIndex(
    (speaker) => speaker.id === speakerID
  )
  const displayPosition = currentIndex + 1

  return (
    <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      <div className="relative bg-gradient-to-r from-sky-600 to-blue-900 px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="absolute -right-12 -top-12 size-24 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-6 -left-6 size-16 rounded-full bg-white/5"></div>

        <button
          onClick={onClose ? onClose : () => {}}
          className="absolute right-6 top-6 z-20 rounded-full bg-white/20 p-2 text-white transition-all hover:scale-110 hover:bg-white/30"
          aria-label="Close speaker details"
        >
          <IoClose className="size-6" />
        </button>

        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <div className="relative mb-6">
            <div className="size-64 rounded-full bg-white/20 p-3">
              <img
                src={
                  avatar
                    ? avatar
                    : `https://placehold.co/600x400/0F9D58/FFFFFF?text=${
                        name.charAt(0) + name.charAt(name.length - 1)
                      }`
                }
                alt={`${name} portrait`}
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>

          <h2
            id={`speaker-modal-title-${id}`}
            className="mb-3 text-3xl font-bold"
          >
            {name}
          </h2>
          {position && (
            <p className="mb-2 text-lg font-medium text-blue-100">{position}</p>
          )}
          {organization && <p className="text-blue-200">{organization}</p>}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {mastodon && (
              <a
                href={`${mastodon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
                onClick={(e) => e.stopPropagation()}
              >
                <FaMastodon className="mr-2 size-4" />@{mastodon}
              </a>
            )}
            {twitter && (
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
                onClick={(e) => e.stopPropagation()}
              >
                <IoLogoTwitter className="mr-2 size-4" />@{twitter}
              </a>
            )}
            {urls.length > 0 &&
              urls.map((link, index) => {
                const domain = new URL(link).hostname.replace('www.', '')
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IoLinkOutline className="mr-2 size-4" />
                    {domain}
                  </a>
                )
              })}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {name && (
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                About {name.split(' ')[0]}
              </h3>
            )}
            <div className="max-h-64 overflow-y-auto pr-4">
              {bio && (
                <p
                  id={`speaker-modal-bio-${id}`}
                  className="leading-relaxed text-gray-700"
                >
                  {bio}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900">Session</h3>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                {sessionTitle && (
                  <p className="text-sm font-semibold leading-relaxed text-gray-900">
                    {sessionTitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              ←
            </kbd>
            <span>Previous</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              →
            </kbd>
            <span>Next</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              Esc
            </kbd>
            <span>Close</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <button
          onClick={goToPreviousSpeaker}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Previous speaker"
        >
          <IoChevronBack className="size-6 text-gray-600" />
        </button>

        <button
          onClick={goToNextSpeaker}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Next speaker"
        >
          <IoChevronForward className="size-6 text-gray-600" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gray-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        {displayPosition} of {numSpeakers}
      </div>
    </div>
  )
}

SpeakerDetails.propTypes = {
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string,
  id: PropTypes.number.isRequired,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerDetails
