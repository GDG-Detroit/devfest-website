import Connector from '@/assets/images/icn-connect.png'
import GenericCard from '@/components/ui/GenericCard'
import { facilitatorsData } from '@/data/facilitators'

function FacilitatorsSection() {
  return (
    <section
      id="facilitators"
      className="flex flex-col justify-center bg-primary-100 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative w-full pt-0">
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          Facilitators
        </h2>
        <img
          src={Connector}
          alt="Facilitators"
          className="absolute right-2 top-6 h-10 sm:right-10 sm:h-12 md:right-14 md:top-8 md:h-14 lg:right-16 lg:top-12 lg:h-16"
          loading="lazy"
        />
      </div>
      <div className="mt-32 flex flex-wrap justify-center gap-20 sm:mt-36">
        {facilitatorsData.map((facilitator) => (
          <div
            key={facilitator.id}
            className="flex w-full justify-center sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4"
          >
            <GenericCard {...facilitator} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FacilitatorsSection
