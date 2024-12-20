"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function FootballField() {
  const [stripeWidth, setStripeWidth] = useState(20)
  const [fieldHeight, setFieldHeight] = useState(700)
  const [patternType, setPatternType] = useState("horizontal")
  const [color1, setColor1] = useState("#4ade80")
  const [color2, setColor2] = useState("#22c55e")
  const [color3, setColor3] = useState("#f5f5f5")
  const [isPerspective, setIsPerspective] = useState(false)
  const [perspectiveAngle, setPerspectiveAngle] = useState(30)

  const getBackgroundStyle = () => {
    if (patternType === "circular") {
      return `repeating-radial-gradient(
        circle,
        ${color1},
        ${color1} ${stripeWidth}px,
        ${color2} ${stripeWidth}px,
        ${color2} ${stripeWidth * 2}px
      )`
    } else {
      return `repeating-linear-gradient(
        ${patternType === "horizontal" ? "to bottom" : "to right"},
        ${color1},
        ${color1} ${stripeWidth}px,
        ${color2} ${stripeWidth}px,
        ${color2} ${stripeWidth * 2}px
      )`
    }
  }

  const getHeight = () => {
    return `${fieldHeight}px`
  }

  const fieldStyle = {
    background: getBackgroundStyle(),
    height: getHeight(),
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    transform: isPerspective ? `perspective(1000px) rotateX(${perspectiveAngle}deg)` : "none",
    transformOrigin: "center bottom",
  }

  const Field = (props: { stroke: string; height: string; width: string }) => (
    <svg width={props.width} height={props.height} viewBox="0 0 74 111">
      <g fill="none" stroke={props.stroke} stroke-width="0.3" transform="translate(3 3)">
        <path id="Border" d="M 0 0 h 68 v 105 h -68 Z" />
        <path id="Centre line" d="M 0 52.5 h 68" />
        <circle id="Centre circle" r="9.15" cx="34" cy="52.5" />
        <circle id="Centre mark" r="0.75" cx="34" cy="52.5" fill={props.stroke} stroke="none" />
        <g id="Penalty area">
          <path id="Penalty area line" d="M 13.84 0 v 16.5 h 40.32 v -16.5" />
          <path id="Goal area line" d="M 24.84 0 v 5.5 h 18.32 v -5.5" />
          <circle id="Penalty mark" r="0.75" cx="34" cy="10.94" fill={props.stroke} stroke="none" />
          <path id="Penalty arc" d="M 26.733027 16.5 a 9.15 9.15 0 0 0 14.533946 0" />
        </g>
        <use xlinkHref="#Penalty area" transform="rotate(180,34,52.5)" />
        <path id="Corner arcs" d="M 0 2 a 2 2 0 0 0 2 -2M 66 0 a 2 2 0 0 0 2 2M 68 103 a 2 2 0 0 0 -2 2M 2 105 a 2 2 0 0 0 -2 -2" />
      </g>
    </svg>
  )

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Customizable Football Field Patterns</h1>
      <div style={fieldStyle}>
        <Field stroke={color3} width="100%" height={`${fieldHeight}px`} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="color1">Color 1</Label>
            <div className="flex items-center space-x-2">
              <Input id="color1" type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-12 h-12 p-1 rounded" />
              <Input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} className="flex-grow" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="color2">Color 2</Label>
            <div className="flex items-center space-x-2">
              <Input id="color2" type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-12 h-12 p-1 rounded" />
              <Input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} className="flex-grow" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="color3">Color 3</Label>
            <div className="flex items-center space-x-2">
              <Input id="color3" type="color" value={color3} onChange={(e) => setColor3(e.target.value)} className="w-12 h-12 p-1 rounded" />
              <Input type="text" value={color3} onChange={(e) => setColor3(e.target.value)} className="flex-grow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
