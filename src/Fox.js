import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

const Fox = () => {
    const fox = useGLTF('./Fox/gltf/Fox.gltf')
    const animation = useAnimations(fox.animations , fox.scene)
    useEffect( ()=> {
        const action = animation.actions.Run
        action.play()
        window.setTimeout(()=> {
            animation.actions.Walk.play()
            animation.actions.Walk.crossFadeFrom(animation.actions.Run , 1)
        }, 3000)
        window.setTimeout(()=> {
            animation.actions.Survey.play()
            animation.actions.Walk.crossFadeFrom(animation.actions.Walk , 1)
        }, 4000)
    })
    
  return (
    
        <primitive object={fox.scene} scale = {0.04} position-y = {-1} position-x = {-1}/>
  
  )
}

export default Fox