import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { CgCloseO } from 'react-icons/cg'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import SessionTitle from '@/components/sessions/SessionTitle'
import TwitterHandle from '@/components/ui/TwitterHandle'
import { SpeakerContext } from './SpeakerContext'

function SpeakerDetails(props) {
  const { speakerID, setSpeakerID, numSpeakers } = useContext(SpeakerContext)
  const goLastSpeaker = () => {
    setSpeakerID((id) => (id - 1 <= 0 ? numSpeakers : id - 1))
  }
  const goNextSpeaker = () => {
    setSpeakerID(speakerID + 1 >= numSpeakers ? 1 : speakerID + 1)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        props.onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [props])

  return (
    <>
      <div className="relative flex w-5/6 flex-col justify-between space-y-2 bg-black px-12 py-8 lg:hidden">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={props.avatar} alt={`${props.name} speaker portrait`} />
            {props.twitter && <TwitterHandle handle={props.twitter} />}
          </div>
          <div>
            <h2
              id="speaker-modal-title"
              className="mt-3 text-center text-xl font-bold text-white"
            >
              {props.name}
            </h2>
            <h3 className="text-center font-semibold text-white">
              {props.organization}
            </h3>
          </div>
        </div>
        <div className="space-y-6">
          <div className="max-h-40 overflow-y-auto">
            <p className="text-justify text-sm font-normal text-white">
              {props.bio}
            </p>
          </div>
        </div>
        <div className="overflow-x-hidden rounded-lg bg-blue-500 p-2">
          <p className="text-sm text-gray-200 sm:text-lg">Talking About</p>
          <p className="overflow-x-scroll whitespace-nowrap font-bold text-white sm:text-xl">
            {props.sessionTitle}
          </p>
        </div>
        <button className="absolute right-3 top-0" onClick={props.onClose}>
          <CgCloseO className="h-8 w-8 text-blue-500" />
        </button>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 transition hover:scale-110"
          onClick={goLastSpeaker}
        >
          <IoChevronBack className="h-16 w-16 text-blue-500" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transition hover:scale-110"
          onClick={goNextSpeaker}
        >
          <IoChevronForward className="h-16 w-16 text-blue-500" />
        </button>
      </div>
      <div className="relative hidden h-5/6 w-5/6 bg-[url(@/assets/images/speaker-details-modal.png)] bg-cover bg-center lg:flex">
        <div className="relative w-5/12">
          <div className="absolute bottom-1/4 right-1/2 flex w-full translate-x-[60%] translate-y-[44%] flex-col items-center">
            <div className="relative w-3/5">
              <img src={props.avatar} alt={`${props.name} speaker portrait`} />
              {props.twitter && <TwitterHandle handle={props.twitter} />}
            </div>
            <div>
              <h1 className="mt-3 text-center text-4xl font-bold text-black">
                {props.name}
              </h1>
              <h3 className="text-center font-semibold text-black">
                {props.organization}
              </h3>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <div className="flex h-full flex-col justify-between space-y-6 px-20 pb-8 pt-72">
            <div className="max-h-80 overflow-y-auto">
              <p className="text-justify text-xl font-normal text-white">
                {props.bio}
              </p>
            </div>
            <SessionTitle sessionTitle={props.sessionTitle} />
          </div>
        </div>
        <button className="absolute right-6 top-6" onClick={props.onClose}>
          <CgCloseO className="h-14 w-14" />
        </button>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 transition hover:scale-110"
          onClick={goLastSpeaker}
        >
          <IoChevronBack className="h-28 w-28" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transition hover:scale-110"
          onClick={goNextSpeaker}
        >
          <IoChevronForward className="h-28 w-28 text-blue-500" />
        </button>
      </div>
    </>
  )
}

SpeakerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SpeakerDetails
