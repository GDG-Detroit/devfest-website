import Arrow from '@/assets/images/arrow.png'
import GenericCard from '@/components/ui/GenericCard'
import { organizersData } from '@/data/organizers'

function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="flex flex-col justify-center bg-primary-100"
    >
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Organizers
        </header>
        <img
          src={Arrow}
          alt="Organizers"
          className="h-8 -scale-x-100 md:h-10 lg:h-12"
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
