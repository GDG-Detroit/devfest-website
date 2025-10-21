import PropTypes from 'prop-types'
import { FaXTwitter } from 'react-icons/fa6'

const TwitterHandle = ({ handle, name }) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className="absolute -bottom-8 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
      aria-label={`${name ? `${name}'s` : ''} Twitter handle - @${handle}`}
    >
      <FaXTwitter className="size-6" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TwitterHandle
