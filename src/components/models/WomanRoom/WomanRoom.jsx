/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 womanRoom.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Woman_Room(props) {
  const { nodes, materials } = useGLTF('/models/womanRoom.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[3.95, 3.658, 8.713]} scale={[0.457, 0.663, 0.457]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.leaf} position={[3.881, 5.111, 9.195]} rotation={[1.991, -1.365, -0.046]} scale={[1, 1, 0.234]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['leaf.001']} position={[11.77, 7.201, -8.439]} rotation={[0.57, -1.218, -1.503]} scale={[1.333, 1.333, 0.312]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.004']} position={[11.614, 5.263, -9.069]} rotation={[0, 0.386, 0]} scale={[0.609, 0.884, 0.609]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['leaf.001']} position={[11.77, 7.201, -8.439]} rotation={[0.57, -1.218, -1.503]} scale={[1.333, 1.333, 0.312]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['leaf.002']} position={[11.082, 7.183, -8.784]} rotation={[3.097, -0.597, 0.967]} scale={[1.333, 1.333, 0.312]} />
      <mesh geometry={nodes.Cube140.geometry} material={materials.DESK} position={[-2.066, 2.103, -10.862]} scale={[1.217, 0.92, 1]} />
      <mesh geometry={nodes.Cube141.geometry} material={materials.bed} position={[5.095, 1.409, 2.401]} scale={[0.866, 0.783, 0.783]} />
      <mesh geometry={nodes.Cube143.geometry} material={materials.cabinet} position={[2.51, 10.214, -10.821]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube146.geometry} material={materials.DESK} position={[0.869, 3.713, -9.388]} scale={[1.261, 1, 1]} />
      <mesh geometry={nodes.Cube147.geometry} material={materials.book} position={[-1.119, 9.572, -10.717]} scale={[1.07, 0.785, 0.685]} />
      <mesh geometry={nodes.Cube148.geometry} material={materials.book} position={[0.826, 4.497, -8.271]} scale={[1.299, 0.461, 0.831]} />
      <mesh geometry={nodes.Cube154.geometry} material={materials.drawer} position={[13.049, 2.516, -4.589]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube155.geometry} material={materials.closet} position={[13.049, 8.343, 8.8]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube158.geometry} material={materials.black} position={[11.672, 4.766, -3.517]} scale={[0.414, 0.115, 0.507]} />
      <mesh geometry={nodes.Cube159.geometry} material={materials.drawer} position={[11.672, 6.189, -3.517]} scale={[0.414, 0.74, 0.507]} />
      <mesh geometry={nodes.Cube164.geometry} material={materials.black} position={[11.672, 5.503, -3.517]} scale={[0.078, 0.74, 0.095]} />
      <mesh geometry={nodes.Cube167.geometry} material={materials.chair} position={[3.295, 1.937, 7.502]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube169.geometry} material={materials.table} position={[-3.811, 1.168, 5.214]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube170.geometry} material={nodes.Cube170.material} position={[14.666, 9.888, 8.798]} rotation={[0, Math.PI / 2, 0]} scale={[1.637, 1.295, 0.166]} />
      <mesh geometry={nodes.Cube171.geometry} material={materials.cusion} position={[-2.653, 0.617, -1.189]} rotation={[0, Math.PI / 2, 0]} scale={[0.454, 1, 0.673]} />
      <mesh geometry={nodes.Cube172.geometry} material={materials.cusion} position={[-6.316, 0.621, 3.188]} rotation={[0, Math.PI / 2, 0]} scale={[0.454, 1, 0.673]} />
      <mesh geometry={nodes.Cube177.geometry} material={materials['Material.066']} position={[15.056, 7.977, -0.325]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-7.65, -0.308, -14.467]} />
      <group position={[-2.899, 2.454, 3.807]} scale={[0.35, 0.391, 0.35]}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.floor} position={[15.056, 7.977, -0.325]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-7.65, -0.308, -14.467]} />
    </group>
  )
}

useGLTF.preload('/models/womanRoom.gltf')
