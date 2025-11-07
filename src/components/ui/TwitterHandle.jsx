import PropTypes from 'prop-types'
import { FaXTwitter } from 'react-icons/fa6'

const TwitterHandle = ({
  handle,
  name,
  variant = 'default',
  absolute = true,
}) => {
  const getClassName = () => {
    if (variant === 'avatar') {
      // Used on GenericCard
      return 'absolute -bottom-8 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white'
    }

    if (absolute) {
      // Used on ProfileCard
      return 'absolute right-0 top-0 z-10 flex size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white'
    }

    // Relative positioning for inline display
    return 'flex size-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-300'
  }

  const getIconClassName = () => {
    return variant === 'avatar' ? 'size-6' : 'size-5 text-black'
  }

  const getLinkClassName = () => {
    const baseClass = getClassName()
    const focusClass =
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
    return `${baseClass} ${focusClass}`
  }

  return (
    <a
      href={`https://twitter.com/${handle}`}
      target="_blank"
      rel="noreferrer"
      className={getLinkClassName()}
      aria-label={`${
        name ? `${name}'s` : ''
      } Twitter handle - @${handle} - opens in new tab`}
    >
      <FaXTwitter className={getIconClassName()} aria-hidden="true" />
    </a>
  )
}

TwitterHandle.propTypes = {
  handle: PropTypes.string.isRequired,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'avatar']),
  absolute: PropTypes.bool,
}

export default TwitterHandle
