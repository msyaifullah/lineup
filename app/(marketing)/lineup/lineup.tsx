"use client"

import * as React from "react"
import * as htmlToImage from "html-to-image"
import { Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/ui/color-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

import { Athlete, FORMATION, formationHelper, GET_ATHLETE, PLAYERS } from "./constant"
import FootballField from "./football-field"
import { Formation } from "./formation"

export default function Lineup() {
  const [teamName, setTeamName] = React.useState<string | undefined>("Team")

  const [selectedPreset, setSelectedPreset] = React.useState<string | undefined>("4-4-2")
  const [selectedPlayerCount, setSelectedPlayerCount] = React.useState<string | undefined>("11")
  const [position, setPosition] = React.useState<{ x: number; y: number }[]>([])
  const [color, setColor] = React.useState<string>("#ff0f0f")
  const [flip, setFlip] = React.useState<boolean>(false)
  const [athlete, setAthlete] = React.useState<Athlete[]>([])
  const [substitute, setSubstitute] = React.useState<Athlete[]>([])

  const [stripeWidth, setStripeWidth] = React.useState<number>(20)
  const [fieldHeight, setFieldHeight] = React.useState<number>(700)
  const [fieldWidth, setFieldWidth] = React.useState<number>(450)
  const [patternType, setPatternType] = React.useState<string>("horizontal")
  const [color1, setColor1] = React.useState<string>("#b6de4a")
  const [color2, setColor2] = React.useState<string>("#22c55e")
  const [color3, setColor3] = React.useState<string>("#f5f5f5")
  const [isPerspective, setIsPerspective] = React.useState<boolean>(false)
  const [perspectiveAngle, setPerspectiveAngle] = React.useState<number>(0)
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

      const link = document.createElement("a")
      link.href = image
      link.download = "football-pitch.png"
      link.click()
      // setScreenShoot(image)
    }
  }

  const handleDelete = async () => {
    setAthlete((prevData) => {
      const newData = [...prevData]
      newData.pop()
      return newData
    })
  }

  const handleAddAthlete = (): void => {
    const newAthlete: Athlete = {
      name: "Player",
      number: parseInt("0"),
    }
    setSubstitute((prevstate) => [...prevstate, newAthlete])
  }

  React.useEffect(() => {
    if (selectedPreset) {
      setPosition(formationHelper(fieldWidth, fieldHeight, selectedPreset, flip))
      setAthlete((a) => a.reverse())
    }
  }, [selectedPreset, flip, fieldHeight, fieldWidth])

  React.useEffect(() => {
    if (selectedPlayerCount) {
      setAthlete(GET_ATHLETE(parseInt(selectedPlayerCount!)))
    }
  }, [selectedPlayerCount])

  return (
    <>
      <div id="editor-preview" className="flex flex-col items-center justify-center ">
        <div className="mx-auto flex max-w-2xl space-x-4 p-4">
          <div
            ref={pitchRef}
            className={cn("relative flex w-full justify-center rounded-lg border p-10", "bg-gradient-to-t from-slate-700 from-10% via-slate-400 via-30% to-slate-900 to-90%")}
          >
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
              setAthlete={setAthlete}
              height={`${fieldHeight}px`}
              width={`${fieldWidth}px`}
              perspectiveAngle={perspectiveAngle}
              heightOri={fieldHeight}
            />
            <div className="absolute left-10 top-10">
              <h2 className="font-heading text-3xl italic leading-[1.1] sm:text-3xl md:text-6xl" style={{ color: color }}>
                {teamName}&nbsp;
              </h2>
              <h4 className="font-heading text-xl leading-[1.1]" style={{ color: color }}>
                {selectedPreset}&nbsp;
              </h4>
            </div>
          </div>
          <div className="flex w-full flex-col  rounded-lg border bg-slate-600 p-10">
            {athlete.length <= parseInt(selectedPlayerCount!) && <Button onClick={handleAddAthlete}>+</Button>}
            {athlete.map((at) => (
              <div className="flex flex-row">
                <div className="size-10 rounded-full bg-slate-200" />
                <div className="flex flex-col items-start justify-center px-2">
                  <div className="text-sm">{at.number}</div>
                  <div className="text-sm">{at.name}</div>
                </div>
                <Button onClick={handleDelete}>X</Button>
              </div>
            ))}

            {substitute.map((at) => (
              <div className="flex flex-row">
                <div className="size-10 rounded-full bg-slate-200" />
                <div className="flex flex-col items-start justify-center px-2">
                  <div className="text-sm">{at.number}</div>
                  <div className="text-sm">{at.name}</div>
                </div>
                <Button onClick={handleDelete}>X</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="menu">
        <div className="space-y-2">
          <Label htmlFor="input-name">Input Name</Label>
          <div className="flex items-center space-x-2">
            <Input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="grow" />
          </div>
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
