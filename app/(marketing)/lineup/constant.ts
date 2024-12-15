export interface Preset {
  name: string
  image: string
  label: string
  description: string
  positions: { x: number; y: number }[]
}

export interface Player {
  name: string
  image: string
  label: string
  description: string
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

export const PLAYERS: Player[] = [
  {
    name: "5",
    label: "5",
    description:
      "A classic formation with four defenders, four midfielders, and two strikers.",
    image: "https://example.com/images/4-4-2.png",
    player: [0, 1, 2, 3, 4],
  },
  {
    name: "7",
    label: "7",
    description:
      "A versatile formation with four defenders, three midfielders, and three forwards.",
    image: "https://example.com/images/4-3-3.png",
    player: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    name: "11",
    label: "11",
    description:
      "A defensive formation with three defenders, five midfielders, and two strikers.",
    image: "https://example.com/images/3-5-2.png",
    player: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
]

export const FORMATION: { 5: Preset[]; 7: Preset[]; 11: Preset[] } = {
  5: [
    {
      name: "2-0-2",
      label: "2-0-2",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 150, y: 200 },
        { x: 300, y: 200 },
        { x: 150, y: 400 },
        { x: 300, y: 400 },
      ],
    },
    {
      name: "2-1-1",
      label: "2-1-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 150, y: 200 },
        { x: 300, y: 200 },
        { x: 225, y: 300 },
        { x: 225, y: 400 },
      ],
    },
    {
      name: "1-2-1",
      label: "1-2-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 225, y: 200 },
        { x: 150, y: 300 },
        { x: 300, y: 300 },
        { x: 225, y: 400 },
      ],
    },
    {
      name: "1-1-2",
      label: "1-1-2",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 225, y: 200 },
        { x: 225, y: 300 },
        { x: 150, y: 400 },
        { x: 300, y: 400 },
      ],
    },
  ],
  7: [
    {
      name: "2-3-1",
      label: "2-3-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 150, y: 200 },
        { x: 300, y: 200 },
        { x: 112.5, y: 350 },
        { x: 225, y: 350 },
        { x: 337.5, y: 350 },
        { x: 225, y: 500 },
      ],
    },
    {
      name: "2-1-2-1",
      label: "2-1-2-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },
        { x: 150, y: 200 },
        { x: 300, y: 200 },
        { x: 225, y: 300 },
        { x: 150, y: 400 },
        { x: 300, y: 400 },
        { x: 225, y: 500 },
      ],
    },
    {
      name: "3-2-1",
      label: "3-2-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 112.5, y: 200 },
        { x: 225, y: 200 },
        { x: 337.5, y: 200 },

        { x: 150, y: 350 },
        { x: 300, y: 350 },

        { x: 225, y: 500 },
      ],
    },
    {
      name: "2-2-2",
      label: "2-2-2",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 150, y: 200 },
        { x: 300, y: 200 },

        { x: 150, y: 350 },
        { x: 300, y: 350 },

        { x: 150, y: 500 },
        { x: 300, y: 500 },
      ],
    },
    {
      name: "1-4-1",
      label: "1-4-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 225, y: 200 },

        { x: 90, y: 350 },
        { x: 180, y: 350 },
        { x: 270, y: 350 },
        { x: 360, y: 350 },

        { x: 225, y: 500 },
      ],
    },
    {
      name: "2-1-3",
      label: "2-1-3",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 150, y: 200 },
        { x: 300, y: 200 },

        { x: 225, y: 350 },

        { x: 112.5, y: 500 },
        { x: 225, y: 500 },
        { x: 337.5, y: 500 },
      ],
    },
    {
      name: "4-1-1",
      label: "4-1-1",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 225, y: 350 },

        { x: 225, y: 500 },
      ],
    },
  ],
  11: [
    {
      name: "4-4-2",
      label: "4-4-2",
      description:
        "A classic formation with four defenders, four midfielders, and two strikers.",
      image: "https://example.com/images/4-4-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 90, y: 350 },
        { x: 180, y: 350 },
        { x: 270, y: 350 },
        { x: 360, y: 350 },

        { x: 150, y: 500 },
        { x: 300, y: 500 },
      ],
    },
    {
      name: "4-3-3",
      label: "4-3-3",
      description:
        "A versatile formation with four defenders, three midfielders, and three forwards.",
      image: "https://example.com/images/4-3-3.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 112.5, y: 350 },
        { x: 225, y: 350 },
        { x: 337.5, y: 350 },

        { x: 112.5, y: 500 },
        { x: 225, y: 500 },
        { x: 337.5, y: 500 },
      ],
    },
    {
      name: "3-5-2",
      label: "3-5-2",
      description:
        "A defensive formation with three defenders, five midfielders, and two strikers.",
      image: "https://example.com/images/3-5-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 112.5, y: 200 },
        { x: 225, y: 200 },
        { x: 337.5, y: 200 },

        { x: 75, y: 350 },
        { x: 150, y: 350 },
        { x: 225, y: 350 },
        { x: 300, y: 350 },
        { x: 375, y: 350 },

        { x: 150, y: 500 },
        { x: 300, y: 500 },
      ],
    },
    {
      name: "4-2-3-1",
      label: "4-2-3-1",
      description:
        "A balanced formation with four defenders, two defensive midfielders, three attacking midfielders, and one striker.",
      image: "https://example.com/images/4-2-3-1.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 150, y: 300 },
        { x: 300, y: 300 },

        { x: 112.5, y: 400 },
        { x: 225, y: 400 },
        { x: 337.5, y: 400 },

        { x: 225, y: 500 },
      ],
    },
    {
      name: "5-3-2",
      label: "5-3-2",
      description:
        "A very defensive formation with five defenders, three midfielders, and two strikers.",
      image: "https://example.com/images/5-3-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 75, y: 200 },
        { x: 150, y: 200 },
        { x: 225, y: 200 },
        { x: 300, y: 200 },
        { x: 375, y: 200 },

        { x: 112.5, y: 350 },
        { x: 225, y: 350 },
        { x: 337.5, y: 350 },

        { x: 150, y: 500 },
        { x: 300, y: 500 },
      ],
    },
    {
      name: "3-4-3",
      label: "3-4-3",
      description:
        "An attacking formation with three defenders, four midfielders, and three forwards.",
      image: "https://example.com/images/3-4-3.png",
      positions: [
        { x: 225, y: 50 },

        { x: 112.5, y: 200 },
        { x: 225, y: 200 },
        { x: 337.5, y: 200 },

        { x: 90, y: 350 },
        { x: 180, y: 350 },
        { x: 270, y: 350 },
        { x: 360, y: 350 },

        { x: 112.5, y: 500 },
        { x: 225, y: 500 },
        { x: 337.5, y: 500 },
      ],
    },
    {
      name: "4-1-4-1",
      label: "4-1-4-1",
      description:
        "A defensive formation with four defenders, one defensive midfielder, four attacking midfielders, and one striker.",
      image: "https://example.com/images/4-1-4-1.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 225, y: 300 },

        { x: 90, y: 400 },
        { x: 180, y: 400 },
        { x: 270, y: 400 },
        { x: 360, y: 400 },

        { x: 225, y: 500 },
      ],
    },
    {
      name: "4-5-1",
      label: "4-5-1",
      description:
        "A defensive formation with four defenders, five midfielders, and one striker.",
      image: "https://example.com/images/4-5-1.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 75, y: 350 },
        { x: 150, y: 350 },
        { x: 225, y: 350 },
        { x: 300, y: 350 },
        { x: 375, y: 350 },

        { x: 225, y: 500 },
      ],
    },
    {
      name: "5-2-3",
      label: "5-2-3",
      description:
        "A defensive formation with five defenders, two defensive midfielders, and three attacking midfielders.",
      image: "https://example.com/images/5-2-3.png",
      positions: [
        { x: 225, y: 50 },

        { x: 75, y: 200 },
        { x: 150, y: 200 },
        { x: 225, y: 200 },
        { x: 300, y: 200 },
        { x: 375, y: 200 },

        { x: 150, y: 350 },
        { x: 300, y: 350 },

        { x: 112.5, y: 500 },
        { x: 225, y: 500 },
        { x: 337.5, y: 500 },
      ],
    },
    {
      name: "3-4-1-2",
      label: "3-4-1-2",
      description:
        "A balanced formation with three defenders, four midfielders, one attacking midfielder, and two strikers.",
      image: "https://example.com/images/3-4-1-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 112.5, y: 200 },
        { x: 225, y: 200 },
        { x: 337.5, y: 200 },

        { x: 90, y: 300 },
        { x: 180, y: 300 },
        { x: 270, y: 300 },
        { x: 360, y: 300 },

        { x: 225, y: 400 },

        { x: 150, y: 500 },
        { x: 300, y: 500 },
      ],
    },
    {
      name: "4-1-2-1-2",
      label: "4-1-2-1-2",
      description:
        "A balanced formation with four defenders, one defensive midfielder, two central midfielders, one attacking midfielder, and two strikers.",
      image: "https://example.com/images/4-1-2-1-2.png",
      positions: [
        { x: 225, y: 50 },

        { x: 90, y: 200 },
        { x: 180, y: 200 },
        { x: 270, y: 200 },
        { x: 360, y: 200 },

        { x: 225, y: 300 },

        { x: 150, y: 400 },
        { x: 300, y: 400 },

        { x: 225, y: 500 },

        { x: 150, y: 600 },
        { x: 300, y: 600 },
      ],
    },
  ],
}
