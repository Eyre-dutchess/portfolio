"use client";
import React from 'react'
import LoadingModal from './component/Loading'

const Loading=()=> {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <LoadingModal />
    </div>
  )
}

export default Loading