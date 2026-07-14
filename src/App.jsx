import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
     <div className="parent h-screen w-full">
      <Canvas camera={{position: [0, 6, 0], fov: 50 } }>
        <OrbitControls />
        <Experience />
      </Canvas>
     </div>
    </>
  )
}

export default App
