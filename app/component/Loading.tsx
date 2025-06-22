"use client"

import React from 'react'
import { MoonLoader } from 'react-spinners'

const LoadingModal=()=> {
  return (
    <MoonLoader size={40} color='orange' className='mt-40'/>
  )
}
export default LoadingModal