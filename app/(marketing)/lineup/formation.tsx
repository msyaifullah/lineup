"use client"

import * as React from "react"

import { Athlete, PLAYERS } from "./constant"
import DraggableDiv from "./node"

interface FormationProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string
  selectedPlayerCount: string | undefined
  selectedPreset: string | undefined
  position: { x: number; y: number }[]
  color: string
  width: string
  height: string
  athlete: Athlete[]
  setAthlete: React.Dispatch<React.SetStateAction<Athlete[]>>  
}

export function Formation({ className, ...props }: FormationProps) {
  return (
    <div className={className}>
      <div className="relative rounded-lg border-2 border-gray-300" style={{ color: props.color, height: props.height, width: props.width }}>
        {props.position.length > 0 && props.selectedPlayerCount && (
          <>
            {PLAYERS.find((preset) => preset.name === props.selectedPlayerCount)?.player.map((value) => (
              <DraggableDiv value={value} position={props.position} athlete={props.athlete} setAthlete={props.setAthlete} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
