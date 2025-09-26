import PropTypes from 'prop-types'
import TwitterHandle from '@/components/ui/TwitterHandle'

import { IoChevronForward } from 'react-icons/io5'

const GenericCard = ({
  name,
  twitter,
  avatar,
  organization,
  position,
  onOpen,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen?.()
    }
  }

  return (
    <div
      className={`group relative w-full max-w-sm ${
        onOpen &&
        'cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]'
      }`}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role={onOpen ? 'button' : undefined}
      tabIndex={onOpen ? 0 : undefined}
      aria-label={onOpen ? `View details for ${name}` : undefined}
    >
      <div className="relative h-[27rem] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:ring-gray-300">
        <div className="relative h-24 bg-gradient-to-r from-sky-600 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        <div className="relative -mt-12 flex justify-center">
          <div className="relative">
            <div className="h-44 w-44 rounded-full bg-white p-1 shadow-lg">
              <img
                src={avatar}
                className="h-full w-full rounded-full object-cover"
                alt={`${name} portrait`}
                loading="lazy"
              />
              {twitter && (
                <div className="absolute inset-x-0 bottom-0">
                  <TwitterHandle handle={twitter} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 text-center">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900">
            {name}
          </h3>

          <p className="mb-1 line-clamp-2 text-sm font-medium text-blue-600">
            {position}
          </p>

          <p className="mb-4 line-clamp-2 text-xs text-gray-500">
            {organization}
          </p>

          {onOpen && (
            <button
              className="inline-flex items-center rounded-lg bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 opacity-0 transition-all duration-200 hover:bg-gray-100 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation()
                onOpen()
              }}
            >
              View Details
              <IoChevronForward className="ml-1 h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

GenericCard.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  onOpen: PropTypes.func,
}

export default GenericCard
