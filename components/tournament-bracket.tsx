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
  <div className="m-2 w-96 leading-relaxed  relative with-connector">
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
  <div className="flex items-center w-96 m-2 p-1 leading-relaxed bg-sky-50 rounded-lg shadow-sm  relative with-connector with-bye">
    <div className="h-16 flex">
      <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors" onClick={() => {}}>
        <div className="flex items-center gap-3">
          <img src={"/placeholder.svg?height=32&width=32"} alt="dadada FC" className="w-8 h-8 object-contain" />
          <span className="font-medium">dadaa FC</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold w-6 text-center"> -</span>
        </div>
      </div>
    </div>
  </div>
)

export function TournamentBracket({ matches: initialMatches, rounds, onMatchUpdate }: TournamentBracketProps) {
  return (
    <div className="overflow-x-auto">
      <div className="w-dvw flex mr-3 mt-16">
        <div className="flex flex-1 flex-col justify-around mr-48 round">
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
        <div className="flex flex-1 flex-col justify-around mr-48 ml-5 round">
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
        </div>
        <div className="flex flex-1 flex-col justify-around mr-48 ml-5 round">
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
        </div>
        <div className="flex flex-1 flex-col justify-around mr-48 ml-5 round">
          <CardMatch />
          <CardMatch />
        </div>
        <div className="flex flex-1 flex-col justify-around mr-48 ml-5 round round-winner">
          <CardMatch />
        </div>
      </div>
    </div>
  )
}
