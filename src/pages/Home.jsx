import { PageLayout } from '@/layouts/PageLayout'
import DevTeamSection from '@/layouts/DevTeamSection'
import FacilitatorsSection from '@/layouts/FacilitatorsSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'

import { SpeakersData as Speakers2025 } from '@/data/2025/speakers'

function Home() {
  return (
    <PageLayout>
      <LandingSection />
      <LocationSection />
      <SessionsSection
        year={2025}
        speakersData={Speakers2025}
        tracks={['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']}
        defaultExpanded
      />
      <SponsorsSection />
      <OrganizersSection />
      <FacilitatorsSection />
      <SpeakersSection
        year={2025}
        speakersData={Speakers2025}
        defaultExpanded
      />
      <DevTeamSection />
    </PageLayout>
  )
}

export default Home
