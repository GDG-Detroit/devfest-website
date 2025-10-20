import DevLogo from '@/assets/images/icn-dev.png'
import { devTeamData } from '@/data/dev'
import LinkedInHandle from '@/components/ui/LinkedInHandle'
import GithubHandle from '@/components/ui/GithubHandle'
import TwitterHandle from '@/components/ui/TwitterHandleDev'

const DevTeamSection = () => {
  return (
    <section
      id="devteam"
      className="flex flex-wrap items-center justify-center bg-primary-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-russell text-4xl text-black md:mb-6 md:text-5xl lg:text-6xl">
          Dev Team
        </h2>
        <img
          src={DevLogo}
          alt=""
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
        />
      </div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="prose mt-6 text-lg/8 text-gray-600">
          We&apos;re a dynamic group of individuals who collaborated to deliver
          the best results for this event.
        </p>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-2  lg:mx-0 lg:max-w-none xl:grid-cols-3">
            {devTeamData.map((dev) => (
              <li
                key={`dev-${dev.id}`}
                className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
              >
                <div className="flex">
                  <div className="flex w-24 shrink-0 flex-col items-center">
                    <img
                      alt=""
                      src={dev.avatar}
                      className="size-24 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                    />
                    <div className="mt-2 flex gap-1">
                      {dev.linkedin && (
                        <LinkedInHandle
                          handle={dev.linkedin}
                          absolute={false}
                        />
                      )}
                      {dev.github && (
                        <GithubHandle handle={dev.github} absolute={false} />
                      )}
                      {dev.twitter && (
                        <TwitterHandle handle={dev.twitter} absolute={false} />
                      )}
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col items-start justify-center gap-2">
                    <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                      {dev.name}
                    </h3>
                    <p className="text-left text-sm/6 text-gray-600">
                      {dev.organization}
                    </p>
                    <p className="text-left text-sm/6 text-gray-600">
                      {dev.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DevTeamSection
