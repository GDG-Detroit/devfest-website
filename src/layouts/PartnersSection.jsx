import PropTypes from 'prop-types'

import Kite from '@/assets/images/icn-kite.png'
import CTAButton from '@/components/ui/CTAButton'

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

  const renderPartnerTier = (
    tierName,
    partners,
    isSideBySide = false,
    useFourColumns = false,
    useSingleColumn = false
  ) => {
    if (!partners || partners.length === 0) return null

    return (
      <div className="mb-12">
        <h3 className="mb-6 py-4 text-center font-russell text-5xl text-black">
          {tierName}
        </h3>
        <div
          className={`grid gap-8 ${
            useSingleColumn
              ? 'grid-cols-1 justify-items-center'
              : useFourColumns
                ? 'grid-cols-1 justify-items-stretch sm:grid-cols-2 md:grid-cols-2'
                : isSideBySide
                  ? 'grid-cols-1 justify-items-center sm:grid-cols-2'
                  : 'grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {partners.map((partner) => (
            <button
              key={partner.id}
              className="group relative flex justify-center p-4 transition-transform duration-200 hover:scale-105"
              onClick={() => partner.url && window.open(partner.url, '_blank')}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="size-full object-contain transition-opacity duration-200 group-hover:opacity-90"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-24 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 px-6">
                  <p className="text-center text-lg font-semibold text-gray-700">
                    {partner.name}
                  </p>
                </div>
              )}
              <div className="invisible absolute left-0 top-0 flex size-full flex-col items-center justify-center overflow-y-hidden rounded bg-sky-900/80 p-8 text-center text-white backdrop-blur-lg transition-all duration-200 group-hover:visible">
                <h4 className="mb-2 text-xl font-bold md:text-2xl">
                  {partner.name}
                </h4>
                <p className="overflow-y-auto text-left text-lg font-bold md:text-xl">
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
      <div className="relative w-full pt-0">
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          {year && !isCurrentYear ? `${year} ` : ''}Partners
        </h2>
        <img
          src={Kite}
          alt="Partners"
          className="absolute right-0 top-0 h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
        />
      </div>

      <div className="mx-auto mt-6 max-w-3xl text-left">
        <p className="text-base text-gray-700 md:text-lg">
          DevFest wouldn&apos;t be possible without the support of our amazing
          partners. Thank you for helping us create an unforgettable experience
          for the tech community.
        </p>
      </div>

      <div className="mt-8 overflow-hidden transition-all duration-500 ease-in-out sm:mt-10 md:mt-14 lg:mt-16">
        {hasPartners ? (
          <>
            {renderPartnerTier(
              'Platinum Sponsor',
              partnersData.platinum,
              false,
              false,
              true
            )}

            {/* Diamond and Gold sponsors side by side */}
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center">
                {renderPartnerTier(
                  'Diamond Sponsors',
                  partnersData.diamond,
                  true
                )}
              </div>
              <div className="flex flex-col items-center">
                {renderPartnerTier(
                  'Gold Sponsors',
                  partnersData.gold,
                  false,
                  true
                )}
              </div>
            </div>

            {renderPartnerTier('Organizations', partnersData.organizations)}

            <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
              <p className="text-gray-600">
                We are currently looking for partners for this event.
              </p>
              {year && isCurrentYear && (
                <CTAButton
                  href="mailto:sponsors@midevfest.com"
                  label="Become a Partner"
                  target="_self"
                />
              )}
            </div>
          </>
        ) : (
          <div className="col-span-1 my-8 flex flex-col items-center justify-center space-y-6 text-center text-lg leading-relaxed">
            <p className="text-gray-600">
              {year && !isCurrentYear
                ? `No partner information available for ${year}.`
                : 'We are currently looking for partners for this event.'}
            </p>
            {year && isCurrentYear && (
              <CTAButton
                href="mailto:sponsors@midevfest.com"
                label="Become a Partner"
                target="_self"
              />
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
