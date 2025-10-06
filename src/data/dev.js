import { devTeamData as devTeamData2025 } from '@/data/2025/dev'

export const devTeamData = devTeamData2025.map((dev, index) => ({
  ...dev,
  id: index + 1,
}))
