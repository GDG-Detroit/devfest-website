import { FaMapPin, FaClock } from 'react-icons/fa6'

function LocationSection() {
  return (
    <section
      id="location"
      className="flex h-auto items-center justify-center bg-slate-100 py-16 text-black md:py-28 dark:bg-gray-900 dark:text-white"
      aria-labelledby="location-heading"
    >
      <div className="mx-4 flex flex-col space-y-8 sm:mx-6 lg:mx-8">
        {/* When Section */}
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
              <FaClock className="size-6 text-white" aria-hidden="true" />
            </div>
            <h2
              id="location-heading"
              className="text-lg font-biorhyme font-semibold md:text-xl lg:text-2xl"
            >
              When & Where
            </h2>
          </div>
        </div>
        <div className="flex justify-center pb-16">
          <div className="text-center">
            <div className="mt-2 space-y-1">
              <time
                dateTime="2026-02-28T08:00:00-05:00/2026-02-28T17:00:00-05:00"
                className="block text-xl font-semibold"
              >
                Saturday: 8:00 AM - 5:00 PM
              </time>
            </div>
          </div>
        </div>

        {/* Saturday Location Row */}
        <div className="flex w-full max-w-full flex-col lg:flex-row lg:space-x-6">
          {/* Saturday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
                <FaMapPin className="size-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Compass Detroit 2026
              </h3>
            </div>
            <div className="ml-16">
              <time dateTime="2026-02-28T08:00:00-05:00/2026-02-28T17:00:00-05:00">
                <p>Saturday, February 28th - 8:00 AM - 5:00 PM</p>
              </time>
              <dl>
                <dt className="sr-only">Venue</dt>
                <dd className="font-medium xl:whitespace-nowrap">
                  <strong>DTE</strong>
                </dd>
                <dt className="sr-only">Address</dt>
                <dd>
                  <address
                    className="not-italic xl:whitespace-nowrap"
                    aria-label="Main event venue address"
                  >
                    Need the address & map
                  </address>
                </dd>
              </dl>
              <a
                href=""
                target="_blank"
                className="mb-4 mt-3 inline-flex items-center whitespace-nowrap rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to DTE (opens in new tab)"
              >
                GET DTE DIRECTIONS
              </a>
            </div>
          </div>

          {/* Saturday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white">
              Saturday - DTE Location
            </h4>
            <div
              className="rounded-2xl border-4 border-blue-500 bg-white p-1"
              role="region"
              aria-label="Saturday location map"
					  >
			  <p className="text-center">Need the address & map</p>
              <iframe
                title="MotorCity Casino Hotel"
                aria-label="Map showing MotorCity Casino Hotel location"
                className="aspect-[4/3] rounded-xl border-4 border-white"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                src=""
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              >
                <p>
                  Interactive map showing MotorCity Casino Hotel location.
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
