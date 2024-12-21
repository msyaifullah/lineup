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
}

export function Formation({ className, ...props }: FormationProps) {
  return (
    <div>
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl" style={{ color: props.color }}>
          Formation {props.selectedPreset}
        </h2>
      </div>

      {props.position.length > 0 && props.selectedPlayerCount && (
        <div className="flex w-full justify-center  rounded-lg border p-10 ">
          <div className="relative h-[660px] w-[450px] rounded-lg border-2 border-gray-300" style={{ color: props.color }}>
            {PLAYERS.find((preset) => preset.name === props.selectedPlayerCount)?.player.map((value) => (
              <DraggableDiv value={value} position={props.position} athlete={props.athlete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
