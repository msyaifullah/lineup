"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ColorPicker } from "@/components/ui/color-picker"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

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
  >("4-4-2")
  const [selectedPlayerCount, setSelectedPlayerCount] = React.useState<
    string | undefined
  >("11")

  const [position, setPosition] = React.useState<{ x: number; y: number }[]>([])

  const [color, setColor] = React.useState<string>("#ff0f0f")
  const [flip, setFlip] = React.useState<boolean>(false)

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
      isYellowCard?: boolean
      isRedCard?: boolean
      image?: string
    }[]
  >([
    { name: "Player 1", number: 1, isCaptain: true },
    { name: "Player 2", number: 2, image: "/placeholder.svg" },
    { name: "Player 3", number: 3, isYellowCard: true },
    { name: "Player 4", number: 4, isSubstituted: true },
    {
      name: "Neymar",
      number: 5,
      nationality: "BR",
      rating: 4.5,
      position: "MF",
      isManOfTheMatch: true,
      isSubstituted: true,
    },
    { name: "Player 6", number: 6 },
    { name: "Player 7", number: 7 },
    { name: "Player 8", number: 8 },
    { name: "Player 9", number: 9 },
    { name: "Player 10", number: 10 },
    { name: "Player 11", number: 11 },
  ])

  React.useEffect(() => {
    setPosition(
      FORMATION[Number(selectedPlayerCount)].find(
        (preset) => preset.name === selectedPreset
      )?.positions || []
    )
  }, [selectedPlayerCount, selectedPreset])

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <Label htmlFor="select-player">Select Player</Label>
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
          <SelectTrigger className="mb-2 w-[180px]">
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
      </div>

      {selectedPlayerCount && (
        <div className="flex flex-row gap-2 items-center">
          <Label htmlFor="select-player">Select Formation</Label>
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
            <SelectTrigger className=" mb-2 w-[180px]">
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
        </div>
      )}

      <div className="flex flex-row gap-2 items-center">
        <Label htmlFor="color-background">color background</Label>
        <ColorPicker
          id="color-background"
          onChange={(v) => {
            setColor(v)
          }}
          value={color}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Label htmlFor="airplane-mode">Flip</Label>
        <Switch id="airplane-mode" checked={flip} onCheckedChange={setFlip} />
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          style={{ color: color }}
        >
          Simple, Formation {selectedPreset}
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>

      {position.length > 0 && selectedPlayerCount && (
        <div className="flex w-full justify-center  rounded-lg border p-10 ">
          <div
            className="relative h-[660px] w-[450px] rounded-lg border-2 border-gray-300"
            style={{ color: color }}
          >
            {PLAYERS.find(
              (preset) => preset.name === selectedPlayerCount
            )?.player.map((value) => (
              <div
                key={value}
                className="absolute flex size-[70px] items-center justify-center rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                style={{
                  transform: `translate(${position[value].x - 35}px, ${position[value].y - 35}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="absolute  right-[-10px] top-0">
                  {athlete[value]?.rating && (
                    <span className="text-xs"> {athlete[value]?.rating}</span>
                  )}
                </div>

                <div className="">
                  {athlete[value]?.number && (
                    <span className="text-xl"> {athlete[value]?.number}</span>
                  )}
                </div>

                <div className="absolute bottom-0 right-[-10px] flex items-end">
                  {athlete[value]?.isCaptain && (
                    <span className="text-xs"> (C) </span>
                  )}
                  {athlete[value]?.isManOfTheMatch && (
                    <span className="text-xs"> M </span>
                  )}
                  {athlete[value]?.isSubstituted && (
                    <span className="text-xs"> S </span>
                  )}
                </div>

                <div className="absolute bottom-[-30px] flex flex-row ">
                  <div>
                    {athlete[value]?.nationality && (
                      <span className="text-xs">
                        {" "}
                        [{athlete[value]?.nationality}]
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-xs">
                      {athlete[value]?.name ?? value}
                    </span>
                  </div>

                  <div>
                    {athlete[value]?.position && (
                      <span className="text-xs">
                        {" "}
                        ({athlete[value]?.position})
                      </span>
                    )}
                  </div>
                </div>
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
