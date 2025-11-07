import PropTypes from 'prop-types'
import { FaLinkedinIn } from 'react-icons/fa6'

const LinkedInHandle = ({ handle, absolute = true }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className={
      absolute
        ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
        : 'flex size-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
    }
    aria-label="Follow on LinkedIn - opens in new tab"
  >
    <FaLinkedinIn className="size-5 text-black" aria-hidden="true" />
  </a>
)

LinkedInHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  absolute: PropTypes.bool,
}

export default LinkedInHandle
