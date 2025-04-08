"use client"

import React from 'react' 

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {
  return(
    <div className='w-full max-w-[2520px] mx-auto px-10 md:px-[calc(5vw_+_1em)] lg:px-[calc(4vw_+_0.75em)] xl:px-[calc(3vw_+_1em)]'>
        {children}
    </div>
  )
}
