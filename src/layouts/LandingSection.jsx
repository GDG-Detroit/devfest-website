//import detroitSkyline from '@/assets/images/Frame 2 - Detroit Skyline.png'

import datePng from '@/assets/images/date2025.png'
import dateWebp from '@/assets/images/date2025.webp'
import DevFestLogoPng from '@/assets/images/DevFestLogo2025.png'
import DevFestLogoWebp from '@/assets/images/DevFestLogo2025.webp'
import ResponsiveImage from '@/components/ui/ResponsiveImage'

function LandingSection() {
  return (
    <section id="landing" className="mt-16">
      <div className="flex flex-wrap bg-black">
        <div className="w-full p-12 sm:w-1/2">
          <ResponsiveImage
            className="w-full"
            webpSrc={DevFestLogoWebp}
            pngSrc={DevFestLogoPng}
            alt="Michigan DevFest 2025 logo with Detroit skyline and developer graphics"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 sm:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <ResponsiveImage
              className="w-[570px] max-w-full"
              webpSrc={dateWebp}
              pngSrc={datePng}
              alt="November 21-22, 2025 event dates with red circular badge"
            />

            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the 11th Michigan
              DevFest on November 21-22, 2025.
              <br />
              <br />
              Join us on Friday, November 21st for an Agentic AI Hackathon at
              Wayne State University&apos;s Saint Andrew&apos;s Memorial
              Episcopal Church in Detroit, followed by DevFest sessions on
              Saturday, November 22nd at Motor City Casino. With this
              year&apos;s DevFest, we aim to put together a great weekend of
              networking, innovation, and knowledge sharing for all involved.
            </p>
            <a
              href="https://www.papercall.io/midevfest2025"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
              rel="noreferrer"
            >
              {' '}
              APPLY TO SPEAK
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
