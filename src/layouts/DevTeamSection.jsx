import DevLogo from '@/assets/images/dev-logo.png'
import DevTeamCard from '@/components/dev/DevTeamCard'
import { devTeamData } from '@/data/dev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="flex flex-wrap justify-center items-center pb-10 bg-primary-100"
    >
      <div className="flex flex-col items-center pt-6 w-full sm:flex-row sm:justify-between sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="mb-4 text-4xl text-center font-russell md:mb-6 md:text-5xl lg:text-6xl">
          Dev Team
        </header>
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
