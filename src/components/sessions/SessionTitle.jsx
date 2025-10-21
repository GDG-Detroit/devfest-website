import PropTypes from 'prop-types'

import Mic from '@/assets/images/Mic.svg'

const SessionTitle = (props) => {
  return (
    <div
      className="group relative flex size-28 cursor-pointer flex-row items-center justify-center rounded-full bg-blue-500 p-4 transition-all duration-300 ease-in-out hover:w-full hover:justify-start"
      title="View session title"
    >
      <img className="group-hover:ml-2" src={Mic} alt="Microphone Icon" />
      <div className="hidden overflow-hidden group-hover:block">
        <p className="text-lg text-gray-200">Talking About</p>
        <p className="overflow-x-scroll whitespace-nowrap text-xl font-bold text-white">
          {props.sessionTitle}
        </p>
      </div>
    </div>
  )
}

SessionTitle.propTypes = {
  sessionTitle: PropTypes.string.isRequired,
}

export default SessionTitle
