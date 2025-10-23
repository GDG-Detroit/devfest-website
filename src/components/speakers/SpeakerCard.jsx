import PropTypes from 'prop-types'
import { useContext, useEffect, useRef } from 'react'

import SpeakerDetails from '@/components/speakers/SpeakerDetails'
import ProfileCard from '@/components/ui/ProfileCard'
import { SpeakerContext } from './SpeakerContext'

const SpeakerCard = ({
  id,
  name,
  twitter,
  linkedin,
  avatar,
  organization,
  position,
  bio,
  sessionTitle,
  track,
  isGDE,
  isWTM,
  url,
}) => {
  const { isModalOpen, openModal, closeModal, setSpeakerID, speakerID } =
    useContext(SpeakerContext)

  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)

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

  // Focus management for modal
  useEffect(() => {
    if (isModalOpen && id === speakerID && modalRef.current) {
      // Focus the modal when it opens
      modalRef.current.focus()

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      return () => {
        // Restore body scroll when modal closes
        document.body.style.overflow = 'auto'

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
        name={name}
        avatar={avatar}
        organization={organization}
        position={position}
        track={track}
        twitter={twitter}
        linkedin={linkedin}
        onViewDetails={open}
        isGDE={isGDE}
        isWTM={isWTM}
      />

      {isModalOpen && id === speakerID && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`speaker-modal-title-${id}`}
          aria-describedby={`speaker-modal-bio-${id}`}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm dark:bg-black/80"
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
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="pointer-events-auto">
              <SpeakerDetails
                name={name}
                bio={bio}
                organization={organization}
                avatar={avatar}
                twitter={twitter}
                sessionTitle={sessionTitle}
                onClose={closeModal}
                position={position}
                id={id}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  bio: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  track: PropTypes.string,
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerCard
