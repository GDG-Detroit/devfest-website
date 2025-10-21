import { teamData as teamData2025 } from '@/data/2025/team'

export const teamData = teamData2025.map((dev, index) => ({
  ...dev,
  id: index + 1,
}))
