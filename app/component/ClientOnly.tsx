"use client"
import React, { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

export const ClientOnly = ({children}: ClientOnlyProps) => {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [])
    if(!mounted){
        return null
    }
  return(
    <div>
        {children}
    </div>
  )
}
