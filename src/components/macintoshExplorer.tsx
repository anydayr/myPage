import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Macintosh from '../../public/Macintosh.jsx'

const MacintoshExplorer = () => {
  return (
    <Canvas className="explore_canvas">
      <OrbitControls />
      <Suspense fallback={null}>
        <Macintosh />
      </Suspense>
      <Environment preset="night" />
    </Canvas>
  )
}

export default MacintoshExplorer
