import PropTypes from 'prop-types'

import { DIRECTION } from '@/constants/directions'

function AnimatedChevronIcon({
  direction,
  fill = 'none',
  strokeWidth = 1.5,
  strokeColor = 'currentColor',
}) {
  const getRotationClass = () => {
    switch (direction) {
      case DIRECTION.TOP:
        return 'rotate-180'
      case DIRECTION.RIGHT:
        return '-rotate-90'
      case DIRECTION.BOTTOM:
        return 'rotate-0'
      case DIRECTION.LEFT:
        return 'rotate-90'
      default:
        return 'rotate-0'
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      className={`transition-transform ${getRotationClass()} size-10 shrink-0 duration-300 md:size-12 xl:size-20`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

AnimatedChevronIcon.propTypes = {
  direction: PropTypes.oneOf([
    DIRECTION.TOP,
    DIRECTION.RIGHT,
    DIRECTION.BOTTOM,
    DIRECTION.LEFT,
  ]).isRequired,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
}

export default AnimatedChevronIcon
