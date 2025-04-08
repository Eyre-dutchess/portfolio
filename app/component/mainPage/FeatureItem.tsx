"use client"

import React from 'react' 
import { Img } from '../Img'
interface FeatureItemProps {
  src: string
  position: string
}

export const FeatureItem = ({src, position}: FeatureItemProps) => {
  return(
    <div className={`absolute top-[5%] left-[10%] w-[80%] h-[90%] rounded-md overflow-hidden
            ${position && position}  transition`}>
        <Img src={src} />
    </div>
  )
}
