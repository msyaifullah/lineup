export interface Preset {
  name: string
  image: string
  label: string
  description: string
}

export interface Athlete {
  name: string
  number: number
  rating?: number
  nationality?: string
  position?: string
  isManOfTheMatch?: boolean
  isCaptain?: boolean
  isSubstituted?: boolean
  isYellowCard?: boolean
  isRedCard?: boolean
  image?: string
}

export interface Player {
  name: string
  label: string
  player: number[]
}

export interface Team {
  coach: string
  athletes: string[]
}
export interface Club {
  name: string
  image: string
  label: string
  team: Team[]
  description: string
}

export const formationHelper = (width: number, height: number, formation: string, flip: boolean): { x: number; y: number }[] => {
  // Pre-calculate common values
  const horizontals = formation.split("-").map(Number)
  const vertical = horizontals.length
  const keeperPosition = { x: width / 2, y: flip ? height - 50 : 50 }

  // Initialize array with calculated size
  const totalPlayers = horizontals.reduce((sum, count) => sum + count, 0) + 1
  const result = new Array(totalPlayers)

  // Use single loop with index tracking
  let currentIndex = flip ? 0 : 1
  const positions = flip ? horizontals.reverse() : horizontals

  for (let i = 0; i < vertical; i++) {
    const playersInRow = positions[i]
    const rowWidth = width / (playersInRow + 1)
    const rowHeight = (height / (vertical + 1)) * (i + 1) + (flip ? -50 : +50)

    for (let j = 0; j < playersInRow; j++) {
      result[currentIndex++] = {
        x: rowWidth * (j + 1),
        y: rowHeight,
      }
    }
  }

  // Add keeper position
  if (flip) {
    result[totalPlayers - 1] = keeperPosition
  } else {
    result[0] = keeperPosition
  }

  return result
}

export const GET_ATHLETE = (max: number): Athlete[] => {
  const athletes: Athlete[] = []
  for (let index = 0; index < max; index++) {
    athletes.push({ name: "", number: 0 })
  }
  return athletes
}

export const PLAYERS: Player[] = [
  {
    name: "5",
    label: "5",
    player: [0, 1, 2, 3, 4],
  },
  {
    name: "7",
    label: "7",
    player: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    name: "11",
    label: "11",
    player: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
]

export const FORMATION: { 5: Preset[]; 7: Preset[]; 11: Preset[] } = {
  5: [
    {
      name: "2-0-2",
      label: "2-0-2",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "2-1-1",
      label: "2-1-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "1-2-1",
      label: "1-2-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "1-1-2",
      label: "1-1-2",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
  ],
  7: [
    {
      name: "2-3-1",
      label: "2-3-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "2-1-2-1",
      label: "2-1-2-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "3-2-1",
      label: "3-2-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "2-2-2",
      label: "2-2-2",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "1-4-1",
      label: "1-4-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "2-1-3",
      label: "2-1-3",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "4-1-1",
      label: "4-1-1",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
  ],
  11: [
    {
      name: "4-4-2",
      label: "4-4-2",
      description: "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
    },
    {
      name: "4-3-3",
      label: "4-3-3",
      description: "A versatile formation with four defenders, three midfielders, and three forwards.",
      image: "https://example.com/images/4-3-3.png",
    },
    {
      name: "3-5-2",
      label: "3-5-2",
      description: "A defensive formation with three defenders, five midfielders, and two strikers.",
      image: "https://example.com/images/3-5-2.png",
    },
    {
      name: "4-2-3-1",
      label: "4-2-3-1",
      description: "A balanced formation with four defenders, two defensive midfielders, three attacking midfielders, and one striker.",
      image: "https://example.com/images/4-2-3-1.png",
    },
    {
      name: "5-3-2",
      label: "5-3-2",
      description: "A very defensive formation with five defenders, three midfielders, and two strikers.",
      image: "https://example.com/images/5-3-2.png",
    },
    {
      name: "3-4-3",
      label: "3-4-3",
      description: "An attacking formation with three defenders, four midfielders, and three forwards.",
      image: "https://example.com/images/3-4-3.png",
    },
    {
      name: "4-1-4-1",
      label: "4-1-4-1",
      description: "A defensive formation with four defenders, one defensive midfielder, four attacking midfielders, and one striker.",
      image: "https://example.com/images/4-1-4-1.png",
    },
    {
      name: "4-5-1",
      label: "4-5-1",
      description: "A defensive formation with four defenders, five midfielders, and one striker.",
      image: "https://example.com/images/4-5-1.png",
    },
    {
      name: "5-2-3",
      label: "5-2-3",
      description: "A defensive formation with five defenders, two defensive midfielders, and three attacking midfielders.",
      image: "https://example.com/images/5-2-3.png",
    },
    {
      name: "3-4-1-2",
      label: "3-4-1-2",
      description: "A balanced formation with three defenders, four midfielders, one attacking midfielder, and two strikers.",
      image: "https://example.com/images/3-4-1-2.png",
    },
    {
      name: "4-1-2-1-2",
      label: "4-1-2-1-2",
      description: "A balanced formation with four defenders, one defensive midfielder, two central midfielders, one attacking midfielder, and two strikers.",
      image: "https://example.com/images/4-1-2-1-2.png",
    },
  ],
}
