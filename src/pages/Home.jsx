import { PageLayout } from '@/layouts/PageLayout'
import TeamSection from '@/layouts/TeamSection'
import JobBoardSection from '@/layouts/JobBoardSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import PartnersSection from '@/layouts/PartnersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

import { partnersData } from '@/data/2025/partners'
import { SpeakersData as Speakers2025 } from '@/data/2025/speakers'

function Home() {
  return (
    <PageLayout>
      <h1 id="main-heading" className="sr-only">
        Michigan DevFest 2025
      </h1>
      <LandingSection />
      <LocationSection />
      <SessionsSection
        year={2025}
        speakersData={Speakers2025}
        tracks={[
          'Hackathon',
          'Build with AI',
          'Tech+Design',
          'Innovation',
          'Level Up',
          'Startup',
          'Workshops',
        ]}
        defaultExpanded
      />
      <PartnersSection year={2025} partnersData={partnersData} />
      <JobBoardSection year={2025} />
      <SpeakersSection
        year={2025}
        speakersData={Speakers2025}
        defaultExpanded
      />
      <TeamSection />
    </PageLayout>
  )
}

export default Home
