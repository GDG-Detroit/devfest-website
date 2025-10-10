import { getAllEventsMetadata } from '@/utils/eventData'
import EventCard from './EventCard'
import PreviousEventsNavbar from '@/components/PreviousEventsNavbar'
import Footer from '@/layouts/Footer'

const EventList = () => {
  const events = getAllEventsMetadata()

  return (
    <>
      <PreviousEventsNavbar />

      <section
        role="banner"
        aria-labelledby="main-heading"
        className="mt-16 bg-primary-100"
      >
        <div className="flex flex-col items-center justify-center px-8 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24">
          <h1
            id="main-heading"
            className="mb-8 text-center font-russell text-4xl font-bold text-primary-800 md:text-5xl lg:text-6xl"
          >
            Michigan DevFest Past Events
          </h1>
          <p className="mx-auto w-5/6 text-center text-lg leading-relaxed text-primary-950 lg:w-2/3">
            Michigan DevFest, hosted by GDG-Detroit, has been putting on an
            event for developers in the region for the last decade. It is a
            community-driven event focused on bringing together tech
            enthusiasts, professionals, and students to share knowledge,
            network, and explore the latest trends in technology. Over the
            years, the event has grown in size and scope, attracting attendees
            from across the state and beyond. Each year, Michigan DevFest
            features a diverse lineup of speakers, workshops, and activities
            that cater to a wide range of interests and skill levels. As we look
            back on previous Michigan DevFest events, we are reminded of the
            incredible talent and passion that exists within our local tech
            community and the incredible speakers and sessions that have graced
            our event. We are excited to continue this tradition of learning and
            collaboration in future events.
          </p>
        </div>
      </section>

      <main id="main-content">
        <section
          aria-labelledby="events-heading"
          className="flex flex-col items-center justify-center bg-white py-16"
        >
          <div className="w-full px-8 sm:px-10 md:px-14 lg:px-16">
            <h2
              id="events-heading"
              className="mb-12 text-center font-russell text-3xl font-bold text-primary-800 md:text-4xl"
            >
              Explore Past Events
            </h2>

            {events.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg text-gray-600">
                  No previous events found.
                </p>
              </div>
            ) : (
              <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <EventCard key={event.year} eventMetadata={event} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EventList
