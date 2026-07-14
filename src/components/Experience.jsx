import { Environment, Instance, Instances, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from "three"

const Experience = () => {

    const cubeRef = useRef(null)

    useFrame((state, delta) => {
        // cubeRef.current.rotation.y += delta

    })

    const dreiTexture = useTexture("https://images.unsplash.com/photo-1533468659570-9cc9354310e4?q=80&w=2634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    const texture = useLoader(
      THREE.TextureLoader, 
      "https://images.unsplash.com/photo-1496433998859-da21e208bd42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )

    const { matcap } = useTexture({
      matcap: "./matcap.png"
    })
1
    const model = useGLTF("./robot.glb")

    const handleClick = () => {
      cubeRef.current.material.color.set("green")
    }

  return (
    <>
      {/* <mesh onClick={handleClick} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial roughness={0.01} metalness={0.9} color={"red"} />
      </mesh> */}

      {/* <ambientLight intensity={3} color={"#fffff"} />

      <primitive object={model.scene} position={[0, -1, -4]} />

      <Environment files={"./envMap.hdr"} /> */}

      <Instances>
        <boxGeometry />
        <meshMatcapMaterial matcap={matcap} />
        {Array.from({length: 200}).map((_,i)=>{
        return <Instance
          key={i}
          position={[
            Math.random() * 50 - 25, 
            Math.random() * 10 - 5, 
            Math.random() * 50 - 25
          ]}
          scale={Math.random() * 0.5}
          />
        })}
      </Instances>
    </>
  );
};

export default Experience; 