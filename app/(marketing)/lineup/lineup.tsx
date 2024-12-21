"use client"

import * as React from "react"

import { ColorPicker } from "@/components/ui/color-picker"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

import { Athlete, FORMATION, formationHelper, PLAYERS } from "./constant"
import FootballField from "./football-field"
import { Formation } from "./formation"

export default function Lineup() {
  const [selectedPreset, setSelectedPreset] = React.useState<string | undefined>("4-4-2")
  const [selectedPlayerCount, setSelectedPlayerCount] = React.useState<string | undefined>("11")
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
      setAthlete((a) => a.reverse())
    }
  }, [selectedPreset, flip])

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <FootballField>
          <Formation selectedPreset={selectedPreset} selectedPlayerCount={selectedPlayerCount} position={position} color={color} athlete={athlete} />
        </FootballField>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Label htmlFor="select-player">Select Player</Label>
        <Select
          defaultValue={selectedPlayerCount}
          onValueChange={(value) => {
            setPlayer(value)
            setPosition(FORMATION[Number(selectedPlayerCount)].find((preset) => preset.name === value)?.positions || [])
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
              setPosition(FORMATION[Number(selectedPlayerCount)].find((preset) => preset.name === value)?.positions || [])
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
    </>
  )
}
