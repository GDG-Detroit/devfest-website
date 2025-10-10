import datePng from '@/assets/images/date2025.png'
import dateWebp from '@/assets/images/date2025.webp'
import eventLogoSvg from '@/assets/images/midevfest2025.svg'
// Responsive date images
import date200Png from '@/assets/images/date2-200x71.png'
import date200Webp from '@/assets/images/date2-200x71.webp'
import date300Png from '@/assets/images/date2-300x100.png'
import date300Webp from '@/assets/images/date2-300x100.webp'
import date400Png from '@/assets/images/date2-400x141.png'
import date400Webp from '@/assets/images/date2-400x141.webp'
import ResponsiveImage from '@/components/ui/ResponsiveImage'

function LandingSection() {
  return (
    <section id="landing" className="mt-16 bg-black">
      <div className="mx-auto flex max-w-[1554px] flex-wrap">
        <div className="mt-4 flex w-full items-center justify-center p-12 lg:mt-0 lg:w-1/2">
          <img
            rel="preload"
            src={eventLogoSvg}
            alt="Michigan DevFest 2025 logo"
            width={400}
            height={400}
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 text-black lg:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <ResponsiveImage
              className="w-[570px] max-w-full"
              webpSrc={dateWebp}
              pngSrc={datePng}
              webpSrcSet={`${date200Webp} 200w, ${date300Webp} 300w, ${date400Webp} 400w`}
              pngSrcSet={`${date200Png} 200w, ${date300Png} 300w, ${date400Png} 400w`}
              sizes="(max-width: 570px) 100vw, 570px"
              alt="November 21-22, 2025 event dates with red circular badge"
            />

            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit, Ann Arbor, Toledo, UofM Dearborn and Windsor GDGs are
              teaming up with Compass Detroit to bring you the 11th Michigan
              DevFest on November 21-22, 2025.
            </p>
            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              Join us on Friday, November 21st for an{' '}
              <strong>Agentic AI Hackathon</strong> at Wayne State
              University&apos;s Saint Andrew&apos;s Memorial Episcopal Church in
              Detroit, followed by <strong>Michigan DevFest</strong> sessions on
              Saturday, November 22nd at <strong>Motor City Casino</strong>.
              With this year&apos;s DevFest, we aim to put together a great
              weekend of networking, innovation, and knowledge sharing for all
              involved.
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
