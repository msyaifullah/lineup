"use client"

import React, { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Athlete } from "./constant"
import { number } from "zod"

interface DraggableDivProps {
  value: number
  position: { x: number; y: number }[]
  athlete: Athlete[]
  setAthlete: React.Dispatch<React.SetStateAction<Athlete[]>>
}

const DraggableDiv: React.FC<DraggableDivProps> = ({ value, position, athlete, setAthlete }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState<boolean>(false)
  const [name, setName] = React.useState<string>("")
  const [shirtNumber, setShirtNumber] = React.useState<string>("0")

  const handleSubmit = (): void => {
    if (name && shirtNumber) {
      const newAthlete: Athlete = {
        name: name,
        number: parseInt(shirtNumber)        
      }
      setAthlete((prevstate) => [...prevstate, newAthlete])
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          ref={divRef}
          key={value}
          className="absolute flex size-[70px] items-center justify-center rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{
            transform: `translate(${position[value].x - 35}px, ${position[value].y - 35}px)`,
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
              <span className="text-xs">{athlete[value]?.name}</span>
            </div>

            <div>{athlete[value]?.position && <span className="text-xs"> ({athlete[value]?.position})</span>}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name"   value={name} onChange={(e) => setName(e.target.value)} className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value={shirtNumber} onChange={(e) => setShirtNumber(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DraggableDiv
