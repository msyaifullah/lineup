"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FORMATION, PLAYERS } from "./constant"

interface FormationProps extends React.HTMLAttributes<HTMLFormElement> {}

export function Formation({ className, ...props }: FormationProps) {
  const setPreset = (preset: string): void => {
    setSelectedPreset(preset)
  }

  const setPlayer = (preset: string): void => {
    setSelectedPlayerCount(preset)
  }

  const [selectedPreset, setSelectedPreset] = React.useState<
    string | undefined
  >("4-2-2")
  const [selectedPlayerCount, setSelectedPlayerCount] = React.useState<
    string | undefined
  >("11")

  const [position, setPosition] = React.useState<{ x: number; y: number }[]>([])

  const [athlete, setAthlete] = React.useState<
    {
      name: string
      number: number
      rating?: number
      nationality?: string
      position?: string
      isManOfTheMatch?: boolean
      isCaptain?: boolean
      isSubstituted?: boolean
    }[]
  >([
    { name: "Player 1", number: 1, isCaptain: true },
    { name: "Player 2", number: 2 },
    { name: "Player 3", number: 3 },
    { name: "Player 4", number: 4, isSubstituted: true },
    {
      name: "Neymar",
      number: 5,
      nationality: "BR",
      rating: 4.5,
      position: "MF",
      isManOfTheMatch: true,
    },
    { name: "Player 6", number: 6 },
    { name: "Player 7", number: 7 },
    { name: "Player 8", number: 8 },
    { name: "Player 9", number: 9 },
    { name: "Player 10", number: 10 },
    { name: "Player 11", number: 11 },
  ])

  return (
    <div>
      <Select
        defaultValue={selectedPlayerCount}
        onValueChange={(value) => {
          setPlayer(value)

          setPosition(
            FORMATION[Number(selectedPlayerCount)].find(
              (preset) => preset.name === value
            )?.positions || []
          )
        }}
      >
        <SelectTrigger className="mx-auto mb-2 w-[180px]">
          <SelectValue placeholder="Select Player..." />
        </SelectTrigger>
        <SelectContent>
          {PLAYERS.map((preset) => (
            <SelectItem key={preset.name} value={preset.name}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedPlayerCount && (
        <Select
          defaultValue={selectedPreset}
          onValueChange={(value) => {
            setPreset(value)
            setPosition(
              FORMATION[Number(selectedPlayerCount)].find(
                (preset) => preset.name === value
              )?.positions || []
            )
          }}
        >
          <SelectTrigger className="mx-auto mb-2 w-[180px]">
            <SelectValue placeholder="Select Formation..." />
          </SelectTrigger>
          <SelectContent>
            {FORMATION[selectedPlayerCount].map((preset) => (
              <SelectItem key={preset.name} value={preset.name}>
                {preset.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, Formation {selectedPreset}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      {position.length > 0 && selectedPlayerCount && (
        <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
          <div className="relative w-[450px] h-[660px] border-2 border-gray-300 rounded-lg">
            {PLAYERS.find(
              (preset) => preset.name === selectedPlayerCount
            )?.player.map((value) => (
              <div
                key={value}
                className="absolute w-[70px] h-[70px] bg-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                style={{
                  transform: `translate(${position[value].x - 35}px, ${position[value].y - 35}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                {athlete[value]?.name ?? value}
                {athlete[value]?.number && (
                  <span className="text-xs"> ({athlete[value]?.number})</span>
                )}
                {athlete[value]?.rating && (
                  <span className="text-xs"> ({athlete[value]?.rating})</span>
                )}
                {athlete[value]?.nationality && (
                  <span className="text-xs">
                    {" "}
                    ({athlete[value]?.nationality})
                  </span>
                )}
                {athlete[value]?.position && (
                  <span className="text-xs"> ({athlete[value]?.position})</span>
                )}
                {athlete[value]?.isCaptain && (
                  <span className="text-xs"> (C)</span>
                )}
                {athlete[value]?.isManOfTheMatch && (
                  <span className="text-xs"> (MTM)</span>
                )}
                {athlete[value]?.isSubstituted && (
                  <span className="text-xs"> (SUB)</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Wellprice is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </div>
  )
}
