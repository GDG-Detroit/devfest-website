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
        <div className="p-12 w-full sm:w-1/2">
          <ResponsiveImage
            className="w-full"
            webpSrc={DevFestLogoWebp}
            pngSrc={DevFestLogoPng}
            alt="Michigan DevFest Logo"
          />
        </div>

        <div className="flex flex-col justify-between w-full bg-primary-400 sm:w-1/2">
          <div className="flex flex-col justify-center items-center p-10 space-y-8 grow">
            <ResponsiveImage
              className="w-[570px] max-w-full"
              webpSrc={dateWebp}
              pngSrc={datePng}
              alt="Date and Red Circle"
            />

            <p className="text-sm font-normal text-justify lg:text-base xl:text-lg">
              The Detroit and Ann Arbor Google Developer Groups (GDG) are
              teaming up once again to bring you the 10th Michigan DevFest on
              November 22, 2025, at Motor City Casino. With our 11th DevFest, we
              aim to put together a great day of networking and knowledge
              sharing for all involved.
            </p>
            <a
              href="https://www.papercall.io/midevfest2025"
              target="_blank"
              className="flex items-center px-8 py-5 bg-sky-900 rounded shadow-xl transition duration-100 ease-in-out delay-75 text-primary-400 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
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
