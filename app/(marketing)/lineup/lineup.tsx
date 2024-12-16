"use client"

import * as React from "react"

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

import { Athlete, FORMATION, formationHelper, PLAYERS } from "./constant"
import DraggableDiv from "./node"

interface FormationProps extends React.HTMLAttributes<HTMLFormElement> {}

export function Formation({ className, ...props }: FormationProps) {
  const [selectedPreset, setSelectedPreset] = React.useState<
    string | undefined
  >("4-4-2")

  const [selectedPlayerCount, setSelectedPlayerCount] = React.useState<
    string | undefined
  >("11")

  const [position, setPosition] = React.useState<{ x: number; y: number }[]>([])

  const [color, setColor] = React.useState<string>("#ff0f0f")
  const [flip, setFlip] = React.useState<boolean>(false)

  const [athlete, setAthlete] = React.useState<Athlete[]>([])

  const setPreset = (preset: string): void => {
    setSelectedPreset(preset)
  }

  const setPlayer = (preset: string): void => {
    setSelectedPlayerCount(preset)
  }

  React.useEffect(() => {
    if (selectedPreset) {
      setPosition(formationHelper(450, 660, selectedPreset, flip))
      setAthlete( a => a.reverse())
    }
  }, [selectedPreset, flip])

  return (
    <div>
      <div className="flex flex-row items-center gap-2">
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
        <div className="flex flex-row items-center gap-2">
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

      <div className="flex flex-row items-center gap-2">
        <Label htmlFor="color-background">color background</Label>
        <ColorPicker
          id="color-background"
          onChange={(v) => {
            setColor(v)
          }}
          value={color}
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <Label htmlFor="airplane-mode">Flip</Label>
        <Switch id="airplane-mode" checked={flip} onCheckedChange={setFlip} />
      </div>

      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          style={{ color: color }}
        >
          Formation {selectedPreset}
        </h2>
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
              <DraggableDiv
                value={value}
                position={position}
                athlete={athlete}
              />
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
