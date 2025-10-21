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
  // Get ribbon color based on role or track
  const getRibbonColor = (type) => {
    // For team members (role-based)
    const roleColors = {
      organizer: 'bg-blue-600',
      facilitator: 'bg-green-600',
      devteam: 'bg-amber-500',
    }

    // For speakers (track-based)
    const trackColors = {
      'Build with AI': 'bg-purple-600',
      Innovation: 'bg-indigo-600',
      'Tech+Design': 'bg-pink-600',
      Workshops: 'bg-orange-600',
      'Level Up': 'bg-emerald-600',
    }

    // Return track color if track exists, otherwise role color
    if (track) {
      return trackColors[track] || 'bg-sky-600'
    }
    return roleColors[type] || 'bg-primary-500'
  }

  // Get display label for ribbon
  const getRibbonLabel = () => {
    if (track) return track
    if (devfest) return devfest
    return null
  }

  const ribbonColor = getRibbonColor(devfest || track)
  const ribbonLabel = getRibbonLabel()

  const isSpeaker = Boolean(track)
  const teamBioColors = `bg-primary-500 hover:bg-primary-600`
  const speakerDetailColors = `bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600`

  return (
    <li className="relative rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {/* Content wrapper with overflow hidden for ribbon clipping */}
      <div className="relative overflow-hidden rounded-xl p-4 pb-12">
        {/* Ribbon Label */}
        {ribbonLabel && (
          <div
            className={`${
              devfest ? `ribbon-${devfest}` : `ribbon-${track}`
            } absolute -right-10 top-6 z-10 w-40 rotate-45 ${ribbonColor} py-1 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md`}
          >
            {ribbonLabel}
          </div>
        )}

        <div className="flex">
          <div className="flex w-24 shrink-0 flex-col items-center">
            <img
              alt=""
              src={avatar}
              className="size-24 rounded-full outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
              loading="lazy"
            />
            <div className="mt-2 flex gap-1">
              {linkedin && (
                <LinkedInHandle handle={linkedin} absolute={false} />
              )}
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
          </div>

          <div className="ml-4 flex flex-col items-start justify-center gap-2">
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h3>
            {organization && (
              <p className="text-left text-sm/6 text-gray-600 dark:text-gray-400">
                {organization}
              </p>
            )}
            {position && (
              <p className="text-left text-sm/6 text-gray-600 dark:text-gray-400">
                {position}
              </p>
            )}
            {role && (
              <p className="text-left text-sm/6 text-gray-600 dark:text-gray-400">
                {role}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Button positioned relative to card, outside overflow container */}
      {showBioButton && onViewBioOrDetails && (
        <button
          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-sm font-medium text-white shadow-md transition-colors ${
            isSpeaker ? speakerDetailColors : teamBioColors
          }`}
          onClick={onViewBioOrDetails}
          aria-label={`View details for ${name}`}
        >
          View {isSpeaker ? 'Details' : 'Bio'}
        </button>
      )}
    </li>
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
