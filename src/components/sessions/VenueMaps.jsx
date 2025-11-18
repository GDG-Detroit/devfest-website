import mapCasino from '@/assets/images/map-casino.webp'
import mapSoundboard from '@/assets/images/map-soundboard.webp'

function VenueMaps() {
  return (
    <section className="w-full py-8" aria-labelledby="venue-maps-heading">
      {/* Saturday Map - Casino */}
      <div>
        <h3
          id="venue-maps-heading"
          className="mb-4 text-base font-semibold text-gray-800 md:text-lg dark:text-white"
        >
          Saturday - MotorCity Casino Hotel
        </h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          Use these floor plans to navigate the venue and find session locations
          throughout MotorCity Casino Hotel and the Soundboard Theater.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <figure className="overflow-hidden rounded-lg">
            <div
              className="rounded-2xl border-4 border-blue-500 bg-white p-1"
              role="region"
              aria-label="MotorCity Casino Hotel venue map"
            >
              <img
                src={mapCasino}
                alt="Map of MotorCity Casino Hotel venue"
                className="w-full rounded-xl border-4 border-white bg-blue-50 object-cover"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-lg">
            <div
              className="rounded-2xl border-4 border-blue-500 bg-white p-1"
              role="region"
              aria-label="MotorCity Casino Hotel Soundboard Theater map"
            >
              <img
                src={mapSoundboard}
                alt="Map of MotorCity Casino Hotel Soundboard Theater"
                className="w-full rounded-xl border-4 border-white bg-blue-50 object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default VenueMaps
