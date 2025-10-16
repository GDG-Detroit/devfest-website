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
    <div className="group relative w-full max-w-sm">
      <div className="relative h-[27rem] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:ring-gray-300 dark:bg-gray-800 dark:ring-gray-700 dark:group-hover:ring-gray-600">
        <div className="relative h-24 bg-gradient-to-r from-sky-600 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        <div className="relative -mt-12 flex justify-center">
          <div className="relative">
            <div className="h-44 w-44 rounded-full bg-white p-1 shadow-lg dark:bg-gray-700">
              <img
                src={avatar}
                className="h-full w-full rounded-full object-cover"
                alt={`${name} portrait`}
                loading="lazy"
              />
              {twitter && (
                <div className="absolute inset-x-0 bottom-0">
                  <TwitterHandle handle={twitter} name={name} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 text-center">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>

          <p className="mb-1 line-clamp-2 text-sm font-medium text-blue-600 dark:text-blue-300">
            {position}
          </p>

          <p className="mb-4 line-clamp-2 text-xs text-gray-500 dark:text-gray-300">
            {organization}
          </p>

          {onOpen && (
            <button
              className={`inline-flex items-center rounded-lg bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 opacity-0 transition-all duration-200 hover:bg-gray-100 group-hover:opacity-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600  ${
                onOpen &&
                'cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025]'
              }`}
              onClick={onOpen}
              onKeyDown={handleKeyDown}
              role={onOpen ? 'button' : undefined}
              tabIndex={onOpen ? 0 : undefined}
              aria-label={onOpen ? `View details for ${name}` : undefined}
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
