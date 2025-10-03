import { useParams, Link } from 'react-router-dom'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'
import { getEventData, getEventMetadata } from '@/utils/eventData'
import PreviousEventsNavbar from '@/components/PreviousEventsNavbar'
import Footer from '@/layouts/Footer'

const PreviousEvent = () => {
  const { year } = useParams()
  const yearNumber = parseInt(year, 10)

  const eventData = getEventData(yearNumber)
  const eventMetadata = getEventMetadata(yearNumber)

  if (!eventData || !eventMetadata.available) {
    return (
      <main>
        <PreviousEventsNavbar />
        <section className="mt-16 bg-primary-100">
          <div className="flex min-h-[90vh] min-w-[100vw] flex-col items-center justify-center p-4 text-center sm:px-10 md:px-8 lg:px-8">
            <h1 className="mb-4 font-russell text-4xl font-bold text-primary-800">
              Event Not Found
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              The DevFest {year} event data is not available.
            </p>
            <Link
              to="/previous-events"
              className="rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
            >
              Back to All Events
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const speakersData = eventData.speakers
  const sponsorsData = eventData.sponsors || []

  return (
    <main>
      <PreviousEventsNavbar />

      <section className="mt-16 bg-primary-100">
        <div className="flex flex-col items-center justify-center px-8 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24">
          <h1 className="mb-8 text-center font-russell text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl">
            Michigan DevFest {year}
          </h1>
          <div className="mb-8 flex justify-center gap-4">
            <Link
              to="/previous-events"
              className="flex items-center text-primary-600 transition-colors hover:text-primary-500"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Events
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-primary-200 px-4 py-2 text-sm font-medium text-primary-800">
              {eventMetadata.speakerCount} Speaker
              {eventMetadata.speakerCount !== 1 ? 's' : ''}
            </span>
            <span className="rounded-full bg-blue-200 px-4 py-2 text-sm font-medium text-blue-800">
              {eventMetadata.sessionCount} Session
              {eventMetadata.sessionCount !== 1 ? 's' : ''}
            </span>
            {eventMetadata.tracks.length > 0 && (
              <span className="rounded-full bg-green-200 px-4 py-2 text-sm font-medium text-green-800">
                {eventMetadata.tracks.length} Track
                {eventMetadata.tracks.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </section>

      <SessionsSection
        year={yearNumber}
        speakersData={speakersData}
        tracks={eventMetadata.tracks}
        defaultExpanded
      />

      <SpeakersSection
        year={yearNumber}
        speakersData={speakersData}
        defaultExpanded
      />

      {sponsorsData.length > 0 && (
        <SponsorsSection
          year={yearNumber}
          sponsorsData={sponsorsData}
          defaultExpanded
          collapsible
        />
      )}

      <Footer />
    </main>
  )
}

export default PreviousEvent
