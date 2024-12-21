"use client"

import { Suspense } from "react"
import {
  CameraControls,
  Environment,
  Fisheye,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useGLTF,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model({ url }) {
  //@ts-ignore
  const { nodes } = useGLTF(url)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </group>
  )
}

export default function RocketScene() {
  return (
    <div className="fixed top-0 z-10">
      <div className="h-dvh w-dvw">
        <Canvas dpr={[1.5, 2]} linear shadows>
          <fog attach="fog" args={["#272730", 16, 0]} />
          <ambientLight intensity={0.75} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={0.5} position={[-10, -25, -10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model url="/rocket.glb" />
          </Suspense>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars radius={500} depth={50} count={1000} factor={10} />
        </Canvas>
        <div className="layer" />
      <Loader />
      </div>
    </div>
  )
}
