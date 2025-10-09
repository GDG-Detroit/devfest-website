import { PageLayout } from '@/layouts/PageLayout'
import DevTeamSection from '@/layouts/DevTeamSection'
import FacilitatorsSection from '@/layouts/FacilitatorsSection'
import JobBoardSection from '@/layouts/JobBoardSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'

import { sponsorsData } from '@/data/sponsors'
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
        tracks={['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']}
        defaultExpanded
      />
      <SponsorsSection year={2025} sponsorsData={sponsorsData} />
      <JobBoardSection year={2025} />
      <SpeakersSection
        year={2025}
        speakersData={Speakers2025}
        defaultExpanded
      />
      <OrganizersSection />
      <FacilitatorsSection />
      <DevTeamSection />
    </PageLayout>
  )
}

export default Home
