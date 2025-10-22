import PropTypes from 'prop-types'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import GithubHandle from '@/components/ui/GithubHandle'
import TwitterHandle from '@/components/ui/TwitterHandle'

const ProfileCard = ({
  name,
  avatar,
  organization,
  position,
  role,
  devfest,
  track,
  linkedin,
  github,
  twitter,
  onViewBioOrDetails,
  showBioButton = true,
}) => {
  const getRibbonColor = (type) => {
    // Team members
    const roleColors = {
      organizer: 'bg-blue-600',
      facilitator: 'bg-green-600',
      devteam: 'bg-amber-500',
    }

    // Speakers
    const trackColors = {
      'Build with AI': 'bg-purple-600',
      Innovation: 'bg-primary-600',
      'Level Up': 'bg-emerald-600',
      Startups: 'bg-sky-600',
      'Tech+Design': 'bg-red-600',
      Workshops: 'bg-orange-600',
    }

    if (track) return trackColors[track] || 'bg-sky-600'
    if (role) return roleColors[type] || 'bg-primary-500'
    return 'bg-gray-600'
  }

  const getRibbonLabel = () => {
    if (track) return track
    if (devfest) return devfest
    return null
  }

  const ribbonColor = getRibbonColor(devfest || track)
  const ribbonLabel = getRibbonLabel()

  const isSpeaker = Boolean(track)
  const teamBioColors = `bg-primary-500 hover:bg-primary-600`
  const speakerDetailColors = `bg-white text-sky-950 border-[1px] border-sky-900 shadow-xl hover:bg-primary-400 hover:border-primary-900 hover:text-sky-900`

  const cardIsVertical = isSpeaker

  const getGradientColors = (bgColor) => {
    const colorMap = {
      'bg-purple-600': 'from-purple-600/100 via-purple-600/15',
      'bg-primary-600': 'from-primary-600/100 via-primary-600/15',
      'bg-emerald-600': 'from-emerald-600/100 via-emerald-600/15',
      'bg-red-600': 'from-red-600/100 via-red-600/15',
      'bg-orange-600': 'from-orange-600/100 via-orange-600/15',
      'bg-blue-600': 'from-blue-600/100 via-blue-600/15',
      'bg-green-600': 'from-green-600/100 via-green-600/15',
      'bg-amber-500': 'from-amber-500/100 via-amber-500/15',
      'bg-sky-600': 'from-sky-600/100 via-sky-600/15',
      'bg-primary-500': 'from-primary-500/100 via-primary-500/15',
      'bg-gray-600': 'from-gray-600/100 via-gray-600/15',
    }

    return colorMap[bgColor] || 'from-gray-600/90 via-gray-600/30'
  }

  const renderBadge = ribbonLabel && (
    <div className="absolute right-5 top-5 z-0">
      <span
        className={`inline-block rounded-xl ${ribbonColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg`}
      >
        {ribbonLabel}
      </span>
    </div>
  )

  const renderImageGradient = (
    <>
      {/* Top gradient */}
      <div
        className={`absolute inset-x-0 top-0 z-0 h-1/2 bg-gradient-to-b ${getGradientColors(
          ribbonColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Bottom gradient */}
      <div
        className={`absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t ${getGradientColors(
          ribbonColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Left gradient */}
      <div
        className={`absolute inset-y-0 left-0 z-0 w-1/2 bg-gradient-to-r ${getGradientColors(
          ribbonColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
      {/* Right gradient */}
      <div
        className={`absolute inset-y-0 right-0 z-0 w-1/2 bg-gradient-to-l ${getGradientColors(
          ribbonColor
        )} pointer-events-none via-10% to-transparent`}
      ></div>
    </>
  )

  const renderBadgeAndGradient = ribbonLabel && (
    <>
      {renderImageGradient}
      {renderBadge}
    </>
  )

  const renderRibbon = ribbonLabel && (
    <div
      className={`${
        devfest ? `ribbon-${devfest}` : `ribbon-${track}`
      } absolute -right-10 top-6 z-0 w-40 rotate-45 ${ribbonColor} py-1 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md`}
    >
      {ribbonLabel}
    </div>
  )

  const renderSocialLinks = (linkedin || github || twitter) && (
    <div className={`flex ${cardIsVertical ? 'ml-4 mt-6' : 'mt-2'}`}>
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
      <h3
        className={`mt-1 ${
          cardIsVertical ? 'line-clamp-2 text-xl' : 'text-base/7'
        } font-semibold tracking-tight text-gray-900 dark:text-white`}
      >
        {name}
      </h3>
      <div
        className={`mt-1 text-left ${
          cardIsVertical ? 'line-clamp-2 text-base' : 'text-sm'
        } text-gray-600 dark:text-gray-400`}
      >
        {organization || '\u00A0'}
      </div>
      <div
        className={`mt-1 text-left ${
          cardIsVertical ? 'line-clamp-2 text-base' : 'text-base/7'
        } text-gray-600 dark:text-gray-400`}
      >
        {position || '\u00A0'}
      </div>
      {role && (
        <p
          className={`mt-1 text-left text-sm text-gray-600 dark:text-gray-400`}
        >
          {role}
        </p>
      )}
    </div>
  )

  const renderButton = showBioButton && onViewBioOrDetails && (
    <button
      className={`${
        cardIsVertical
          ? 'my-3 inline-flex items-center rounded-lg px-4 py-2'
          : 'absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5'
      } text-sm font-medium text-white shadow-md transition-colors ${
        isSpeaker ? speakerDetailColors : teamBioColors
      }`}
      onClick={onViewBioOrDetails}
      aria-label={`View details for ${name}`}
    >
      View {isSpeaker ? 'Details' : 'Bio'}
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
        {renderSocialLinks}
      </div>
    </>
  )

  const renderTeamMemberCard = (
    <div className="relative overflow-hidden rounded-xl p-4 pb-12">
      {renderRibbon}
      <div className="flex">
        <div className="flex w-24 shrink-0 flex-col items-center">
          <img
            alt=""
            src={avatar}
            className="size-24 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
            loading="lazy"
          />
          {renderSocialLinks}
        </div>
        {renderInfo}
      </div>
    </div>
  )

  return (
    <div
      className={`relative ${
        cardIsVertical ? 'rounded-2xl' : 'rounded-xl'
      } border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800`}
    >
      {cardIsVertical ? renderSpeakerCard : renderTeamMemberCard}
      {renderButton}
    </div>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  role: PropTypes.string,
  devfest: PropTypes.string, // For team members: 'organizer', 'facilitator', 'devteam'
  track: PropTypes.string, // For speakers: 'Build with AI', 'Innovation', etc.
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  onViewBioOrDetails: PropTypes.func,
  showBioButton: PropTypes.bool,
}

export default ProfileCard
