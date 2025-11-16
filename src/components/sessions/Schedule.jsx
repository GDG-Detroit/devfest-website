import { useState } from 'react'
import HackathonSchedule from './HackathonSchedule'
import DevFestSchedule from './DevFestSchedule'

export const Schedule = () => {
  const [activeSchedule, setActiveSchedule] = useState('hackathon')

  return (
    <div className="w-full py-8">
      {/* Mobile: Tabs */}
      <div className="mb-8 flex justify-center lg:hidden">
        <div
          role="tablist"
          aria-label="Event schedule selector"
          className="flex gap-3"
        >
          <button
            role="tab"
            aria-selected={activeSchedule === 'hackathon'}
            aria-controls="hackathon-schedule-panel"
            id="hackathon-tab"
            onClick={() => setActiveSchedule('hackathon')}
            className={`rounded-lg px-6 py-3 text-base font-bold transition-all ${
              activeSchedule === 'hackathon'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            tabIndex={activeSchedule === 'hackathon' ? 0 : -1}
          >
            IBM AI Hackathon
          </button>
          <button
            role="tab"
            aria-selected={activeSchedule === 'devfest'}
            aria-controls="devfest-schedule-panel"
            id="devfest-tab"
            onClick={() => setActiveSchedule('devfest')}
            className={`rounded-lg px-6 py-3 text-base font-bold transition-all ${
              activeSchedule === 'devfest'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            tabIndex={activeSchedule === 'devfest' ? 0 : -1}
          >
            DevFest Sessions
          </button>
        </div>
      </div>

      {/* Mobile: Single Schedule View */}
      <div className="mx-auto max-w-4xl lg:hidden">
        <div
          role="tabpanel"
          id="hackathon-schedule-panel"
          aria-labelledby="hackathon-tab"
          hidden={activeSchedule !== 'hackathon'}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            IBM AI Hackathon Schedule
          </h3>
          <HackathonSchedule />
        </div>
        <div
          role="tabpanel"
          id="devfest-schedule-panel"
          aria-labelledby="devfest-tab"
          hidden={activeSchedule !== 'devfest'}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            DevFest Sessions Schedule
          </h3>
          <DevFestSchedule />
        </div>
      </div>

      {/* Desktop: Side-by-Side View */}
      <div className="mx-auto hidden max-w-7xl lg:block">
        <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Event Schedule
        </h3>
        <div className="grid grid-cols-2 gap-8">
          {/* AI Hackathon */}
          <div className="rounded-2xl border-4 border-purple-500 bg-purple-50 p-6">
            <h4 className="mb-6 text-center text-xl font-bold text-purple-900">
              IBM AI Hackathon
            </h4>
            <HackathonSchedule compact />
          </div>

          {/* DevFest Sessions */}
          <div className="rounded-2xl border-4 border-blue-500 bg-blue-50 p-6">
            <h4 className="mb-6 text-center text-xl font-bold text-blue-900">
              DevFest Sessions
            </h4>
            <DevFestSchedule compact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
