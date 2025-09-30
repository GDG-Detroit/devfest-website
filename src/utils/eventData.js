import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'
import { SpeakersData as Speakers2023 } from '@/data/2023/speakers'
import { sponsorsData as Sponsors2024 } from '@/data/2024/sponsors'

const EVENT_YEARS = {
  2024: {
    speakers: Speakers2024,
    sponsors: Sponsors2024,
  },
  2023: {
    speakers: Speakers2023,
    sponsors: [],
  },
}

export const getAvailableYears = () => {
  return Object.keys(EVENT_YEARS)
    .map(Number)
    .sort((a, b) => b - a)
}

export const getEventData = (year) => {
  return EVENT_YEARS[year] || null
}

export const getSpeakersData = (year) => {
  const eventData = getEventData(year)
  return eventData?.speakers || null
}

export const getSponsorsData = (year) => {
  const eventData = getEventData(year)
  return eventData?.sponsors || null
}

export const getEventMetadata = (year) => {
  const speakers = getSpeakersData(year)
  const sponsors = getSponsorsData(year)

  if (!speakers) {
    return {
      year,
      speakerCount: 0,
      sessionCount: 0,
      tracks: [],
      available: false,
    }
  }

  const tracks = [
    ...new Set(
      speakers.map((speaker) => speaker.session?.track).filter(Boolean)
    ),
  ]

  return {
    year,
    speakerCount: speakers.length,
    sessionCount: speakers.filter((speaker) => speaker.session).length,
    tracks,
    available: true,
    sponsorsCount: sponsors?.length ?? 0,
  }
}

export const getAllEventsMetadata = () => {
  const years = getAvailableYears()
  return years.map((year) => getEventMetadata(year))
}

export const isYearDataComplete = (year) => {
  const eventData = getEventData(year)
  return eventData && eventData.speakers && eventData.speakers.length > 0
}

export const getMostRecentYear = () => {
  const years = getAvailableYears()
  return years.length > 0 ? years[0] : null
}
