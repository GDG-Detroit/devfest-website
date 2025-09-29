import LinkedInHandle from '@/components/ui/LinkedInHandle'
import PropTypes from 'prop-types'
import GithubHandle from '../ui/GithubHandle'

const DevTeamCard = ({
  name,
  avatar,
  linkedin,
  github,
  organization,
  position,
  university,
}) => {
  return (
    <div className="group relative mb-4 ml-4 transform-gpu overflow-hidden transition-transform hover:z-20 hover:scale-110 hover:cursor-pointer hover:filter-none">
      <img
        src={avatar}
        alt={`${name} - ${organization || university}`}
        className="h-60 w-full object-cover object-center"
      />
      <div className="invisible absolute inset-x-0 bottom-0 h-20 translate-y-8 bg-primary-200 pt-4 text-center text-sm text-sky-900 transition ease-in-out group-hover:visible group-hover:translate-y-0">
        <h3 className="text-sm font-semibold text-sky-900">{name}</h3>
        <div className="px-2">
          <h4 className="text-xs text-sky-900">{organization || university}</h4>
          <p className="text-xs text-sky-900">{position}</p>
        </div>
        <LinkedInHandle handle={linkedin} />
        <GithubHandle handle={github} />
      </div>
    </div>
  )
}

DevTeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
}

export default DevTeamCard
