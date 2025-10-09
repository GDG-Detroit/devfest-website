import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'

function LocationSection() {
  return (
    <section
      id="location"
      className="flex h-auto items-center justify-center bg-slate-100 py-16 text-black md:py-28"
      aria-labelledby="location-heading"
    >
      <div className="mx-4 flex flex-col space-y-8 sm:mx-6 lg:mx-8">
        {/* When Section */}
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="mx-2 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500">
              <FaClock className="h-6 w-6 text-white" aria-hidden="true" />
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
                className="block"
              >
                Friday: 9:00 AM - 9:00 PM
              </time>
              <time
                dateTime="2025-11-22T09:00:00-05:00/2025-11-22T17:00:00-05:00"
                className="block"
              >
                Saturday: 9:00 AM - 5:00 PM
              </time>
            </div>
          </div>
        </div>

        {/* Friday Location Row */}
        <div className="flex w-full max-w-full flex-col pb-12 lg:flex-row lg:space-x-6">
          {/* Friday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500">
                <FaMapMarkerAlt
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Friday Location
              </h3>
            </div>
            <div className="ml-16">
              <h4 className="mb-2 text-base font-semibold text-gray-800">
                IBM Agentic AI Hackathon
              </h4>
              <p>Friday, November 21st - 9:00 AM - 9:00 PM</p>
              <dl>
                <dt className="sr-only">Venue</dt>
                <dd className="font-medium">
                  <strong>
                    Wayne State University - Saint Andrew&apos;s Memorial
                    Episcopal Church
                  </strong>
                </dd>
                <dt className="sr-only">Address</dt>
                <dd>
                  <address
                    className="not-italic"
                    aria-label="Hackathon venue address"
                  >
                    5105 Anthony Wayne Dr, Detroit, MI 48202
                  </address>
                </dd>
              </dl>
              <a
                href="https://www.google.com/maps/dir//Saint+Andrew's+Memorial+Episcopal+Church,+Detroit,+MI/@42.355556,-83.0730112,881m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8824d2a41779eb09:0xee199848d652faba!8m2!3d42.355556!4d-83.0730112!16s%2Fm%2F04f4ds4?entry=ttu"
                target="_blank"
                className="mb-4 mt-3 inline-flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to Wayne State University Saint Andrew's Memorial Episcopal Church (opens in new tab)"
              >
                GET HACKATHON DIRECTIONS
              </a>
            </div>
          </div>

          {/* Friday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700">
              Friday - Wayne State University Location
            </h4>
            <div className="">
              <iframe
                title="Wayne State University - Saint Andrew's Memorial Episcopal Church"
                className="aspect-[4/3]  rounded-lg border-8 border-sky-200"
                style={{
                  maxWidth: '95%',
                  width: '95%',
                  boxSizing: 'border-box',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d-83.0730112!3d42.355556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d2a41779eb09%3A0xee199848d652faba!2sSaint%20Andrew%27s%20Memorial%20Episcopal%20Church!5e1!3m2!1sen!2sus!4v1757466338342!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Saturday Location Row */}
        <div className="flex w-full max-w-full flex-col lg:flex-row lg:space-x-6">
          {/* Saturday Location Info */}
          <div className="mb-4 flex flex-col lg:mb-0 lg:w-1/2">
            <div className="mb-4 flex items-center">
              <div className="mx-2 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500">
                <FaMapMarkerAlt
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                Saturday Location
              </h3>
            </div>
            <div className="ml-16">
              <h4 className="mb-2 text-base font-semibold text-gray-800">
                Michigan DevFest Event
              </h4>
              <p>Saturday, November 22nd - 9:00 AM - 5:00 PM</p>
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
                className="mb-4 mt-3 inline-flex items-center rounded bg-sky-900 px-8 py-5 text-primary-50 shadow-xl transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                rel="noreferrer"
                aria-label="Get directions to MotorCity Casino Hotel (opens in new tab)"
              >
                GET MOTOR CITY DIRECTIONS
              </a>
            </div>
          </div>

          {/* Saturday Map */}
          <div className="mx-2 w-full max-w-full overflow-hidden lg:w-1/2">
            <h4 className="mb-2 text-sm font-semibold text-gray-700">
              Saturday - MotorCity Casino Hotel Location
            </h4>
            <div className="">
              <iframe
                title="MotorCity Casino Hotel"
                className="aspect-[4/3] rounded-lg border-8 border-sky-200"
                style={{
                  maxWidth: '95%',
                  width: '95%',
                  boxSizing: 'border-box',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5043.696479671668!2d-83.07032016920797!3d42.33888511227875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4d71da8bb1%3A0xe4a8072514ccbe55!2sMotorCity%20Casino%20Hotel!5e1!3m2!1sen!2sus!4v1757466338342!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
