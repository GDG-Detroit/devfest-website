import PropTypes from 'prop-types'
import { useContext, useEffect, useRef } from 'react'

import SpeakerDetails from '@/components/speakers/SpeakerDetails'
import ProfileCard from '@/components/ui/ProfileCard'
import { SpeakerContext } from './SpeakerContext'

const SpeakerCard = ({
  avatar,
  bio,
  github,
  id,
  isGDE,
  isWTM,
  linkedin,
  mastodon,
  name,
  organization,
  position,
  sessionDescription,
  sessionTitle,
  track,
  twitter,
  url,
}) => {
  const { isModalOpen, openModal, closeModal, setSpeakerID, speakerID } =
    useContext(SpeakerContext)

  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)
  const scrollPosition = useRef(0)

  const open = () => {
    // Store the currently focused element before opening modal
    previousActiveElement.current = document.activeElement
    openModal()
    setSpeakerID(id)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  // Focus management and scroll lock for modal
  useEffect(() => {
    if (isModalOpen && id === speakerID) {
      // Store current scroll position
      scrollPosition.current =
        window.pageYOffset || document.documentElement.scrollTop

      // Lock body scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition.current}px`
      document.body.style.width = '100%'

      // Focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus()
      }

      return () => {
        // Restore body position and scroll
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''

        // Restore scroll position
        window.scrollTo(0, scrollPosition.current)

        // Return focus to the element that opened the modal
        if (previousActiveElement.current) {
          previousActiveElement.current.focus()
        }
      }
    }
  }, [isModalOpen, id, speakerID])

  return (
    <>
      <ProfileCard
        avatar={avatar}
        github={github}
        isGDE={isGDE}
        isWTM={isWTM}
        linkedin={linkedin}
        mastodon={mastodon}
        name={name}
        onViewDetails={open}
        organization={organization}
        position={position}
        track={track}
        twitter={twitter}
      />

      {isModalOpen && id === speakerID && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`speaker-modal-title-${id}`}
          aria-describedby={`speaker-modal-bio-${id}`}
          className="fixed inset-0 z-40 overflow-y-auto bg-black/60 backdrop-blur-sm dark:bg-black/80"
          tabIndex={-1}
          ref={modalRef}
          aria-label="Speaker details modal"
        >
          <button
            className="absolute inset-0 size-full cursor-default"
            onClick={handleOverlayClick}
            onKeyDown={handleKeyDown}
            aria-label="Close modal"
            tabIndex={-1}
          />
          <div className="pointer-events-none flex min-h-full items-center justify-center p-4">
            <div className="pointer-events-auto my-8">
              <SpeakerDetails
                avatar={avatar}
                bio={bio}
                id={id}
                isGDE={isGDE}
                isWTM={isWTM}
                mastodon={mastodon}
                name={name}
                organization={organization}
                onClose={closeModal}
                position={position}
                sessionDescription={sessionDescription}
                sessionTitle={sessionTitle}
                track={track}
                twitter={twitter}
                url={url}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

SpeakerCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string,
  github: PropTypes.string,
  id: PropTypes.number.isRequired,
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  linkedin: PropTypes.string,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  sessionDescription: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  track: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerCard
