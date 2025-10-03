import PropTypes from 'prop-types'

import { SpeakerProvider } from '@/components/speakers/SpeakerContext'
import SpeakersContent from '@/components/speakers/SpeakersContent'

const SpeakersSection = ({
  speakersData = [],
  year = new Date().getFullYear(),
  defaultExpanded = true,
}) => {
  return (
    <SpeakerProvider speakersData={speakersData}>
      <SpeakersContent year={year} defaultExpanded={defaultExpanded} />
    </SpeakerProvider>
  )
}

SpeakersSection.propTypes = {
  speakersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      session: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        track: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        room: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  year: PropTypes.number,
  logo: PropTypes.string,
  defaultExpanded: PropTypes.bool,
}

export default SpeakersSection
