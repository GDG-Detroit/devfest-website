import BlackHistorySummitSchedule from './BlackHistorySummitSchedule'

export const Schedule = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Innovation Summit Schedule
        </h3>
        <BlackHistorySummitSchedule />
      </div>
    </div>
  )
}

export default Schedule
