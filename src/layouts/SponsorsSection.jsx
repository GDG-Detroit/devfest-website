import Kite from '@/assets/images/kite.png'
import { sponsorsData } from '@/data/sponsors'

function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="flex flex-col justify-center p-8 sm:p-10 md:p-14 lg:p-16"
    >
      <div className="relative w-full px-8 sm:px-10 md:px-14 lg:px-16">
        <h2 className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Sponsors
        </h2>
        <img
          src={Kite}
          alt="Sponsors"
          className="absolute right-2 top-0 h-10 sm:right-10 sm:h-12 md:right-14 md:h-14 lg:right-16 lg:h-16"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 md:mt-14 md:gap-14 lg:mt-16 lg:gap-16">
        {sponsorsData.map((sponsor) => (
          <button
            key={sponsor.id}
            className="group relative flex justify-center p-4"
            onClick={() => window.open(sponsor.url, '_blank')}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-32 object-contain"
            />
            <div className="invisible absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center overflow-y-hidden rounded bg-black/50 p-4 text-white group-hover:visible">
              <h1 className="text-2xl font-semibold md:text-3xl">
                {sponsor.name}
              </h1>
              <p className="overflow-y-scroll text-justify text-sm md:text-base">
                {sponsor.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default SponsorsSection
