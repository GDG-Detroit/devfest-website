// JobBoardSection.jsx
// This is the Job Board section component for the DevFest website.
import PropTypes from 'prop-types'

import Kite from '@/assets/images/icn-kite.png'
import { jobBoardData } from '@/data/2025/jobboard'

const JobBoardSection = ({ year = new Date().getFullYear() }) => {
  const isCurrentYear = year === new Date().getFullYear()

  return (
    <section
      id="jobboard"
      className="flex flex-col justify-center bg-yellow-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="relative w-full pt-0">
        <h2 className="w-full text-center font-russell text-4xl text-black md:text-5xl lg:text-6xl">
          {year && !isCurrentYear ? `${year} ` : ''}Job Board
        </h2>
        <img
          src={Kite}
          alt=""
          className="absolute right-2 top-0 h-12 sm:right-10 md:right-14 md:top-0 lg:right-16 lg:top-0 lg:h-16"
        />
      </div>

      <div className="mx-auto mb-12 max-w-4xl">
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This job board is made possible by our generous sponsors, ranging from
          local Detroit organizations and regional companies to some of the
          world&apos;s best global tech companies. They voluntarily provide
          exclusive opportunities so you can grow your tech career. You can
          share your resume online, allowing sponsors from Google Developer
          Groups in Detroit to see your work and reach out about exciting job
          opportunities.
        </p>
      </div>

      {/* Job Board Grid - 3x2 layout */}
      <div className="mx-auto mt-8 max-w-4xl sm:mt-10 md:mt-14 lg:mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Cards */}
          {jobBoardData.map((company) => (
            <a
              key={company.id}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={
                company.name === 'Resume Drop'
                  ? 'Submit your resume at https://bit.ly/midevfest-resume-drop (opens in a new tab)'
                  : `Visit ${company.name}'s careers page at ${company.website} (opens in a new tab)`
              }
            >
              <div className="rounded-2xl bg-primary-200 p-12 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
                {/* Circular logo container */}
                <div className="mx-auto mb-6 flex size-36 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="size-24 object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Company name */}
                <h3 className="flex h-14 items-center justify-center text-center text-lg font-semibold text-gray-800">
                  {company.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

JobBoardSection.propTypes = {
  year: PropTypes.number,
}

export default JobBoardSection
