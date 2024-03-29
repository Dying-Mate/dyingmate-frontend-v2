/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 woman.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Woman(props) {
  const { nodes, materials } = useGLTF('/models/woman.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube145.geometry} material={materials.CHAIR} position={[0.783, 1.299, -3.544]} rotation={[-Math.PI, 1.119, -Math.PI]} scale={[0.206, 1.014, 0.206]} />
      <mesh geometry={nodes.Cube153.geometry} material={materials.woman} position={[1.262, 3.882, -4.694]} rotation={[Math.PI, -0.341, Math.PI]} scale={[0.846, 1.117, 0.727]} />
    </group>
  )
}

useGLTF.preload('/models/woman.gltf')
