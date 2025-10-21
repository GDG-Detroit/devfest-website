import PropTypes from 'prop-types'
import { FaXTwitter } from 'react-icons/fa6'

const TwitterHandle = ({ handle, name, absolute = true }) => {
  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className={
        absolute
          ? 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white'
          : 'flex size-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-300'
      }
      aria-label={`${name}'s Twitter handle - @${handle}`}
    >
      <FaXTwitter className="size-5 text-black" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  absolute: PropTypes.bool,
}

export default TwitterHandle
