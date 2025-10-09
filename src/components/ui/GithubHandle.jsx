import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'

const GithubHandle = ({ handle }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className="absolute right-0 top-0 z-10 flex h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black"
    aria-label="Follow on GitHub"
  >
    <FaGithub className="text-white" />
  </a>
)

GithubHandle.propTypes = {
  handle: PropTypes.string.isRequired,
}

export default GithubHandle
