import { PageLayout } from '@/layouts/PageLayout'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'
import { SpeakersData as Speakers2023 } from '@/data/2023/speakers'

const PreviousEvents = () => {
  return (
    <PageLayout>
      <h1 className="mb-8 mt-16 pt-8 text-center font-russell text-6xl font-bold text-primary-800">
        Michigan DevFest Past Events
      </h1>
      <div>
        <p className="mx-auto mb-8 w-5/6 text-justify text-lg leading-relaxed lg:w-2/3">
          Michigan DevFest, hosted by GDG-Detroit, has been putting on an event
          for developers in the region for the last decade. It is a
          community-driven event focused on bringing together tech enthusiasts,
          professionals, and students to share knowledge, network, and explore
          the latest trends in technology. Over the years, the event has grown
          in size and scope, attracting attendees from across the state and
          beyond. Each year, Michigan DevFest features a diverse lineup of
          speakers, workshops, and activities that cater to a wide range of
          interests and skill levels. As we look back on previous Michigan
          DevFest events, we are reminded of the incredible talent and passion
          that exists within our local tech community and the incredible
          speakers and sessions that have graced our event. We are excited to
          continue this tradition of learning and collaboration in future
          events.
        </p>
      </div>
      <SessionsSection
        year={2024}
        speakersData={Speakers2024}
        tracks={['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']}
        defaultExpanded
      />
      <SpeakersSection
        year={2024}
        speakersData={Speakers2024}
        defaultExpanded
      />
      <SessionsSection
        year={2023}
        speakersData={Speakers2023}
        tracks={['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']}
        defaultExpanded
      />
      <SpeakersSection
        year={2023}
        speakersData={Speakers2023}
        defaultExpanded
      />
    </PageLayout>
  )
}

export default PreviousEvents
