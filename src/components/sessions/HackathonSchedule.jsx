import HackathonEventCard from './HackathonEventCard'

// 2025 schedule - grouped by time
const hackathonSchedule = [
  {
    time: '8:00 AM',
    events: [
      {
        title: 'Morning Meditation & Yoga',
        description:
          'Start your day mindfully! Join us for a relaxing meditation and yoga session to energize your body and clear your mind before the hackathon begins. Namaste!',
      },
    ],
  },
  {
    time: '9:00 AM',
    events: [
      {
        title: 'Check-In & Breakfast',
        description:
          'Fuel up for the exciting day! Grab your badge, enjoy a delicious and nutritious breakfast, and mingle with fellow hackers.',
      },
      {
        title: 'AI Hackathon Keynote',
        description:
          'Get inspired! We set the stage for the event. Hear from industry leaders about the latest in AI innovation and what makes a winning hackathon project. Time to dream big!',
      },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      {
        title: 'Office Hours & Workshops',
        description:
          'Level up your skills! Chat with expert mentors and get help turning your ideas into reality. Ask anything!',
      },
    ],
  },
  {
    time: '12:00 PM',
    events: [
      {
        title: 'Lunch Break & Networking',
        description:
          'Recharge and connect! Enjoy a catered lunch while networking with other developers, sponsors, and potential teammates. Great ideas happen over great food!',
      },
    ],
  },
  {
    time: '1:00 PM',
    events: [
      {
        title: 'Office Hours & Workshops',
        description:
          'Keep building! Continue working with mentor support, debug tricky issues, and polish your project. The finish line is in sight!',
      },
    ],
  },
  {
    time: '6:00 PM',
    events: [
      {
        title: 'Presentations & Demos',
        description:
          "Showtime! Present your amazing creations to judges and fellow participants. Time to shine and showcase what you've built!",
      },
    ],
  },
  {
    time: '8:00 PM',
    events: [
      {
        title: 'Judging & Prizes',
        description:
          'The moment of truth! Watch as judges deliberate and winners are announced. Amazing prizes and recognition await the top teams!',
      },
    ],
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
                    <HackathonEventCard
                      title={timeSlot.events[0].title}
                      description={timeSlot.events[0].description}
                      alignRight={timeIndex % 2 !== 0}
                    />
                  ) : (
                    // Multiple events for a single time slot - show on both sides
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
                      <HackathonEventCard
                        title={timeSlot.events[0].title}
                        description={timeSlot.events[0].description}
                        alignRight={false}
                      />
                      <HackathonEventCard
                        title={timeSlot.events[1].title}
                        description={timeSlot.events[1].description}
                        alignRight={true}
                      />
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
