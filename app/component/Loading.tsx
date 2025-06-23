"use client"

import React from 'react'
import { HashLoader } from 'react-spinners'

const LoadingModal=()=> {
  return (
    <HashLoader size={120} color='blue' className=' font-bold'/>
  )
}
export default LoadingModal
