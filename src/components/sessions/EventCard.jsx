import PropTypes from 'prop-types'

// Track color mapping
const trackColors = {
  'AI Foundations': {
    bg: 'bg-purple-100',
    border: 'border-purple-400',
    badge: 'bg-purple-700',
    text: 'text-purple-700',
  },
  'Build with AI': {
    bg: 'bg-blue-100',
    border: 'border-blue-400',
    badge: 'bg-blue-700',
    text: 'text-blue-700',
  },
  Innovation: {
    bg: 'bg-emerald-100',
    border: 'border-emerald-400',
    badge: 'bg-emerald-700',
    text: 'text-emerald-700',
  },
  Leadership: {
    bg: 'bg-amber-100',
    border: 'border-amber-400',
    badge: 'bg-amber-700',
    text: 'text-amber-700',
  },
  'Level Up': {
    bg: 'bg-rose-100',
    border: 'border-rose-400',
    badge: 'bg-rose-700',
    text: 'text-rose-700',
  },
  Career: {
    bg: 'bg-cyan-100',
    border: 'border-cyan-400',
    badge: 'bg-cyan-700',
    text: 'text-cyan-700',
  },
  Session: {
    bg: 'bg-gray-100',
    border: 'border-gray-400',
    badge: 'bg-gray-700',
    text: 'text-gray-700',
  },
  default: {
    bg: 'bg-white',
    border: 'border-gray-200',
    badge: 'bg-primary-700',
    text: 'text-gray-700',
  },
}

// Detect track from title
const getTrack = (title) => {
  if (title.includes('AI Foundations')) return 'AI Foundations'
  if (title.includes('Build with AI')) return 'Build with AI'
  if (
    title.includes('Innovation') ||
    title.includes('Keynote') ||
    title.includes('Panel')
  )
    return 'Innovation'
  if (title.includes('Leadership') || title.includes('Catalysts'))
    return 'Leadership'
  if (title.includes('Level Up')) return 'Level Up'
  if (
    title.includes('Career') ||
    title.includes('Resume') ||
    title.includes('Mentorship') ||
    title.includes('Mock Interview')
  )
    return 'Career'
  return 'Session'
}

const EventCard = ({
  title,
  description,
  alignRight = false,
  compact = false,
  gridMode = false,
}) => {
  const track = getTrack(title)
  const colors = trackColors[track] || trackColors.default

  // Grid mode: for 3+ events display
  if (gridMode) {
    return (
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-xl border-2 ${colors.border} ${colors.bg} p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        {/* Track badge */}
        <span
          className={`mb-2 inline-flex w-fit items-center rounded-full ${colors.badge} px-3 py-1 text-xs font-extrabold text-white`}
        >
          {track}
        </span>

        <h4 className="mb-2 text-base font-bold leading-tight text-gray-900">
          {title}
        </h4>

        <p className="mt-auto line-clamp-3 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    )
  }

  // Compact mode
  if (compact) {
    return (
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <h4 className="mb-1 text-base font-bold text-gray-900">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    )
  }

  // Default mode: single or dual event display
  return (
    <div
      className={`group relative w-full rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-lg ${
        alignRight
          ? 'md:ml-auto md:w-[calc(50%-3rem)]'
          : 'md:mr-auto md:w-[calc(50%-3rem)]'
      }`}
    >
      <h4 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
        {title}
      </h4>

      {/* Hover tooltip */}
      <div
        className={`pointer-events-none absolute z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
          alignRight
            ? 'right-0 top-full mr-4 mt-2'
            : 'left-0 top-full ml-4 mt-2'
        } w-72 rounded-lg border border-gray-200 bg-gray-900 p-4 shadow-xl`}
      >
        <div className="text-sm leading-relaxed text-gray-300">
          {description}
        </div>
        {/* Arrow */}
        <div
          className={`absolute -top-2 ${
            alignRight ? 'right-8' : 'left-8'
          } size-0 border-8 border-transparent border-b-gray-900`}
        />
      </div>
    </div>
  )
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  compact: PropTypes.bool,
  gridMode: PropTypes.bool,
}

export default EventCard
