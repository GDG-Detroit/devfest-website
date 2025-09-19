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

import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'

function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <LocationSection />
      <SessionsSection
        year={2024}
        speakersData={Speakers2024}
        tracks={['AI/ML', 'Mobile', 'Fullstack', 'Miscellaneous']}
      />
      <SponsorsSection />
      <OrganizersSection />
      <FacilitatorsSection />
      <SpeakersSection
        year={2024}
        speakersData={Speakers2024}
        defaultExpanded={false}
      />
      <DevTeamSection />
      <Footer />
    </main>
  )
}

export default Home
