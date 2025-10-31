import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'
import { SpeakersData as Speakers2023 } from '@/data/2023/speakers'
import { sponsorsData as Sponsors2024 } from '@/data/2024/sponsors'
import { sponsorsData as Sponsors2023 } from '@/data/2023/sponsors'
import { teamData as Team2024 } from '@/data/2024/team'
import { teamData as Team2023 } from '@/data/2023/team'

const EVENT_YEARS = {
  2024: {
    speakers: Speakers2024,
    sponsors: Sponsors2024,
    team: Team2024,
  },
  2023: {
    speakers: Speakers2023,
    sponsors: Sponsors2023,
    team: Team2023,
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

export const getTeamData = (year) => {
  const eventData = getEventData(year)
  return eventData?.team || null
}

export const getEventMetadata = (year) => {
  const speakers = getSpeakersData(year)
  const sponsors = getSponsorsData(year)
  const team = getTeamData(year)

  if (!speakers) {
    return {
      available: false,
      sessionCount: 0,
      speakerCount: 0,
      teamCount: team ? team.length : 0,
      tracks: [],
      year,
    }
  }

  const tracks = [
    ...new Set(
      speakers
        .map((speaker) => speaker.session?.track)
        .filter(Boolean)
        .map((track) => (track === 'Miscellaneous' ? 'Misc' : track))
    ),
  ]

  return {
    available: true,
    sessionCount: speakers.filter((speaker) => speaker.session).length,
    speakerCount: speakers.length,
    sponsorsCount: sponsors?.length ?? 0,
    teamCount: team ? team.length : 0,
    tracks,
    year,
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
