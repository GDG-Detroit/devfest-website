import PropTypes from 'prop-types'

import Kite from '@/assets/images/kite.png'

const SponsorsSection = ({
  sponsorsData = [],
  year = new Date().getFullYear(),
}) => {
  return (
    <section
      id="sponsors"
      className="flex flex-col justify-center p-8 sm:p-10 md:p-14 lg:p-16"
    >
      <div className="flex w-full justify-between px-8 sm:px-10 md:px-14 lg:px-16">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          {year && year !== new Date().getFullYear() ? `${year} ` : ''}Sponsors
        </header>
        <img src={Kite} alt="Sponsors" className="h-12 md:h-14 lg:h-16" />
      </div>

      <div className="overflow-hidden transition-all duration-500 ease-in-out">
        {sponsorsData && sponsorsData.length ? (
          <>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 md:mt-14 md:gap-14 lg:mt-16 lg:gap-16">
              {sponsorsData.map((sponsor) => (
                <button
                  key={sponsor.id}
                  className="group relative flex justify-center p-4 transition-transform duration-200 hover:scale-105"
                  onClick={() => window.open(sponsor.url, '_blank')}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-32 object-contain transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <div className="invisible absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center overflow-y-hidden rounded bg-black/50 p-4 text-white backdrop-blur-sm transition-all duration-200 group-hover:visible">
                    <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
                      {sponsor.name}
                    </h1>
                    <p className="overflow-y-auto text-justify text-sm md:text-base">
                      {sponsor.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            {year === new Date().getFullYear() && (
              <div className="mt-4 flex justify-center">
                <a
                  href="mailto:sponsors@michigandevfest.com"
                  className="rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  Become a Sponsor
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
            <p className="text-gray-600">
              {year && year !== new Date().getFullYear()
                ? `No sponsor information available for ${year}.`
                : 'We are currently looking for sponsors for this event.'}
            </p>
            {year === new Date().getFullYear() && (
              <a
                href="mailto:sponsors@midevfest.com"
                className="rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
              >
                Become a Sponsor
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

SponsorsSection.propTypes = {
  sponsorsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  year: PropTypes.number,
}

export default SponsorsSection
