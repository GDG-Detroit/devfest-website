import Arrow from '@/assets/images/icn-arrow.png'
import GenericCard from '@/components/ui/GenericCard'
import { organizersData } from '@/data/organizers'

function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="flex flex-col justify-center bg-sky-100 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative flex w-full justify-between pt-0">
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          Organizers
        </h2>
        <img
          src={Arrow}
          alt="Organizers"
          className="h-6 -scale-x-100 sm:h-8 md:h-10 lg:h-12"
          loading="lazy"
        />
      </div>
      <div className="my-32 grid grid-cols-1 place-items-center gap-20 sm:grid-cols-2 lg:mt-36">
        {organizersData.map((organizer) => (
          <GenericCard
            key={organizer.id}
            onOpen={() => window.open(organizer.url, '_blank')}
            {...organizer}
          />
        ))}
      </div>
    </section>
  )
}

export default OrganizersSection
