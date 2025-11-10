import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

// default values for type sense
export const SpeakerContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  speakerID: 0,
  // eslint-disable-next-line no-unused-vars
  setSpeakerID: (_speakerID) => {},
  numSpeakers: 0,
  uniqueSpeakers: [],
  uniqueSpeakersSortedByFirstName: [],
})

export const SpeakerProvider = ({ children, speakersData = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [speakerID, setSpeakerID] = useState(0)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const uniqueSpeakers = speakersData.filter(
    (speaker, index, self) =>
      index === self.findIndex((s) => s.name === speaker.name)
  )

  const numSpeakers = uniqueSpeakers.length

  const uniqueSpeakersSortedByFirstName = [...uniqueSpeakers].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <SpeakerContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        speakerID,
        setSpeakerID,
        numSpeakers,
        uniqueSpeakers,
        uniqueSpeakersSortedByFirstName,
      }}
    >
      {children}
    </SpeakerContext.Provider>
  )
}

SpeakerProvider.propTypes = {
  children: PropTypes.node.isRequired,
  speakersData: PropTypes.arrayOf(PropTypes.object),
}
