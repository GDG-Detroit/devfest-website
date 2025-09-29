import DevLogo from '@/assets/images/dev-logo.png'
import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="flex flex-wrap items-center justify-center bg-primary-100 pb-10"
    >
      <div className="flex w-full pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <h2 className="mb-4 w-full text-center font-russell text-4xl md:mb-6 md:text-5xl lg:text-6xl">
          Dev Team
        </h2>
        <img src={DevLogo} alt="Dev Team" className="h-12 md:h-14 lg:h-16" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {devTeamData.map((dev, index) => (
          <DevTeamCard
            key={`dev-${index}`}
            id={index}
            name={dev.name}
            avatar={dev.avatar}
            linkedin={dev.linkedin}
            github={dev.github}
            organization={dev.organization}
            position={dev.position}
            university={dev.university}
            bio={dev.bio}
          />
        ))}
      </div>
    </section>
  )
}

export default DevTeamSection
