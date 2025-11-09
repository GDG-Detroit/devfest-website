import PropTypes from 'prop-types'
import { useCallback, useContext, useEffect, useMemo } from 'react'
import {
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoLinkOutline,
  IoLogoTwitter,
} from 'react-icons/io5'
import { FaMastodon } from 'react-icons/fa6'

import { SpeakerContext } from './SpeakerContext'

const TRACK_THEMES = {
  default: {
    gradient: 'linear-gradient(135deg, #0f4c81 0%, #1d3557 48%, #0b132b 100%)',
    pattern:
      'radial-gradient(circle at 22% 18%, rgba(148,197,248,0.32) 0, rgba(148,197,248,0.08) 36%, transparent 62%), radial-gradient(circle at 78% 22%, rgba(59,130,246,0.28) 0, rgba(59,130,246,0.08) 35%, transparent 64%)',
    fallbackColor: '#0b132b',
    badgeBorder: 'rgba(147,197,253,0.55)',
    badgeText: '#ffffff',
    focusColor: '#60a5fa',
    focusRingOffset: 'rgba(15, 23, 42, 0.6)',
  },
  'Build with AI': {
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 52%, #1e1b4b 100%)',
    pattern:
      'radial-gradient(circle at 24% 20%, rgba(192,132,252,0.38) 0, rgba(192,132,252,0.12) 35%, transparent 60%), radial-gradient(circle at 78% 18%, rgba(244,114,182,0.32) 0, rgba(244,114,182,0.1) 38%, transparent 65%)',
    fallbackColor: '#1e1b4b',
    badgeBorder: 'rgba(216,180,254,0.6)',
    badgeText: '#ffffff',
    focusColor: '#c084fc',
    focusRingOffset: 'rgba(76, 29, 149, 0.65)',
  },
  Innovation: {
    gradient:
      'linear-gradient(135deg, #ffcb05 0%, #efb403 40%, #a46204 70%, #422006 100%)',
    pattern:
      'radial-gradient(circle at 26% 22%, rgba(254,240,138,0.52) 0, rgba(254,240,138,0.16) 34%, transparent 58%), radial-gradient(circle at 80% 20%, rgba(253,224,71,0.4) 0, rgba(253,224,71,0.12) 36%, transparent 64%)',
    fallbackColor: '#422006',
    badgeBorder: 'rgba(253,230,138,0.6)',
    badgeText: '#ffffff',
    focusColor: '#fcd34d',
    focusRingOffset: 'rgba(161, 98, 4, 0.55)',
  },
  'Tech+Design': {
    gradient:
      'linear-gradient(135deg, #fb7185 0%, #ec4899 46%, #9d174d 80%, #3b0764 100%)',
    pattern:
      'radial-gradient(circle at 24% 24%, rgba(248,113,113,0.42) 0, rgba(248,113,113,0.14) 32%, transparent 58%), radial-gradient(circle at 78% 16%, rgba(244,114,182,0.38) 0, rgba(244,114,182,0.14) 36%, transparent 64%)',
    fallbackColor: '#3b0764',
    badgeBorder: 'rgba(251,113,133,0.55)',
    badgeText: '#ffffff',
    focusColor: '#f472b6',
    focusRingOffset: 'rgba(109, 40, 91, 0.55)',
  },
  Workshops: {
    gradient:
      'linear-gradient(135deg, #f97316 0%, #ea580c 48%, #c2410c 78%, #431407 100%)',
    pattern:
      'radial-gradient(circle at 24% 22%, rgba(254,215,170,0.48) 0, rgba(254,215,170,0.16) 30%, transparent 58%), radial-gradient(circle at 78% 20%, rgba(249,115,22,0.36) 0, rgba(249,115,22,0.12) 34%, transparent 62%)',
    fallbackColor: '#431407',
    badgeBorder: 'rgba(254,215,170,0.58)',
    badgeText: '#ffffff',
    focusColor: '#fb923c',
    focusRingOffset: 'rgba(124, 45, 18, 0.6)',
  },
  'Level Up': {
    gradient:
      'linear-gradient(135deg, #22c55e 0%, #16a34a 48%, #15803d 74%, #022c22 100%)',
    pattern:
      'radial-gradient(circle at 18% 20%, rgba(74,222,128,0.42) 0, rgba(74,222,128,0.14) 33%, transparent 58%), radial-gradient(circle at 80% 24%, rgba(134,239,172,0.36) 0, rgba(134,239,172,0.12) 35%, transparent 62%)',
    fallbackColor: '#022c22',
    badgeBorder: 'rgba(187,247,208,0.5)',
    badgeText: '#ffffff',
    focusColor: '#34d399',
    focusRingOffset: 'rgba(15, 58, 34, 0.6)',
  },
  Startups: {
    gradient:
      'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 45%, #0369a1 78%, #082f49 100%)',
    pattern:
      'radial-gradient(circle at 22% 20%, rgba(125,211,252,0.46) 0, rgba(125,211,252,0.14) 32%, transparent 58%), radial-gradient(circle at 80% 22%, rgba(56,189,248,0.34) 0, rgba(56,189,248,0.12) 36%, transparent 64%)',
    fallbackColor: '#082f49',
    badgeBorder: 'rgba(191,219,254,0.55)',
    badgeText: '#ffffff',
    focusColor: '#38bdf8',
    focusRingOffset: 'rgba(8, 47, 73, 0.6)',
  },
}

function SpeakerDetails({
  avatar,
  bio,
  id,
  isGDE,
  isWTM,
  mastodon,
  name,
  onClose,
  organization,
  position,
  sessionTitle,
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

  const trackTheme = useMemo(() => {
    return TRACK_THEMES[track] ?? TRACK_THEMES.default
  }, [track])

  const heroStyle = useMemo(() => {
    const backgroundImage = [trackTheme.pattern, trackTheme.gradient].join(', ')

    return {
      backgroundImage,
      backgroundColor: trackTheme.fallbackColor,
      backgroundBlendMode: 'overlay, normal',
      backgroundSize: 'auto, cover',
      backgroundRepeat: 'repeat, no-repeat',
      backgroundPosition: 'center, center',
    }
  }, [trackTheme])

  const trackBadgeStyle = useMemo(
    () => ({
      borderColor: trackTheme.badgeBorder,
      color: trackTheme.badgeText,
    }),
    [trackTheme]
  )

  const bioFocusStyle = useMemo(
    () => ({
      outlineColor: trackTheme.focusColor,
    }),
    [trackTheme]
  )

  const interactiveFocusVars = useMemo(
    () => ({
      '--tw-ring-color': trackTheme.focusColor,
      '--tw-ring-offset-color': trackTheme.focusRingOffset,
    }),
    [trackTheme]
  )

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

        <div className="relative z-20 flex flex-col items-center text-center text-white">
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
            {name && (
              <h3
                id={`speaker-modal-about-${id}`}
                className="mb-4 text-2xl font-bold text-gray-900"
              >
                About {name.split(' ')[0]}
              </h3>
            )}
            <div
              className="max-h-64 overflow-y-auto rounded-xl pr-4 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              tabIndex={0}
              role="textbox"
              aria-readonly="true"
              aria-labelledby={`speaker-modal-about-${id}`}
              style={bioFocusStyle}
            >
              {bio && (
                <p
                  id={`speaker-modal-bio-${id}`}
                  className="whitespace-pre-line text-left leading-relaxed text-gray-700"
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
          <IoChevronForward
            className="size-6 text-gray-600"
            aria-hidden="true"
          />
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
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  track: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerDetails
