"use client"

import { useState } from "react"
import { Minus, Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface Team {
  name: string
  logo: string
  score?: number
  yellowCards?: number
  redCards?: number
}

interface EditableMatchCardProps {
  homeTeam: Team
  awayTeam: Team
  time: string
  status?: string
  className?: string
  onUpdate: (homeTeam: Team, awayTeam: Team) => void
}

export function EditableMatchCard({ homeTeam, awayTeam, time, status, className, onUpdate }: EditableMatchCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editingTeam, setEditingTeam] = useState<"home" | "away" | null>(null)
  const [editedHomeTeam, setEditedHomeTeam] = useState(homeTeam)
  const [editedAwayTeam, setEditedAwayTeam] = useState(awayTeam)

  const handleTeamClick = (team: "home" | "away") => {
    setEditingTeam(team)
    setIsEditing(true)
  }

  const handleSave = () => {
    onUpdate(editedHomeTeam, editedAwayTeam)
    setIsEditing(false)
    setEditingTeam(null)
  }

  const TeamScore = ({ team, setTeam }: { team: Team; setTeam: (team: Team) => void }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <img src={team.logo} alt={team.name} className="w-6 h-6 object-contain" />
        <span className="font-medium">{team.name}</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.score || 0
            setTeam({ ...team, score: Math.max(0, Math.min(30, data - 1)) })
          }}
        >
          <Minus />
          <span className="sr-only">Decrease</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-5xl font-bold tracking-tighter">{team.score || 0}</div>
          <div className="text-[0.70rem] uppercase text-muted-foreground">Score</div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.score || 0
            setTeam({ ...team, score: Math.max(0, Math.min(30, data + 1)) })
          }}
        >
          <Plus />
          <span className="sr-only">Increase</span>
        </Button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.yellowCards || 0
            setTeam({ ...team, yellowCards: Math.max(0, Math.min(30, data - 1)) })
          }}
        >
          <Minus />
          <span className="sr-only">Decrease</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-5xl font-bold tracking-tighter">{team.yellowCards || 0}</div>
          <div className="text-[0.70rem] uppercase text-muted-foreground">Yellow Card</div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.yellowCards || 0
            setTeam({ ...team, yellowCards: Math.max(0, Math.min(30, data + 1)) })
          }}
        >
          <Plus />
          <span className="sr-only">Increase</span>
        </Button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.redCards || 0
            setTeam({ ...team, redCards: Math.max(0, Math.min(30, data - 1)) })
          }}
        >
          <Minus />
          <span className="sr-only">Decrease</span>
        </Button>
        <div className="flex-1 text-center">
          <div className="text-5xl font-bold tracking-tighter">{team.redCards || 0}</div>
          <div className="text-[0.70rem] uppercase text-muted-foreground">Red Card</div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0 rounded-full"
          onClick={() => {
            const data = team.redCards || 0
            setTeam({ ...team, redCards: Math.max(0, Math.min(30, data + 1)) })
          }}
        >
          <Plus />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
    </div>
  )

  return (
    <div className={cn("rounded-lg shadow-sm", className)}>
      <div className="p-1 flex">
        <div className="flex flex-col items-center justify-center mx-4">
          <span className="text-sm font-medium">{time}</span>
          {status && <span className="text-xs text-red-500 font-medium mt-1">{status}</span>}
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors" onClick={() => handleTeamClick("home")}>
            <div className="flex items-center gap-3">
              <img src={homeTeam.logo} alt={homeTeam.name} className="w-8 h-8 object-contain" />
              <span className="font-medium">{homeTeam.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold w-6 text-center">{homeTeam.score ?? "-"}</span>
              {homeTeam.yellowCards && <span className="px-1 bg-yellow-400 text-xs font-bold rounded">{homeTeam.yellowCards}</span>}
              {homeTeam.redCards && <span className="px-1 bg-red-600 text-white text-xs font-bold rounded">{homeTeam.redCards}</span>}
            </div>
          </div>
          <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors" onClick={() => handleTeamClick("away")}>
            <div className="flex items-center gap-3">
              <img src={awayTeam.logo} alt={awayTeam.name} className="w-8 h-8 object-contain" />
              <span className="font-medium">{awayTeam.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold w-6 text-center">{awayTeam.score ?? "-"}</span>
              {awayTeam.yellowCards && <span className="px-1 bg-yellow-400 text-xs font-bold rounded">{awayTeam.yellowCards}</span>}
              {awayTeam.redCards && <span className="px-1 bg-red-600 text-white text-xs font-bold rounded">{awayTeam.redCards}</span>}
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Match Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {editingTeam === "home" ? <TeamScore team={editedHomeTeam} setTeam={setEditedHomeTeam} /> : <TeamScore team={editedAwayTeam} setTeam={setEditedAwayTeam} />}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
