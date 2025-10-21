import PropTypes from 'prop-types'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import GithubHandle from '@/components/ui/GithubHandle'
import TwitterHandle from '@/components/ui/TwitterHandleDev'

const ProfileCard = ({
  name,
  avatar,
  organization,
  role,
  devfest,
  linkedin,
  github,
  twitter,
  onViewBio,
}) => {
  // Get ribbon color based on role
  const getRibbonColor = (role) => {
    const colors = {
      organizer: 'bg-blue-600',
      facilitator: 'bg-green-600',
      devteam: 'bg-amber-500',
    }
    return colors[role] || 'bg-primary-500'
  }

  return (
    <li className="relative rounded-xl border border-gray-200 bg-white shadow-lg">
      {/* Content wrapper with overflow hidden for ribbon clipping */}
      <div className="relative overflow-hidden rounded-xl p-4 pb-12">
        {/* Ribbon Label */}
        <div
          className={`ribbon-${devfest} absolute -right-10 top-6 z-10 w-40 rotate-45 ${getRibbonColor(
            devfest
          )} py-1 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md`}
        >
          {devfest}
        </div>
        <div className="flex">
          <div className="flex w-24 shrink-0 flex-col items-center">
            <img
              alt=""
              src={avatar}
              className="size-24 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="mt-2 flex gap-1">
              {linkedin && (
                <LinkedInHandle handle={linkedin} absolute={false} />
              )}
              {github && <GithubHandle handle={github} absolute={false} />}
              {twitter && (
                <TwitterHandle handle={twitter} name={name} absolute={false} />
              )}
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start justify-center gap-2">
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {name}
            </h3>
            <p className="text-left text-sm/6 text-gray-600">{organization}</p>
            <p className="text-left text-sm/6 text-gray-600">{role}</p>
          </div>
        </div>
      </div>
      {/* Button positioned relative to card, outside overflow container */}
      {onViewBio && (
        <button
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-primary-600"
          onClick={onViewBio}
        >
          View Bio
        </button>
      )}
    </li>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string,
  role: PropTypes.string,
  devfest: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  onViewBio: PropTypes.func,
}

export default ProfileCard
