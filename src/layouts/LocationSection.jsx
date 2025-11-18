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
              className="text-lg font-semibold md:text-xl lg:text-2xl"
            >
              When & Where
            </h2>
          </div>
        </div>
        <div className="flex justify-center pb-16">
          <div className="text-center">
            <div className="mt-2 space-y-1">
              <time
                dateTime="2025-11-21T09:00:00-05:00/2025-11-21T21:00:00-05:00"
                className="block text-xl font-semibold"
              >
                Friday: 9:00 AM - 9:00 PM
              </time>
              <time
                dateTime="2025-11-22T09:00:00-05:00/2025-11-22T17:00:00-05:00"
                className="block text-xl font-semibold"
              >
                Saturday: 8:00 AM - 5:00 PM
              </time>
            </div>
          </div>
        </div>

        {/* Friday Location Row */}
        <div className="flex w-full max-w-full flex-col pb-12 lg:flex-row lg:space-x-6">
          {/* Friday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
                <FaMapPin className="size-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Friday Location
              </h3>
            </div>
            <div className="ml-16">
              <h4 className="mb-2 text-base font-semibold text-gray-800 dark:text-white">
                IBM Agentic AI Hackathon
              </h4>
              <p>Friday, November 21st - 9:00 AM - 9:00 PM</p>
              <dl>
                <dt className="sr-only">Venue</dt>
                <dd className="font-medium">
                  <strong>
                    STEM Innovation Learning Center (SILC) 7th Floor
                  </strong>
                </dd>
                <dt className="sr-only">Address</dt>
                <dd>
                  <address
                    className="not-italic"
                    aria-label="Hackathon venue address"
                  >
                    5048 Gullen Mall, Detroit, MI 48202
                  </address>
                </dd>
              </dl>
              <a
                href="https://www.google.com/maps/dir//5048+Gullen+Mall,+Detroit,+MI+48202/@42.3580,-83.0686,17z"
                target="_blank"
                className="mb-4 mt-3 inline-flex items-center whitespace-nowrap rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to STEM Innovation Learning Center (opens in new tab)"
              >
                GET HACKATHON DIRECTIONS
              </a>
            </div>
          </div>

          {/* Friday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white">
              Friday - STEM Innovation Learning Center (SILC)
            </h4>
            <div
              className="rounded-2xl border-4 border-purple-500 bg-white p-1"
              role="region"
              aria-label="Friday location map"
            >
              <iframe
                title="STEM Innovation Learning Center (SILC)"
                aria-label="Map showing STEM Innovation Learning Center (SILC) location"
                className="aspect-[4/3] rounded-xl border-4 border-white"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.3!2d-83.0686!3d42.3580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDIxJzI4LjgiTiA4M8KwMDQnMDYuOSJX!5e1!3m2!1sen!2sus!4v1757466338342!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              >
                <p>
                  Interactive map showing STEM Innovation Learning Center (SILC)
                  location.
                  <a
                    href="https://www.google.com/maps/dir//5048+Gullen+Mall,+Detroit,+MI+48202/@42.3580,-83.0686,17z"
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

        {/* Saturday Location Row */}
        <div className="flex w-full max-w-full flex-col lg:flex-row lg:space-x-6">
          {/* Saturday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
                <FaMapPin className="size-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Saturday Location
              </h3>
            </div>
            <div className="ml-16">
              <h4 className="mb-2 text-base font-semibold text-gray-800 dark:text-white">
                Michigan DevFest Event
              </h4>
              <p>Saturday, November 22nd - 8:00 AM - 5:00 PM</p>
              <dl>
                <dt className="sr-only">Venue</dt>
                <dd className="font-medium xl:whitespace-nowrap">
                  <strong>MotorCity Casino Hotel</strong>
                </dd>
                <dt className="sr-only">Address</dt>
                <dd>
                  <address
                    className="not-italic xl:whitespace-nowrap"
                    aria-label="Main event venue address"
                  >
                    2901 Grand River Ave, Detroit, MI 48201
                  </address>
                </dd>
              </dl>
              <a
                href="https://www.google.com/maps/dir//2901+Grand+River+Ave,+Detroit,+MI+48201/@42.3388889,-83.0703527,1162m/data=!3m2!1e3!5s0x883b2d527a607d6f:0xe075cfc124b83793!4m20!1m10!3m9!1s0x883b2d4d71da8bb1:0xe4a8072514ccbe55!2sMotorCity+Casino+Hotel!5m2!4m1!1i2!8m2!3d42.3388889!4d-83.0677778!16zL20vMDdtMmN3!3m8!1s0x883b2d4d71da8bb1:0xe4a8072514ccbe55!5m2!4m1!1i2!8m2!3d42.3388889!4d-83.0677778!16zL20vMDdtMmN3?entry=ttu"
                target="_blank"
                className="mb-4 mt-3 inline-flex items-center whitespace-nowrap rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to MotorCity Casino Hotel (opens in new tab)"
              >
                GET MOTOR CITY DIRECTIONS
              </a>
            </div>
          </div>

          {/* Saturday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white">
              Saturday - MotorCity Casino Hotel Location
            </h4>
            <div
              className="rounded-2xl border-4 border-blue-500 bg-white p-1"
              role="region"
              aria-label="Saturday location map"
            >
              <iframe
                title="MotorCity Casino Hotel"
                aria-label="Map showing MotorCity Casino Hotel location"
                className="aspect-[4/3] rounded-xl border-4 border-white"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5043.696479671668!2d-83.07032016920797!3d42.33888511227875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4d71da8bb1%3A0xe4a8072514ccbe55!2sMotorCity%20Casino%20Hotel!5e1!3m2!1sen!2sus!4v1757466338342!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              >
                <p>
                  Interactive map showing MotorCity Casino Hotel location.
                  <a
                    href="https://www.google.com/maps/dir//2901+Grand+River+Ave,+Detroit,+MI+48201/@42.3388889,-83.0703527,1162m/data=!3m2!1e3!5s0x883b2d527a607d6f:0xe075cfc124b83793!4m20!1m10!3m9!1s0x883b2d4d71da8bb1:0xe4a8072514ccbe55!2sMotorCity+Casino+Hotel!5m2!4m1!1i2!8m2!3d42.3388889!4d-83.0677778!16zL20vMDdtMmN3!3m8!1s0x883b2d4d71da8bb1:0xe4a8072514ccbe55!5m2!4m1!1i2!8m2!3d42.3388889!4d-83.0677778!16zL20vMDdtMmN3?entry=ttu"
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
