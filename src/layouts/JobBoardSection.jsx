// JobBoardSection.jsx
// This is the Job Board section component for the DevFest website.
import PropTypes from 'prop-types'

import Kite from '@/assets/images/kite.png'
import { jobBoardData } from '@/data/jobboard'

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
          className="absolute right-2 top-6 h-12 sm:right-10 md:right-14 md:top-8 lg:right-16 lg:top-12 lg:h-16"
        />
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
                  ? "Don't forget to submit your resume so that our awesome sponsors can reach out to you in the future"
                  : `Make sure to visit ${company.name}'s careers page to find job openings and valuable opportunities`
              }
            >
              <div className="rounded-2xl bg-yellow-200 p-12 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
                {/* Circular logo container */}
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-20 w-20 object-contain"
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
