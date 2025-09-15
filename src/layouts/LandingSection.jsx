//import detroitSkyline from '@/assets/images/Frame 2 - Detroit Skyline.png'

import date from '@/assets/images/date.png'
//import michiganDevFestLogoDark from '@/assets/images/devfest_logo_dark.png'
import DevFestLogo from '@/assets/images/DevFestLogo.png'

function LandingSection() {
  return (
    <section id="landing" className="mt-16">
      <div className="flex flex-wrap bg-black">
        <div className="w-full p-12 sm:w-1/2">
          <img
            className="w-full"
            src={DevFestLogo}
            alt="Michigan DevFest Logo"
          />
        </div>

        <div className="flex w-full flex-col justify-between bg-primary-400 sm:w-1/2">
          <div className="flex grow flex-col items-center justify-center space-y-8 p-10">
            <img className="w-3/4" src={date} alt="Date and Red Circle" />

            <p className="text-justify text-sm font-normal lg:text-base xl:text-lg">
              The Detroit and Ann Arbor Google Developer Groups (GDG) are
              teaming up once again to bring you the 9th Michigan DevFest on
              October 26, 2024, at the Little Caesar&apos;s Global. With our
              10th DevFest, we aim to put together a great day of networking and
              knowledge sharing for all involved.
            </p>
            <a
              href="https://www.papercall.io/midevfest2025"
              target="_blank"
              className="flex items-center rounded bg-sky-900 px-8 py-5 text-primary-400 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
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
