import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Macintosh from '../../public/Macintosh.jsx'

const MacintoshExplorer = () => {
  return (
    <Canvas style={{ width: '50%' }} className="explore_canvas">
      <OrbitControls />
      <Suspense fallback={null}>
        <Macintosh />
      </Suspense>
      <Environment preset="night" />
    </Canvas>
  )
}

export default MacintoshExplorer
