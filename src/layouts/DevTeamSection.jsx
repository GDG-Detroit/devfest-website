import DevLogo from '@/assets/images/dev-logo.png'
import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="flex flex-wrap items-center justify-center bg-primary-100 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative w-full pt-0">
        <h2 className="mb-4 w-full text-center font-russell text-4xl md:mb-6 md:text-5xl lg:text-6xl">
          Dev Team
        </h2>
        <img
          src={DevLogo}
          alt="Dev Team"
          className="absolute right-2 top-6 h-10 sm:right-10 sm:h-12 md:right-14 md:top-8 md:h-14 lg:right-16 lg:top-12 lg:h-16"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {devTeamData.map((dev) => (
          <DevTeamCard
            key={`dev-${dev.id}`}
            id={dev.id}
            name={dev.name}
            avatar={dev.avatar}
            linkedin={dev.linkedin}
            github={dev.github}
            organization={dev.organization}
            position={dev.position}
            university={dev.university}
          />
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
