import { useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from "three"

const Experience = () => {

    const cubeRef = useRef(null)

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta

    })

    const dreiTexture = useTexture("https://images.unsplash.com/photo-1533468659570-9cc9354310e4?q=80&w=2634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    const texture = useLoader(
      THREE.TextureLoader, 
      "https://images.unsplash.com/photo-1496433998859-da21e208bd42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial map={dreiTexture} />
      </mesh>
    </>
  );
};

export default Experience; 