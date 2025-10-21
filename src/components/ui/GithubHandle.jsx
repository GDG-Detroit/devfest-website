import PropTypes from 'prop-types'
import { FaGithubAlt } from 'react-icons/fa'

const GithubHandle = ({ handle, absolute = true }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className={
      absolute
        ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white'
        : 'flex size-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-300 hover:text-white'
    }
    aria-label="Follow on GitHub"
  >
    <FaGithubAlt className="size-5 text-black" />
  </a>
)

GithubHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  absolute: PropTypes.bool,
}

export default GithubHandle
