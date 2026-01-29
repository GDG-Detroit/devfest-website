import { ReactComponent as EventLogoSvg } from '@/assets/images/compass-logo.svg'
import CTAButton from '@/components/ui/CTAButton'
import { FaTicket } from 'react-icons/fa6'

function LandingSection() {
  return (
    <section id="landing" className="mt-16 bg-indigo-950">
      <div className="mx-auto flex max-w-[1554px] flex-wrap">
        <div className="mx-auto mt-4 flex w-full items-center justify-center p-12 lg:mt-0 lg:w-1/2">
          <EventLogoSvg
            className="mx-auto h-auto w-full max-w-screen-xs"
            aria-label="Compass Detroit 2026 logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-pumpkin-200 text-black lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <h2 className="text-4xl font-bold font-biorhyme text-indigo-900">
              February 28, 2026
            </h2>

            <p className="prose text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the Compass Detroit
              conference on February 28, 2026.
            </p>
            <p className="prose text-justify text-sm font-normal lg:text-base xl:text-lg">
              Join us Saturday, February 28th for the Compass Detroit
              conference. With this year&apos;s event, we aim to put together a
              great weekend of networking, innovation, and knowledge sharing for
              all involved.
            </p>
            <div className="flex flex-row gap-8">
              <CTAButton
                href="https://bit.ly/midevfest25"
                label="GET TICKETS"
                icon={<FaTicket />}
                ariaLabel="Get your tickets today for Michigan DevFest 2025"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
