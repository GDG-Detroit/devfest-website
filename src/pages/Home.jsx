import Navbar from '@/components/Navbar'
import DevTeamSection from '@/layouts/DevTeamSection'
import FacilitatorsSection from '@/layouts/FacilitatorsSection'
import Footer from '@/layouts/Footer'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import OrganizersSection from '@/layouts/OrganizersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'
import SponsorsSection from '@/layouts/SponsorsSection'

import { sponsorsData } from '@/data/sponsors'

function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <LocationSection />
      <SessionsSection
        year={2025}
        speakersData={[]}
        tracks={[]}
        defaultExpanded
      />
      <SponsorsSection year={2025} sponsorsData={sponsorsData} />
      <OrganizersSection />
      <FacilitatorsSection />
      <SpeakersSection year={2025} speakersData={[]} defaultExpanded />
      <DevTeamSection />
      <Footer />
    </main>
  )
}

export default Home
