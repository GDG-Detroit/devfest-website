import { PageLayout } from '@/layouts/PageLayout'
import DevTeamSection from '@/layouts/DevTeamSection'
import FacilitatorsSection from '@/layouts/FacilitatorsSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'

function Home() {
  return (
    <PageLayout>
      <LandingSection />
      <LocationSection />
      <SessionsSection
        year={2025}
        speakersData={[]}
        tracks={[]}
        defaultExpanded
      />
      <SponsorsSection />
      <OrganizersSection />
      <FacilitatorsSection />
      <SpeakersSection year={2025} speakersData={[]} defaultExpanded />
      <DevTeamSection />
    </PageLayout>
  )
}

export default Home
