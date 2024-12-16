"use client"
import React, { useEffect, useRef, useState } from "react"

interface DraggableDivProps {
  initialX: number
  initialY: number
}

const DraggableDiv: React.FC<DraggableDivProps> = ({ initialX, initialY }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: initialX, y: initialY })

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const { x, y } = position

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - clientX
      const deltaY = event.clientY - clientY
      setPosition({ x: x + deltaX, y: y + deltaY })
    }

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.left = `${position.x}px`
      divRef.current.style.top = `${position.y}px`
    }
  }, [position])

  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        cursor: "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      Drag Me
    </div>
  )
}

export default DraggableDiv
