"use client"

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
  <div className="flex items-center w-96 m-2 p-1 leading-relaxed bg-slate-500  relative with-connector">
    <div className="h-16 flex flex-col">
      <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 "></span>
      Competitor
      <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 "></span>
      Competitor
    </div>
  </div>
)

const CardMatchBye = () => (
  <div className="flex items-center w-96 m-2 p-1 leading-relaxed bg-slate-500  relative with-connector with-bye">
    <div className="h-16 flex">
      <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 "></span>
      Competitor 3
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
