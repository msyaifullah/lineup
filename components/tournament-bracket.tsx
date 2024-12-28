"use client"

import { EditableMatchCard } from "./editable-match-card"

interface Team {
  name: string
  logo: string
  score?: number
  yellowCards?: number
  redCards?: number
}

interface Match {
  id: string
  round: number
  position: number
  homeTeam: Team
  awayTeam: Team
  time: string
  status?: string
}

interface TournamentBracketProps {
  matches: Match[]
  rounds: number
  onMatchUpdate: (matchId: string, homeTeam: Team, awayTeam: Team) => void
}

const CardMatch = () => (
  <div className="with-connector relative m-2  w-96 leading-relaxed">
    <div className="flex flex-col">
      <EditableMatchCard
        key={1}
        homeTeam={{
          name: "Garedam FC",
          logo: "/placeholder.svg?height=32&width=32",
        }}
        awayTeam={{
          name: "Jati Jaya FC",
          logo: "/placeholder.svg?height=32&width=32",
        }}
        time={"da"}
        status={"da"}
        onUpdate={(homeTeam, awayTeam) => {}}
        className="bg-sky-50"
      />
    </div>
  </div>
)

const CardMatchBye = () => (
  <div className="with-connector with-bye relative m-2 flex w-96 items-center rounded-lg bg-sky-50  p-1 leading-relaxed shadow-sm">
    <div className="flex h-16">
      <div className="flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors hover:bg-gray-100" onClick={() => {}}>
        <div className="flex items-center gap-3">
          <img src={"/placeholder.svg?height=32&width=32"} alt="dadada FC" className="size-8 object-contain" />
          <span className="font-medium">dadaa FC</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 text-center text-lg font-bold"> -</span>
        </div>
      </div>
    </div>
  </div>
)

export function TournamentBracket({ matches: initialMatches, rounds, onMatchUpdate }: TournamentBracketProps) {
  return (
    <div className="overflow-x-auto">
      <div className="mr-3 mt-16 flex w-dvw">
        <div className="round mr-48 flex flex-1 flex-col justify-around">
          <CardMatch />
          <CardMatch />
          <CardMatchBye />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
        </div>
        <div className="round ml-5 mr-48 flex flex-1 flex-col justify-around">
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
        </div>
        <div className="round ml-5 mr-48 flex flex-1 flex-col justify-around">
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
        </div>
        <div className="round ml-5 mr-48 flex flex-1 flex-col justify-around">
          <CardMatch />
          <CardMatch />
        </div>
        <div className="round round-winner ml-5 mr-48 flex flex-1 flex-col justify-around">
          <CardMatch />
        </div>
      </div>
    </div>
  )
}
