import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useState } from 'react'
import {
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoLinkOutline,
  IoLogoTwitter,
} from 'react-icons/io5'
import { FaInstagram, FaMastodon } from 'react-icons/fa6'

import colors from 'tailwindcss/colors'
import { SpeakerContext } from './SpeakerContext'

// Convert Tailwind hex to rgba for gradients/patterns (Tailwind v3.4 default palette)
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

// Track themes: Tailwind CSS 3.4 standard colors via name-shade (e.g. sky-400, violet-950)
const TRACK_THEMES = {
  default: {
    gradient: `linear-gradient(135deg, ${colors.sky[900]} 0%, ${colors.sky[800]} 48%, ${colors.sky[950]} 100%)`,
    pattern: `radial-gradient(circle at 22% 18%, ${hexToRgba(colors.sky[400], 0.32)} 0, ${hexToRgba(colors.sky[400], 0.08)} 36%, transparent 62%), radial-gradient(circle at 78% 22%, ${hexToRgba(colors.sky[500], 0.28)} 0, ${hexToRgba(colors.sky[500], 0.08)} 35%, transparent 64%)`,
    fallbackColor: colors.sky[950],
    badgeBorder: hexToRgba(colors.sky[300], 0.55),
    badgeText: colors.white,
    focusColor: colors.sky[700],
    focusRingOffset: hexToRgba(colors.sky[950], 0.6),
  },
  'Build with AI': {
    gradient: `linear-gradient(135deg, ${colors.violet[600]} 0%, ${colors.violet[800]} 52%, ${colors.violet[950]} 100%)`,
    pattern: `radial-gradient(circle at 24% 20%, ${hexToRgba(colors.violet[300], 0.38)} 0, ${hexToRgba(colors.violet[300], 0.12)} 35%, transparent 60%), radial-gradient(circle at 78% 18%, ${hexToRgba(colors.pink[400], 0.32)} 0, ${hexToRgba(colors.pink[400], 0.1)} 38%, transparent 65%)`,
    fallbackColor: colors.violet[950],
    badgeBorder: hexToRgba(colors.violet[300], 0.6),
    badgeText: colors.white,
    focusColor: colors.violet[700],
    focusRingOffset: hexToRgba(colors.violet[900], 0.65),
  },
  Innovation: {
    gradient: `linear-gradient(135deg, ${colors.amber[500]} 0%, ${colors.amber[600]} 40%, ${colors.amber[900]} 70%, ${colors.amber[950]} 100%)`,
    pattern: `radial-gradient(circle at 26% 22%, ${hexToRgba(colors.amber[200], 0.52)} 0, ${hexToRgba(colors.amber[200], 0.16)} 34%, transparent 58%), radial-gradient(circle at 80% 20%, ${hexToRgba(colors.amber[300], 0.4)} 0, ${hexToRgba(colors.amber[300], 0.12)} 36%, transparent 64%)`,
    fallbackColor: colors.amber[950],
    badgeBorder: hexToRgba(colors.amber[200], 0.6),
    badgeText: colors.white,
    focusColor: colors.amber[700],
    focusRingOffset: hexToRgba(colors.amber[800], 0.55),
  },
  'Tech+Design': {
    gradient: `linear-gradient(135deg, ${colors.pink[500]} 0%, ${colors.pink[600]} 46%, ${colors.pink[800]} 80%, ${colors.pink[950]} 100%)`,
    pattern: `radial-gradient(circle at 24% 24%, ${hexToRgba(colors.pink[300], 0.42)} 0, ${hexToRgba(colors.pink[300], 0.14)} 32%, transparent 58%), radial-gradient(circle at 78% 16%, ${hexToRgba(colors.pink[400], 0.38)} 0, ${hexToRgba(colors.pink[400], 0.14)} 36%, transparent 64%)`,
    fallbackColor: colors.pink[950],
    badgeBorder: hexToRgba(colors.pink[300], 0.55),
    badgeText: colors.white,
    focusColor: colors.pink[700],
    focusRingOffset: hexToRgba(colors.pink[800], 0.55),
  },
  Workshops: {
    gradient: `linear-gradient(135deg, ${colors.orange[500]} 0%, ${colors.orange[600]} 48%, ${colors.orange[700]} 78%, ${colors.orange[950]} 100%)`,
    pattern: `radial-gradient(circle at 24% 22%, ${hexToRgba(colors.orange[300], 0.48)} 0, ${hexToRgba(colors.orange[300], 0.16)} 30%, transparent 58%), radial-gradient(circle at 78% 20%, ${hexToRgba(colors.orange[400], 0.36)} 0, ${hexToRgba(colors.orange[400], 0.12)} 34%, transparent 62%)`,
    fallbackColor: colors.orange[950],
    badgeBorder: hexToRgba(colors.orange[300], 0.58),
    badgeText: colors.white,
    focusColor: colors.orange[700],
    focusRingOffset: hexToRgba(colors.orange[900], 0.6),
  },
  'Level Up': {
    gradient: `linear-gradient(135deg, ${colors.green[500]} 0%, ${colors.green[600]} 48%, ${colors.green[700]} 74%, ${colors.green[950]} 100%)`,
    pattern: `radial-gradient(circle at 18% 20%, ${hexToRgba(colors.green[400], 0.42)} 0, ${hexToRgba(colors.green[400], 0.14)} 33%, transparent 58%), radial-gradient(circle at 80% 24%, ${hexToRgba(colors.green[300], 0.36)} 0, ${hexToRgba(colors.green[300], 0.12)} 35%, transparent 62%)`,
    fallbackColor: colors.green[950],
    badgeBorder: hexToRgba(colors.green[200], 0.5),
    badgeText: colors.white,
    focusColor: colors.green[700],
    focusRingOffset: hexToRgba(colors.green[950], 0.6),
  },
  Leadership: {
    gradient: `linear-gradient(135deg, ${colors.sky[400]} 0%, ${colors.sky[500]} 45%, ${colors.sky[700]} 78%, ${colors.sky[950]} 100%)`,
    pattern: `radial-gradient(circle at 22% 20%, ${hexToRgba(colors.sky[300], 0.46)} 0, ${hexToRgba(colors.sky[300], 0.14)} 32%, transparent 58%), radial-gradient(circle at 80% 22%, ${hexToRgba(colors.sky[400], 0.34)} 0, ${hexToRgba(colors.sky[400], 0.12)} 36%, transparent 64%)`,
    fallbackColor: colors.sky[950],
    badgeBorder: hexToRgba(colors.sky[200], 0.55),
    badgeText: colors.white,
    focusColor: colors.sky[700],
    focusRingOffset: hexToRgba(colors.sky[950], 0.6),
  },
}

function SpeakerDetails({
  avatar,
  bio,
  id,
  instagram,
  isGDE,
  isWTM,
  mastodon,
  name,
  onClose,
  organization,
  position,
  sessionTitle,
  sessionDescription,
  tags,
  track,
  twitter,
  url,
}) {
  const {
    speakerID,
    setSpeakerID,
    numSpeakers,
    uniqueSpeakersSortedByFirstName,
  } = useContext(SpeakerContext)

  const [showFullDescription, setShowFullDescription] = useState(false)

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

  const trackTheme = TRACK_THEMES[track] ?? TRACK_THEMES.default

  const heroStyle = {
    backgroundImage: [trackTheme.pattern, trackTheme.gradient].join(', '),
    backgroundColor: trackTheme.fallbackColor,
    backgroundBlendMode: 'overlay, normal',
    backgroundSize: 'auto, cover',
    backgroundRepeat: 'repeat, no-repeat',
    backgroundPosition: 'center, center',
  }

  const trackBadgeStyle = {
    borderColor: trackTheme.badgeBorder,
    color: trackTheme.badgeText,
  }

  const interactiveFocusVars = {
    '--tw-ring-color': trackTheme.focusColor,
    '--tw-ring-offset-color': trackTheme.focusRingOffset,
  }

  const goToPreviousSpeaker = useCallback(() => {
    const currentIndex = uniqueSpeakersSortedByFirstName.findIndex(
      (speaker) => speaker.id === speakerID
    )

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

  // Truncate description for preview
  const descriptionPreviewLength = 200
  const needsTruncation =
    sessionDescription && sessionDescription.length > descriptionPreviewLength
  const descriptionPreview = needsTruncation
    ? sessionDescription.slice(0, descriptionPreviewLength) + '...'
    : sessionDescription

  return (
    <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
      <div className="relative px-8 py-12 text-white" style={heroStyle}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent"></div>

        <div className="absolute -right-12 -top-12 size-24 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-6 -left-6 size-16 rounded-full bg-white/5"></div>

        <button
          onClick={onClose ? onClose : () => {}}
          className="absolute right-6 top-6 z-20 rounded-full bg-black/30 p-2 text-white transition-all hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={interactiveFocusVars}
          aria-label="Close speaker details"
        >
          <IoClose className="size-6" aria-hidden="true" />
        </button>

        <div className="relative z-20 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="relative size-64 rounded-full bg-black/30 p-3">
              <img
                src={
                  avatar
                    ? avatar
                    : `https://placehold.co/600x400/0F9D58/FFFFFF?text=${
                        name.charAt(0) + name.charAt(name.length - 1)
                      }`
                }
                alt={`${name} portrait`}
                className="relative z-10 size-full rounded-full object-cover"
              />
            </div>
          </div>

          <h2
            id={`speaker-modal-title-${id}`}
            className="mb-3 text-3xl font-bold"
          >
            {name}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide">
            {track && (
              <span
                className="inline-flex items-center rounded-full border bg-black/30 px-3 py-1"
                style={trackBadgeStyle}
              >
                {track}
              </span>
            )}
            {isGDE && (
              <span className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-3 py-1 text-white">
                Google Developer Expert
              </span>
            )}
            {isWTM && (
              <span className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-3 py-1 text-white">
                Women Techmakers Ambassador
              </span>
            )}
          </div>
          {position && (
            <p className="mb-2 mt-4 text-lg font-medium text-white">
              {position}
            </p>
          )}
          {organization && <p className="mt-2 text-white">{organization}</p>}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {instagram && (
              <a
                href={`${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name}'s Instagram profile - opens in new tab`}
                style={interactiveFocusVars}
              >
                <FaInstagram className="mr-2 size-4" aria-hidden="true" />@
                {instagram}
              </a>
            )}
            {mastodon && (
              <a
                href={`${mastodon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name}'s Mastodon profile - opens in new tab`}
                style={interactiveFocusVars}
              >
                <FaMastodon className="mr-2 size-4" aria-hidden="true" />@
                {mastodon}
              </a>
            )}
            {twitter && (
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name}'s Twitter profile - opens in new tab`}
                style={interactiveFocusVars}
              >
                <IoLogoTwitter className="mr-2 size-4" aria-hidden="true" />@
                {twitter}
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
                    className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${name}'s website ${domain} - opens in new tab`}
                    style={interactiveFocusVars}
                  >
                    <IoLinkOutline className="mr-2 size-4" aria-hidden="true" />
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
            <h2
              id={`speaker-modal-about-${id}`}
              className="mb-4 text-2xl font-bold text-gray-900"
            >
              About {name.split(' ')[0]}
            </h2>

            {bio && (
              <p
                className="mb-6 whitespace-pre-line text-left leading-relaxed text-gray-700"
                style={{ maxWidth: '65ch', lineHeight: '1.6' }}
              >
                {bio}
              </p>
            )}

            {tags && tags.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="rounded-full border-2 px-3 py-1.5 text-xs font-semibold shadow-sm"
                      style={{
                        backgroundColor: `${trackTheme.focusColor}15`,
                        borderColor: trackTheme.focusColor,
                        color: trackTheme.focusColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div
              className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 p-6"
              style={{ border: `3px solid ${trackTheme.focusColor}` }}
            >
              <h2 className="mb-4 text-xl font-bold text-gray-900">Session</h2>

              {sessionTitle && (
                <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
                  <h3 className="text-base font-semibold leading-relaxed text-gray-900">
                    {sessionTitle}
                  </h3>
                </div>
              )}

              {sessionDescription && (
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-500">
                    Description
                  </h3>
                  <p
                    className="whitespace-pre-wrap text-left text-sm text-gray-700"
                    style={{ maxWidth: '65ch', lineHeight: '1.6' }}
                  >
                    {showFullDescription
                      ? sessionDescription
                      : descriptionPreview}
                  </p>
                  {needsTruncation && (
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className="mt-3 text-sm font-bold text-sky-700 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        ...interactiveFocusVars,
                      }}
                      aria-expanded={showFullDescription}
                    >
                      {showFullDescription
                        ? 'Show less'
                        : 'Read full description'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-800">
              ←
            </kbd>
            <span className="text-gray-800">Previous</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-800">
              →
            </kbd>
            <span className="text-gray-800">Next</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-800">
              Esc
            </kbd>
            <span className="text-gray-800">Close</span>
          </div>
        </div>
      </div>

      <button
        onClick={goToPreviousSpeaker}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Previous speaker"
      >
        <IoChevronBack className="size-6 text-gray-600" aria-hidden="true" />
      </button>

      <button
        onClick={goToNextSpeaker}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Next speaker"
      >
        <IoChevronForward className="size-6 text-gray-600" aria-hidden="true" />
      </button>

      <div className="sticky bottom-4 left-1/2 z-10 mx-auto w-fit -translate-x-1/2 rounded-full bg-gray-900/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
        {displayPosition} of {numSpeakers}
      </div>
    </div>
  )
}

SpeakerDetails.propTypes = {
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string,
  id: PropTypes.number.isRequired,
  instagram: PropTypes.string,
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  sessionDescription: PropTypes.string,
  track: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  twitter: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerDetails
