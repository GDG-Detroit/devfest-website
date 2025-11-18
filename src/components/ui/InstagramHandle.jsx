import PropTypes from 'prop-types'

import { FaInstagram } from 'react-icons/fa6'

const InstagramHandle = ({ handle, absolute = true }) => (
  <a
    href={handle}
    target="_blank"
    rel="noreferrer"
    className={
      absolute
        ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full bg-white'
        : 'flex size-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-300'
    }
    aria-label="Follow on Mastodon"
  >
    <FaInstagram className="size-5 text-black" />
  </a>
)

InstagramHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  absolute: PropTypes.bool,
}

export default InstagramHandle
