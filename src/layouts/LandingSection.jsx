import { ReactComponent as EventLogoSvg } from '@/assets/images/midevfest2025.svg'
import { ReactComponent as DateSvg } from '@/assets/images/2025date.svg'
import CTAButton from '@/components/ui/CTAButton'
import { FaTicket } from 'react-icons/fa6'

function LandingSection() {
  return (
    <section id="landing" className="mt-16 bg-black">
      <div className="mx-auto flex max-w-[1554px] flex-wrap">
        <div className="mx-auto mt-4 flex w-full items-center justify-center p-12 lg:mt-0 lg:w-1/2">
          <EventLogoSvg
            className="mx-auto h-auto w-full max-w-screen-xs"
            aria-label="Michigan DevFest 2025 logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 text-black lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <DateSvg className="mx-auto h-[201px] w-full max-w-[569px]" />

            <p className="prose text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the 11th Michigan
              DevFest on November 21-22, 2025.
            </p>
            <p className="prose text-justify text-sm font-normal lg:text-base xl:text-lg">
              Join us on Friday, November 21st for an{' '}
              <strong>Agentic AI Hackathon</strong> at Wayne State
              University&apos;s Saint Andrew&apos;s Memorial Episcopal Church in
              Detroit, followed by <strong>Michigan DevFest</strong> sessions on
              Saturday, November 22nd at <strong>Motor City Casino</strong>.
              With this year&apos;s DevFest, we aim to put together a great
              weekend of networking, innovation, and knowledge sharing for all
              involved.
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
