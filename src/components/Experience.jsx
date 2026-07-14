import React from 'react'

const Experience = () => {
  return (
    <>
      <group position={[0, 2, 0]}>
        <mesh position={[-1, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial color={"red"} />
        </mesh>

        <mesh position={[1, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial color={"green"} />
        </mesh>
      </group>
    </>
  );
};

export default Experience;