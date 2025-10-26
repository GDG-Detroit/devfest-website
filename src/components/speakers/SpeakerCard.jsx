import PropTypes from 'prop-types'
import { useContext, useEffect, useRef } from 'react'

import SpeakerDetails from '@/components/speakers/SpeakerDetails'
import ProfileCard from '@/components/ui/ProfileCard'
import { SpeakerContext } from './SpeakerContext'

const SpeakerCard = ({
  avatar,
  bio,
  id,
  isGDE,
  isWTM,
  linkedin,
  mastodon,
  name,
  organization,
  position,
  sessionTitle,
  track,
  twitter,
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
        avatar={avatar}
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
                avatar={avatar}
                bio={bio}
                id={id}
                mastodon={mastodon}
                name={name}
                organization={organization}
                onClose={closeModal}
                position={position}
                sessionTitle={sessionTitle}
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
  id: PropTypes.number.isRequired,
  isGDE: PropTypes.bool,
  isWTM: PropTypes.bool,
  linkedin: PropTypes.string,
  mastodon: PropTypes.string,
  name: PropTypes.string.isRequired,
  organization: PropTypes.string,
  position: PropTypes.string,
  sessionTitle: PropTypes.string.isRequired,
  track: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default SpeakerCard
