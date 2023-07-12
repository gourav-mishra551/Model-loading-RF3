import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { Suspense } from 'react'
import Fox from './Fox'

export default function Experience()
{
    // const model = useLoader(GLTFLoader ,
    //      './hamburger.glb',
    //       (loader) => {
    //     const dracloader = new DRACOLoader()
    //     dracloader.setDecoderPath('./draco')
    //     loader.setDRACOLoader(dracloader)
    // } )
    const model = useGLTF('./hamburger.glb')
    return <>
        <Environment
        background
        files= ".\mossy_forest_2k.hdr"
        ground={ {
            height:7,
            radius:28,
            scale:100,
        }}
        />
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        

        {/* <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

        {/* we can use fallback funtion in Suspense if we want to something while our model is loading */}
        <Suspense>
        <primitive castShadow  object={model.scene} scale = {0.09} position-x = {-1} position-z = {8}/>
        </Suspense>
        <Fox/>
    </>
}