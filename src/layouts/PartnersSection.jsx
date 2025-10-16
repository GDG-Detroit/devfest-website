import PropTypes from 'prop-types'

import Kite from '@/assets/images/icn-kite.png'

const PartnersSection = ({
  partnersData = {},
  year = new Date().getFullYear(),
}) => {
  const isCurrentYear = year === new Date().getFullYear()

  // Check if there's any partner data
  const hasPartners =
    (partnersData.platinum && partnersData.platinum.length > 0) ||
    (partnersData.diamond && partnersData.diamond.length > 0) ||
    (partnersData.gold && partnersData.gold.length > 0) ||
    (partnersData.organizations && partnersData.organizations.length > 0)

  const renderPartnerTier = (tierName, partners) => {
    if (!partners || partners.length === 0) return null

    return (
      <div className="mb-12">
        <h3 className="mb-6 text-center font-russell text-2xl text-black md:text-3xl">
          {tierName}
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <button
              key={partner.id}
              className="group relative flex justify-center p-4 transition-transform duration-200 hover:scale-105"
              onClick={() => window.open(partner.url, '_blank')}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 object-contain transition-opacity duration-200 group-hover:opacity-90"
                />
              ) : (
                <div className="flex h-24 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 px-6">
                  <p className="text-center text-lg font-semibold text-gray-700">
                    {partner.name}
                  </p>
                </div>
              )}
              <div className="invisible absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center overflow-y-hidden rounded bg-black/50 p-4 text-white backdrop-blur-sm transition-all duration-200 group-hover:visible">
                <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                  {partner.name}
                </h4>
                <p className="overflow-y-auto text-justify text-sm md:text-base">
                  {partner.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section
      id="partners"
      className="flex flex-col justify-center bg-white p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-between pt-0">
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          {year && !isCurrentYear ? `${year} ` : ''}Partners
        </h2>
        <img
          src={Kite}
          alt="Partners"
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
        />
      </div>

      <div className="mt-8 overflow-hidden transition-all duration-500 ease-in-out sm:mt-10 md:mt-14 lg:mt-16">
        {hasPartners ? (
          <>
            {renderPartnerTier('Platinum Sponsor', partnersData.platinum)}
            {renderPartnerTier('Diamond Sponsors', partnersData.diamond)}
            {renderPartnerTier('Gold Sponsors', partnersData.gold)}
            {renderPartnerTier('Organizations', partnersData.organizations)}

            {year && isCurrentYear && (
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:sponsors@midevfest.com"
                  className="rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  Become a Partner
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
            <p className="text-gray-600">
              {year && !isCurrentYear
                ? `No partner information available for ${year}.`
                : 'We are currently looking for partners for this event.'}
            </p>
            {year && isCurrentYear && (
              <a
                href="mailto:sponsors@midevfest.com"
                className="mb-4 mt-3 inline-flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Become a Partner
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

PartnersSection.propTypes = {
  partnersData: PropTypes.shape({
    platinum: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    diamond: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    gold: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
    organizations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tier: PropTypes.string.isRequired,
      })
    ),
  }),
  year: PropTypes.number,
}

export default PartnersSection
