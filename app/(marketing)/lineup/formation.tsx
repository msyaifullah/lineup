"use client"

import * as React from "react"

import { Athlete, PLAYERS } from "./constant"
import DraggableDiv from "./node"

interface FormationProps extends React.HTMLAttributes<HTMLFormElement> {
  selectedPlayerCount: string | undefined
  selectedPreset: string | undefined
  position: { x: number; y: number }[]
  color: string
  athlete: Athlete[]
  width: string
  height: string
}

export function Formation({ className, ...props }: FormationProps) {
  return (
    <div className="flex w-full justify-center  rounded-lg border p-10 ">
      <div className="relative rounded-lg border-2 border-gray-300" style={{ color: props.color, height: props.height, width: props.width }}>
        {props.position.length > 0 && props.selectedPlayerCount && (
          <>
            {PLAYERS.find((preset) => preset.name === props.selectedPlayerCount)?.player.map((value) => (
              <DraggableDiv value={value} position={props.position} athlete={props.athlete} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
