import { PageLayout } from '@/layouts/PageLayout'
import DevTeamSection from '@/layouts/DevTeamSection'
import LandingSection from '@/layouts/LandingSection'
import LocationSection from '@/layouts/LocationSection'
import PartnersSection from '@/layouts/PartnersSection'
import SessionsSection from '@/layouts/SessionsSection'
import SpeakersSection from '@/layouts/SpeakersSection'

import { partnersData } from '@/data/partners'
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
      <PartnersSection year={2025} partnersData={partnersData} />
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
