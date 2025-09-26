import PropTypes from 'prop-types'
import { createContext, useMemo, useState } from 'react'

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
})

export const SpeakerProvider = ({ children, speakersData = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [speakerID, setSpeakerID] = useState(0)
  const numSpeakers = useMemo(() => speakersData.length, [speakersData])
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const uniqueSpeakersSortedByFirstName = useMemo(
    () =>
      speakersData
        .filter(
          (speaker, index, self) =>
            index === self.findIndex((s) => s.email === speaker.email)
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [speakersData]
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
