'use client'

import { useState } from 'react'
import { TournamentBracket } from '@/components/tournament-bracket'
import { EditableMatchCard } from '@/components/editable-match-card'
import '@/styles/tournament-bracket.css'

// Mock data for the tournament
const initialTournamentData = {
  id: '1',
  name: "Example Tournament",
  type: "Single Stage",
  format: "Single Elimination",
  matches: [
    // Round of 16
    {
      id: '1',
      round: 0,
      position: 0,
      homeTeam: {
        name: "Bali United",
        logo: "/placeholder.svg?height=32&width=32",
        score: 0
      },
      awayTeam: {
        name: "Persebaya Surabaya",
        logo: "/placeholder.svg?height=32&width=32",
        score: 0
      },
      time: "19:00",
      status: "HT"
    },
    {
      id: '2',
      round: 0,
      position: 1,
      homeTeam: {
        name: "UAE U17",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "Tajikistan U17",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "19:50",
    },
    {
      id: '3',
      round: 0,
      position: 2,
      homeTeam: {
        name: "Bali United",
        logo: "/placeholder.svg?height=32&width=32",
        score: 0
      },
      awayTeam: {
        name: "Persebaya Surabaya",
        logo: "/placeholder.svg?height=32&width=32",
        score: 0
      },
      time: "19:00",
      status: "HT"
    },
    {
      id: '4',
      round: 0,
      position: 3,
      homeTeam: {
        name: "UAE U17",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "Tajikistan U17",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "19:50",
    },
    // Add more matches for round of 16...

    // Quarter Finals
    {
      id: '9',
      round: 1,
      position: 0,
      homeTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "TBD",
    },
    {
      id: '10',
      round: 1,
      position: 1,
      homeTeam: {
        name: "TBD--",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "TBD",
    },
    // Add more matches for quarter finals...

    // Semi Finals
    {
      id: '13',
      round: 2,
      position: 0,
      homeTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "TBD",
    },

    // Final
    {
      id: '15',
      round: 3,
      position: 0,
      homeTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=32&width=32",
      },
      time: "TBD",
    },
  ]
}

export default function TournamentFixture({ params }: { params: { id: string } }) {
  const [tournamentData, setTournamentData] = useState(initialTournamentData)

  const handleMatchUpdate = (matchId: string, homeTeam: any, awayTeam: any) => {
    const updatedMatches = tournamentData.matches.map(match => 
      match.id === matchId ? { ...match, homeTeam, awayTeam } : match
    )
    setTournamentData({ ...tournamentData, matches: updatedMatches })
    // Here you would typically send an API request to update the match data in the backend
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{tournamentData.name}</h1>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>{tournamentData.type}</span>
            <span>•</span>
            <span>{tournamentData.format}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Tournament Bracket</h2>
          <TournamentBracket
            matches={tournamentData.matches}
            rounds={4} // Round of 16 -> Quarter Finals -> Semi Finals -> Final
            onMatchUpdate={handleMatchUpdate}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Latest Matches</h2>
          <div className="flex flex-col max-w-lg">
            {tournamentData.matches
              .filter(match => match.round === 0) // Show only current round matches
              .map(match => (
                <EditableMatchCard
                  key={match.id}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  time={match.time}
                  status={match.status}                  
                  onUpdate={(homeTeam, awayTeam) => handleMatchUpdate(match.id, homeTeam, awayTeam)}
                  className="bg-sky-50 my-2"
                />
              ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Sample Matches</h2>
          <div className="flex flex-col max-w-lg">
            <div>
              <a href="#round-1">Round 1</a>
              <a href="#round-2">Round 2</a>
              <a href="#round-3">Round 3</a>
              <a href="#round-4">Round 4</a>
              <a href="#round-5">Round 5</a>
            </div>

            
          </div>
        </div>

        
      </div>
    </div>
  )
}

