"use client"

import React, { useEffect, useRef, useState } from "react"

import { Athlete } from "./constant"

interface DraggableDivProps {
  value: number
  position: { x: number; y: number }[]
  athlete: Athlete[]
}

const DraggableDiv: React.FC<DraggableDivProps> = ({
  value,
  position,
  athlete,
}) => {
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={divRef}
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
        {athlete[value]?.isCaptain && <span className="text-xs"> (C) </span>}
        {athlete[value]?.isManOfTheMatch && (
          <span className="text-xs"> M </span>
        )}
        {athlete[value]?.isSubstituted && <span className="text-xs"> S </span>}
      </div>

      <div className="absolute bottom-[-30px] flex flex-row ">
        <div>
          {athlete[value]?.nationality && (
            <span className="text-xs"> [{athlete[value]?.nationality}]</span>
          )}
        </div>

        <div>
          <span className="text-xs">{athlete[value]?.name}</span>
        </div>

        <div>
          {athlete[value]?.position && (
            <span className="text-xs"> ({athlete[value]?.position})</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default DraggableDiv
