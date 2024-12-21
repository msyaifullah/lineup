"use client"

import { useEffect } from "react"
import { ScrollControls, SoftShadows, useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"

function Model(props) {
  const scroll = useScroll()
  const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const { ref, actions } = useAnimations(animations)
<<<<<<< HEAD
  useEffect(() => void (actions.jump!.reset().play().paused = true), [actions.jump])
  useFrame(
    () => (actions.jump!.time = actions.jump!.getClip().duration * scroll.offset)
  )
=======

  useEffect(() => void (actions.jump!.reset().play().paused = true), [])

  useFrame(() => (actions.jump!.time = actions.jump!.getClip().duration * scroll.offset))
>>>>>>> main
  return (
    <group {...props} ref={ref}>
      <primitive object={nodes.mixamorigHips} />

      <skinnedMesh
        castShadow
        receiveShadow
        geometry={
          //@ts-ignore
          nodes.Ch03.geometry
        }
        material={materials.Ch03_Body}
        skeleton={
          //@ts-ignore
          nodes.Ch03.skeleton
        }
      />
    </group>
  )
}

export default function Counter() {
  return (
    <div className="fixed top-0 z-10">
      <div className="h-dvh w-dvw">
<<<<<<< HEAD
        <Canvas
          shadows
          gl={{ antialias: false }}
          camera={{ position: [1, 0.5, 2.5], fov: 50 }}
        >
=======
        <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
>>>>>>> main
          <color attach="background" args={["#f0f0f0"]} />
          <fog attach="fog" args={["#f0f0f0", 0, 20]} />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
          <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
            <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          </ScrollControls>
          <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
            <planeGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.75} />
          </mesh>
          <SoftShadows size={40} samples={16} />
          <EffectComposer multisampling={4}>
            <TiltShift2 blur={1} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  )
}
