import PropTypes from 'prop-types'
import { FaLinkedinIn } from 'react-icons/fa'

const LinkedInHandle = ({ handle }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className="absolute right-0 top-0 z-10 flex h-[34px] w-[34px] -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600"
  >
    <FaLinkedinIn className="text-white" />
  </a>
)

LinkedInHandle.propTypes = {
  handle: PropTypes.string.isRequired,
}

export default LinkedInHandle
