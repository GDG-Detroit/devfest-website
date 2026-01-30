import DevLogo from '@/assets/images/icn-dev.png'
import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  const sortedDevTeamData = [...devTeamData].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <section
      id="devteam"
      className="flex flex-wrap items-center justify-center bg-primary-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-biorhyme text-4xl text-black md:mb-6 md:text-5xl lg:text-6xl">
          Dev Team
        </h2>
        <img
          src={DevLogo}
          alt="Dev Team"
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
          width={82}
          height={57}
        />
      </div>
      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {sortedDevTeamData.map((dev) => (
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
