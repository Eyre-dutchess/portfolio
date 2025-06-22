"use client"

import React from 'react'
import { MoonLoader } from 'react-spinners'

const LoadingModal=()=> {
  return (
    <MoonLoader size={120} color='orange' className=' font-bold'/>
  )
}
export default LoadingModal