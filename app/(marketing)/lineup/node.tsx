"use client"

import React, { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Athlete } from "./constant"

interface DraggableDivProps {
  value: number
  position: { x: number; y: number }[]
  athlete: Athlete[]
  setAthlete: React.Dispatch<React.SetStateAction<Athlete[]>>
}

interface Coordinates {
  x: number
  y: number
}

const DraggableDiv: React.FC<DraggableDivProps> = ({ value, position, athlete, setAthlete }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState<boolean>(false)
  const [name, setName] = React.useState<string>("")
  const [shirtNumber, setShirtNumber] = React.useState<string>("0")
  const [pos, setPos] = React.useState<Coordinates>({ x: position[value].x, y: position[value].y })

  const handleSubmit = (): void => {
    if (name && shirtNumber) {
      setAthlete((prevstate) => {
        const newData = [...prevstate]
        newData[value] = { name: name, number: parseInt(shirtNumber) }
        return newData
      })
      setOpen(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(data) => {
        setOpen(data)
      }}
    >
      <DialogTrigger asChild>
        <div
          ref={divRef}
          key={value}
          className={cn(
            "absolute flex size-[70px] items-center justify-center rounded-full",
            "hover:cursor-pointer",
            "bg-slate-50 outline-4 outline-double outline-blue-500",
            (athlete[value].name === "" || athlete[value].number === 0) && "bg-black opacity-45 outline-4 outline-dashed"
          )}
          style={{
            transform: `translate(${pos.x - 35}px, ${pos.y - 35}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="absolute  right-[-10px] top-0">{athlete[value]?.rating && <span className="text-xs"> {athlete[value]?.rating}</span>}</div>

          <div className="">{athlete[value]?.number && <span className="text-xl"> {athlete[value]?.number}</span>}</div>

          <div className="absolute bottom-0 right-[-10px] flex items-end">
            {athlete[value]?.isCaptain && <span className="text-xs"> (C) </span>}
            {athlete[value]?.isManOfTheMatch && <span className="text-xs"> M </span>}
            {athlete[value]?.isSubstituted && <span className="text-xs"> S </span>}
          </div>

          <div className="absolute bottom-[-30px] flex flex-row ">
            <div>{athlete[value]?.nationality && <span className="text-xs"> [{athlete[value]?.nationality}]</span>}</div>

            <div>
              <span className="text-xl">{athlete[value]?.name}</span>
            </div>

            <div>{athlete[value]?.position && <span className="text-xs"> ({athlete[value]?.position})</span>}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Profile</DialogTitle>
          <DialogDescription>Add to player profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Number
            </Label>
            <Input id="username" value={shirtNumber} onChange={(e) => setShirtNumber(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DraggableDiv
