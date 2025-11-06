// 2025 schedule - grouped by time
const hackathonSchedule = [
  {
    time: '8:00 AM',
    events: [{ title: 'Morning Meditation & Yoga' }],
  },
  {
    time: '9:00 AM',
    events: [
      { title: 'Check-In & Breakfast' },
      { title: 'AI Hackathon Keynote' },
    ],
  },
  {
    time: '10:00 AM',
    events: [{ title: 'Office Hours & Workshops' }],
  },
  {
    time: '12:00 PM',
    events: [{ title: 'Lunch Break & Networking' }],
  },
  {
    time: '1:00 PM',
    events: [{ title: 'Office Hours & Workshops' }],
  },
  {
    time: '6:00 PM',
    events: [{ title: 'Presentations & Demos' }],
  },
  {
    time: '8:00 PM',
    events: [{ title: 'Judging & Prizes' }],
  },
]

export const HackathonSchedule = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Hackathon Schedule
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 via-sky-500 to-primary-400 md:left-1/2" />

          {/* Schedule items */}
          <div className="space-y-12">
            {hackathonSchedule.map((timeSlot, timeIndex) => (
              <div key={timeSlot.time} className="relative">
                {/* Time badge */}
                <div className="absolute left-0 flex size-16 items-center justify-center rounded-full bg-primary-400 text-sm font-bold text-gray-900 shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <span className="text-center text-xs leading-tight md:text-sm">
                    {timeSlot.time}
                  </span>
                </div>

                {/* Events for this time */}
                <div className="ml-24 space-y-4 md:ml-0">
                  {timeSlot.events.length === 1 ? (
                    // Single event - alternate sides
                    <div
                      className={`w-full rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 ${
                        timeIndex % 2 === 0
                          ? 'md:mr-auto md:pr-12'
                          : 'md:ml-auto md:pl-12'
                      }`}
                    >
                      <h4 className="text-lg font-semibold text-gray-900">
                        {timeSlot.events[0].title}
                      </h4>
                    </div>
                  ) : (
                    // Multiple events for a single time slot - show on both sides
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
                      {/* Left */}
                      <div className="w-full rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 md:pr-12">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {timeSlot.events[0].title}
                        </h4>
                      </div>
                      {/* Right */}
                      <div className="w-full rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl md:w-5/12 md:pl-12">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {timeSlot.events[1].title}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonSchedule
