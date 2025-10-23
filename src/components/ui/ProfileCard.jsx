import PropTypes from 'prop-types'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import GithubHandle from '@/components/ui/GithubHandle'
import TwitterHandle from '@/components/ui/TwitterHandle'

import GDEIcon from '@/assets/images/icons/gdge.svg'
import WTMLogo from '@/assets/images/icons/wtm.svg'

const ProfileCard = ({
  name,
  avatar,
  organization,
  position,
  track,
  linkedin,
  github,
  twitter,
  onViewDetails,
  isWTM = false,
  isGDE = false,
}) => {
  const getBadgeColor = () => {
    const trackColors = {
      'Build with AI': 'bg-purple-800',
      Innovation: 'bg-primary-900',
      'Level Up': 'bg-emerald-800',
      Startups: 'bg-sky-800',
      'Tech+Design': 'bg-red-800',
      Workshops: 'bg-orange-900',
    }

    if (track) return trackColors[track] || 'bg-sky-400'
    return 'bg-gray-600'
  }

  const badgeColor = getBadgeColor(track)

  const speakerDetailColors = `bg-white text-sky-800 border-[1px] border-sky-900 shadow-xl hover:bg-primary-400 hover:border-primary-900 hover:text-sky-900`

  const getGradientColors = (bgColor) => {
    const colorMap = {
      // Speaker track colors - lighter gradients for subtle image overlays
      'bg-purple-800': 'from-purple-400/60 via-purple-400/5',
      'bg-primary-900': 'from-primary-400/60 via-primary-400/5',
      'bg-emerald-800': 'from-emerald-400/60 via-emerald-400/5',
      'bg-sky-800': 'from-sky-400/60 via-sky-400/5',
      'bg-red-800': 'from-red-400/60 via-red-400/5',
      'bg-orange-900': 'from-orange-400/60 via-orange-400/5',

      // Legacy/fallback colors
      'bg-primary-300': 'from-primary-300/60 via-primary-300/5',
      'bg-primary-500': 'from-primary-300/60 via-primary-300/5',
      'bg-blue-500': 'from-blue-400/60 via-blue-400/5',
      'bg-green-500': 'from-green-400/60 via-green-400/5',
      'bg-amber-500': 'from-amber-400/60 via-amber-400/5',
      'bg-gray-500': 'from-gray-400/60 via-gray-400/5',
      'bg-gray-600': 'from-gray-400/60 via-gray-400/5',
      'bg-gray-700': 'from-gray-400/60 via-gray-400/5',
    }

    return colorMap[bgColor] || 'from-gray-400/60 via-gray-400/5'
  }

  const renderBadge = track && (
    <div className="absolute bottom-5 right-5 z-0">
      <span
        className={`inline-flex items-center gap-2 rounded-xl ${badgeColor} px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg`}
      >
        {track}
        {isGDE && (
          <img
            src={GDEIcon}
            alt="GDE"
            className="size-6"
            loading="lazy"
            width={24}
            height={24}
          />
        )}
        {isWTM && (
          <img
            src={WTMLogo}
            alt="WTM"
            className="size-5"
            loading="lazy"
            width={20}
            height={20}
          />
        )}
      </span>
    </div>
  )

  const renderImageGradient = (
    <>
      {/* Top gradient */}
      <div
        className={`absolute inset-x-0 top-0 z-0 h-1/2 bg-gradient-to-b ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Bottom gradient */}
      <div
        className={`absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Left gradient */}
      <div
        className={`absolute inset-y-0 left-0 z-0 w-1/2 bg-gradient-to-r ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Right gradient */}
      <div
        className={`absolute inset-y-0 right-0 z-0 w-1/2 bg-gradient-to-l ${getGradientColors(
          badgeColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
    </>
  )

  const renderBadgeAndGradient = track && (
    <>
      {renderImageGradient}
      {renderBadge}
    </>
  )

  const renderSocialLinks = (linkedin || github || twitter) && (
    <div className="inline-flex items-center gap-2">
      {linkedin && <LinkedInHandle handle={linkedin} absolute={false} />}
      {github && <GithubHandle handle={github} absolute={false} />}
      {twitter && (
        <TwitterHandle
          handle={twitter}
          name={name}
          variant="default"
          absolute={false}
        />
      )}
    </div>
  )

  {
    /* Show fields to maintain size */
  }
  const renderInfo = (
    <div className="ml-4 flex flex-col items-start justify-center">
      <h3 className="mt-1 line-clamp-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h3>
      <div className="mt-1 line-clamp-2 text-left text-base text-gray-600 dark:text-white">
        {organization || '\u00A0'}
      </div>
      <div className="mt-1 line-clamp-2 text-left text-base text-gray-600 dark:text-white">
        {position || '\u00A0'}
      </div>
    </div>
  )

  const renderButton = onViewDetails && (
    <button
      className={`my-3 inline-flex items-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium shadow-md transition-colors dark:text-black ${speakerDetailColors}`}
      onClick={onViewDetails}
      aria-label={`View details for ${name}`}
    >
      View Details
    </button>
  )

  const renderSpeakerCard = (
    <>
      <div className="relative aspect-[16/15] w-full overflow-hidden rounded-t-2xl">
        <img
          alt=""
          src={avatar}
          className="size-full object-cover"
          loading="lazy"
        />
        {renderBadgeAndGradient}
      </div>
      <div className="mt-3 flex flex-col justify-between px-2">
        {renderInfo}
        <div className="m-4 mt-6 flex flex-wrap items-center justify-between gap-2">
          {renderSocialLinks}
          {renderButton}
        </div>
      </div>
    </>
  )

  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {renderSpeakerCard}
    </div>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  track: PropTypes.string, // For speakers: 'Build with AI', 'Innovation', etc.
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  onViewDetails: PropTypes.func,
  isWTM: PropTypes.bool,
  isGDE: PropTypes.bool,
}

export default ProfileCard
