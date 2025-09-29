import Connector from '@/assets/images/connect.png'
import GenericCard from '@/components/ui/GenericCard'
import { facilitatorsData } from '@/data/facilitators'

function FacilitatorsSection() {
  return (
    <section
      id="facilitators"
      className="flex flex-col justify-center px-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <h2 className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Facilitators
        </h2>
        <img
          src={Connector}
          alt="Facilitators"
          className="h-12 md:h-14 lg:h-16"
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
