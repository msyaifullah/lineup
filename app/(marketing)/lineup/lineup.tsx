"use client"

import * as React from "react"
import * as htmlToImage from "html-to-image"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/ui/color-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
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

  const [stripeWidth, setStripeWidth] = React.useState<number>(20)
  const [fieldHeight, setFieldHeight] = React.useState<number>(700)
  const [fieldWidth, setFieldWidth] = React.useState<number>(450)
  const [patternType, setPatternType] = React.useState<string>("horizontal")
  const [color1, setColor1] = React.useState<string>("#b6de4a")
  const [color2, setColor2] = React.useState<string>("#22c55e")
  const [color3, setColor3] = React.useState<string>("#f5f5f5")
  const [isPerspective, setIsPerspective] = React.useState<boolean>(false)
  const [perspectiveAngle, setPerspectiveAngle] = React.useState<number>(30)
  const pitchRef = React.useRef<HTMLDivElement>(null)

  const [screenShoot, setScreenShoot] = React.useState<string | null>(null)

  const setPreset = (preset: string): void => {
    setSelectedPreset(preset)
  }

  const setPlayer = (preset: string): void => {
    setSelectedPlayerCount(preset)
  }

  const handleDownload = async () => {
    if (pitchRef.current) {
      const image = await htmlToImage.toPng(pitchRef.current)

      // const link = document.createElement("a")
      // link.href = image
      // link.download = "football-pitch.png"
      // link.click()

      setScreenShoot(image)
    }
  }

  React.useEffect(() => {
    if (selectedPreset) {
      setPosition(formationHelper(fieldWidth, fieldHeight, selectedPreset, flip))
      setAthlete((a) => a.reverse())
    }
  }, [selectedPreset, flip, fieldHeight, fieldWidth])

  return (
    <>
      <div id="editor-preview" ref={pitchRef} className="flex flex-col items-center justify-center bg-slate-600">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          <div className="relative flex w-full justify-center  rounded-lg border p-10">
            <FootballField
              className="absolute"
              color1={color1}
              color2={color2}
              color3={color3}
              fieldHeight={`${fieldHeight}px`}
              fieldWidth={`${fieldWidth}px`}
              isPerspective={isPerspective}
              perspectiveAngle={perspectiveAngle}
              patternType={patternType}
              stripeWidth={stripeWidth}
            />

            <Formation
              selectedPreset={selectedPreset}
              selectedPlayerCount={selectedPlayerCount}
              position={position}
              color={color}
              athlete={athlete}
              height={`${fieldHeight}px`}
              width={`${fieldWidth}px`}
            />
          </div>
        </div>
      </div>
      <div id="menu">
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
        <div className="space-y-4">
          <RadioGroup value={patternType} onValueChange={setPatternType} className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="horizontal" id="horizontal" />
              <Label htmlFor="horizontal">Horizontal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vertical" id="vertical" />
              <Label htmlFor="vertical">Vertical</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="circular" id="circular" />
              <Label htmlFor="circular">Circular</Label>
            </div>
          </RadioGroup>
          <div className="space-y-2">
            <Label htmlFor="field-height">Field Height: {fieldHeight}px</Label>
            <Slider id="field-height" min={700} max={800} step={1} value={[fieldHeight]} onValueChange={(value) => setFieldHeight(value[0])} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stripe-width">Pattern Width: {stripeWidth}px</Label>
            <Slider id="stripe-width" min={5} max={50} step={1} value={[stripeWidth]} onValueChange={(value) => setStripeWidth(value[0])} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="perspective" checked={isPerspective} onCheckedChange={setIsPerspective} />
            <Label htmlFor="perspective">Enable Perspective</Label>
          </div>
          {isPerspective && (
            <div className="space-y-2">
              <Label htmlFor="perspective-angle">Perspective Angle: {perspectiveAngle}°</Label>
              <Slider id="perspective-angle" min={0} max={60} step={1} value={[perspectiveAngle]} onValueChange={(value) => setPerspectiveAngle(value[0])} />
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="color1">Color 1</Label>
              <div className="flex items-center space-x-2">
                <Input id="color1" type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="size-12 rounded p-1" />
                <Input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} className="grow" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color2">Color 2</Label>
              <div className="flex items-center space-x-2">
                <Input id="color2" type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="size-12 rounded p-1" />
                <Input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} className="grow" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color3">Color 3</Label>
              <div className="flex items-center space-x-2">
                <Input id="color3" type="color" value={color3} onChange={(e) => setColor3(e.target.value)} className="size-12 rounded p-1" />
                <Input type="text" value={color3} onChange={(e) => setColor3(e.target.value)} className="grow" />
              </div>
            </div>
          </div>
          <Button onClick={handleDownload} className="flex items-center space-x-2">
            <Download className="size-4" />
            <span>Download</span>
          </Button>
        </div>
      </div>
      <div id="editor-shown"> {screenShoot && <img src={screenShoot} />}</div>
    </>
  )
}
