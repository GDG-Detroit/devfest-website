import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CloseIcon = forwardRef(
  ({ onClick, className = '', size = 'size-6', label = 'Close' }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${className}`}
        aria-label={label}
      >
        <svg
          className={size}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    )
  }
)

CloseIcon.displayName = 'CloseIcon'

CloseIcon.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
}

export default CloseIcon
