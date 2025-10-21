import { useState, useEffect, useRef } from 'react'
import DevLogo from '@/assets/images/icn-dev.png'
import { teamData } from '@/data/team'
import ProfileCard from '@/components/ui/ProfileCard'
import CloseIcon from '@/components/ui/CloseIcon'

const TeamSection = () => {
  const [selectedBio, setSelectedBio] = useState(null)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedBio) {
        setSelectedBio(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedBio])

  // Focus management and body scroll lock
  useEffect(() => {
    if (selectedBio) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'

      // Focus the close button when modal opens
      closeButtonRef.current?.focus()
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedBio])

  const teamCount = teamData.length

  return (
    <section
      id="devteam"
      className=" bg-primary-50 p-8 sm:px-10 md:px-14 lg:px-16"
    >
      <div className="flex w-full justify-center pt-0">
        <h2 className="mb-4 w-full text-center font-russell text-4xl text-black md:mb-6 md:text-5xl lg:text-6xl">
          DevFest Team
        </h2>
        <img
          src={DevLogo}
          alt=""
          className="h-10 sm:h-12 md:h-14 lg:h-16"
          loading="lazy"
        />
      </div>

      <div className="mx-auto flex max-w-full justify-center lg:mx-0">
        <p className="prose mt-6 max-w-2xl text-start text-lg/8 text-gray-600">
          Our team of {teamCount} includes GDG organizers, session facilitators,
          and web developers — a mix of university students and industry
          professionals from companies like IBM, Little Caesars, and tech
          entrepreneurs with deep expertise in the tech industry. Together, we
          are bringing <strong>DevFest Michigan</strong> to life.
        </p>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {teamData.map((dev) => (
              <ProfileCard
                key={`dev-${dev.id}`}
                name={dev.name}
                avatar={dev.avatar}
                organization={dev.organization}
                role={dev.role}
                devfest={dev.devfest}
                linkedin={dev.linkedin}
                github={dev.github}
                twitter={dev.twitter}
                onViewBio={
                  dev.bio
                    ? () => setSelectedBio({ name: dev.name, bio: dev.bio })
                    : undefined
                }
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Bio Modal */}
      {selectedBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="presentation"
          onClick={(e) => {
            // Only close if clicking the backdrop, not the modal content
            if (e.target === e.currentTarget) {
              setSelectedBio(null)
            }
          }}
        >
          <div
            ref={modalRef}
            className="relative max-w-lg rounded-lg bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <CloseIcon
              ref={closeButtonRef}
              onClick={() => setSelectedBio(null)}
              className="absolute right-4 top-4"
              label="Close dialog"
            />
            <h3
              id="modal-title"
              className="mb-4 pr-8 text-xl font-semibold text-gray-900"
            >
              {selectedBio.name}
            </h3>
            <p className="text-gray-700">{selectedBio.bio}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default TeamSection
