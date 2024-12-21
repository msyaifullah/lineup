"use client"

import { ReactNode } from "react"

interface FootballFieldProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string
  children?: ReactNode
  patternType: string
  color1: string
  color2: string
  color3: string
  stripeWidth: number
  fieldHeight: number
  isPerspective: boolean
  perspectiveAngle: number
  pitchRef: React.RefObject<HTMLDivElement>
}

export default function FootballField({ className, ...props }: FootballFieldProps) {
  const getBackgroundStyle = () => {
    if (props.patternType === "circular") {
      return `repeating-radial-gradient(
        circle,
        ${props.color1},
        ${props.color1} ${props.stripeWidth}px,
        ${props.color2} ${props.stripeWidth}px,
        ${props.color2} ${props.stripeWidth * 2}px
      )`
    } else {
      return `repeating-linear-gradient(
        ${props.patternType === "horizontal" ? "to bottom" : "to right"},
        ${props.color1},
        ${props.color1} ${props.stripeWidth}px,
        ${props.color2} ${props.stripeWidth}px,
        ${props.color2} ${props.stripeWidth * 2}px
      )`
    }
  }

  const getHeight = () => {
    return `${props.fieldHeight}px`
  }

  const fieldStyle = {
    background: getBackgroundStyle(),
    height: getHeight(),
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    transform: props.isPerspective ? `perspective(1000px) rotateX(${props.perspectiveAngle}deg)` : "none",
    transformOrigin: "center bottom",
  }

  const FieldFootball = (props: { stroke: string; height: string; width: string }) => (
    <svg width={props.width} height={props.height} viewBox="0 0 74 111">
      <g fill="none" stroke={props.stroke} strokeWidth="0.3" transform="translate(3 3)">
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
      <div ref={props.pitchRef}>
        <div>{props.children}</div>
        <div style={fieldStyle}>
          <FieldFootball stroke={props.color3} width="100%" height={`${props.fieldHeight}px`} />
        </div>
      </div>
    </div>
  )
}
