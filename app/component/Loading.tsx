"use client"

import React from 'react'
import { MoonLoader } from 'react-spinners'

const LoadingModal=()=> {
  return (
    <MoonLoader size={60} color='orange' className='w-screen h-screen flex items-center justify-center'/>
  )
}
export default LoadingModal
