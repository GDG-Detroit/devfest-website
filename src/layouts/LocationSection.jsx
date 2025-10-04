import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import config from '../../config.json'

function LocationSection() {
  return (
    <section
      id="location"
      className="flex h-auto items-center justify-center bg-slate-100 py-16 md:py-28"
    >
      <div className="flex flex-col lg:mb-0 lg:flex-row lg:space-x-10 xl:space-x-28">
        <div className="mb-4 lg:mb-0">
          <div className="flex items-center">
            <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
              <FaClock className="size-6 text-white" />
            </div>
            <span className="text-lg font-semibold md:text-xl lg:text-2xl">
              When
            </span>
          </div>
          <div className="ml-16">
            <time
              dateTime="2025-11-22T09:00:00-05:00"
              className="block whitespace-nowrap"
            >
              Saturday, November 22nd, {config.year}
            </time>
            <time
              dateTime="2025-11-22T09:00:00-05:00/2025-11-22T17:00:00-05:00"
              className="block"
            >
              9:00 AM - 5:00 PM
            </time>
          </div>
        </div>

        <div className="mb-4 flex flex-col lg:mb-0">
          <div className="flex items-center">
            <div className="mx-2 flex size-11 items-center justify-center rounded-full bg-yellow-500">
              <FaMapMarkerAlt className="size-6 text-white" />
            </div>
            <span className="text-lg font-semibold md:text-xl lg:text-2xl">
              Where
            </span>
          </div>
          <div className="ml-16">
            <dl>
              <dt className="sr-only">Venue</dt>
              <dd className="font-medium xl:whitespace-nowrap">
                <strong>MotorCity Casino Hotel</strong>
              </dd>
              <dt className="sr-only">Address</dt>
              <dd>
                <address
                  className="not-italic xl:whitespace-nowrap"
                  aria-label="Event venue address"
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
              GET DIRECTIONS
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <iframe
            title="MotorCity Casino Hotel"
            className="h-64 w-full lg:h-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5043.696479671668!2d-83.07032016920797!3d42.33888511227875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4d71da8bb1%3A0xe4a8072514ccbe55!2sMotorCity%20Casino%20Hotel!5e1!3m2!1sen!2sus!4v1757466338342!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
