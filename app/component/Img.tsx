"use client"

import Image from 'next/image'
import React from 'react' 
interface ImgProps {
  src: string
}

export const Img = ({src}: ImgProps) => {
  return(
        <Image 
          alt='img'
          src={src}
          fill
          style={{objectFit:"cover", width:"100%",height:"100%"}}
         />
  )
}
