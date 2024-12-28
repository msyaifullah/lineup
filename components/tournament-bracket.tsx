"use client"

import { useState } from "react"

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

export function TournamentBracket({ matches: initialMatches, rounds, onMatchUpdate }: TournamentBracketProps) {
  

  return (
    <div className="flex mr-3 mt-16">
      <ol className="flex flex-1 flex-col justify-around mr-5 round">
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector with-bye">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
      </ol>
      <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <li id="round-2" className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative from-bye with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
      </ol>
      <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <li id="round-3" className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
      </ol>
      <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <li id="round-4" className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
        <li className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
      </ol>
      <ol className="flex flex-1 flex-col justify-around mr-5 ml-5 round round-winner">
        <li id="round-5" className="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span className="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          Competitor
        </li>
      </ol>
    </div>
  )
}
