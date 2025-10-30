import { SpeakersData as Speakers2024 } from '@/data/2024/speakers'
import { SpeakersData as Speakers2023 } from '@/data/2023/speakers'
import { sponsorsData as Sponsors2024 } from '@/data/2024/sponsors'
import { sponsorsData as Sponsors2023 } from '@/data/2023/sponsors'

const EVENT_YEARS = {
  2024: {
    speakers: Speakers2024,
    sponsors: Sponsors2024,
    team: null,
  },
  2023: {
    speakers: Speakers2023,
    sponsors: Sponsors2023,
    team: null,
  },
}

const loadLegacyTeamData = async (year) => {
  try {
    const [dev, organizers, facilitators] = await Promise.all([
      import(`@/data/${year}/dev.js`).catch(() => ({ default: [] })),
      import(`@/data/${year}/organizers.js`).catch(() => ({ default: [] })),
      import(`@/data/${year}/facilitators.js`).catch(() => ({ default: [] })),
    ])

    return [
      ...(dev.devTeamData || []).map((member, index) => ({
        ...member,
        id: `dev-${year}-${index}`,
        devfest: 'devteam',
      })),
      ...(organizers.organizersData || []).map((member, index) => ({
        ...member,
        id: `organizer-${year}-${index}`,
        devfest: 'organizer',
      })),
      ...(facilitators.facilitatorsData || []).map((member, index) => ({
        ...member,
        id: `facilitator-${year}-${index}`,
        devfest: 'facilitator',
      })),
    ]
  } catch (error) {
    console.warn(`No team data found for ${year}`)
    return []
  }
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

export const getTeamData = async (year) => {
  const eventData = getEventData(year)

  // If team.js exists, use that
  if (eventData?.team) {
    return eventData.team
  }

  // Otherwise, load and combine legacy files
  return await loadLegacyTeamData(year)
}

export const getEventMetadata = async (year) => {
  const speakers = getSpeakersData(year)
  const sponsors = getSponsorsData(year)
  const team = await getTeamData(year)

  if (!speakers) {
    return {
      available: false,
      sessionCount: 0,
      speakerCount: 0,
      teamCount: (await team) ? team.length : 0,
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
    teamCount: (await team) ? team.length : 0,
    tracks,
    year,
  }
}

export const getAllEventsMetadata = async () => {
  const years = getAvailableYears()
  return await Promise.all(years.map((year) => getEventMetadata(year)))
}

export const isYearDataComplete = (year) => {
  const eventData = getEventData(year)
  return eventData && eventData.speakers && eventData.speakers.length > 0
}

export const getMostRecentYear = () => {
  const years = getAvailableYears()
  return years.length > 0 ? years[0] : null
}
