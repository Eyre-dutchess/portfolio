"use client"

import React from 'react'
import { IconType } from 'react-icons'

interface BtnProps{
    label?: string
    icon?: IconType
    onClick?: ()=> void
    navBtn?: boolean
    defauBtn?: boolean
}
export const Button: React.FC<BtnProps> = ({
    label, icon: Icon, onClick, navBtn,  defauBtn
}) => {
  return (
    <button onClick={onClick} className={` cursor-pointer transition duration-300 flex items-center justify-center 
            ${navBtn?"text-sky-600/75 p-2 rounded-sm hover:text-sky-200  hover:shadow-md hover:shadow-sky-200/50 lg:hidden":""}
            ${defauBtn?"w-full py-2 lg:py-3 rounded-md bg-sky-600/50 text-white/75  hover:bg-sky-600 hover:text-white hover:shadow-lg hover:shadow-sky-200/50":""}
    `}>
        {Icon && <Icon size={24}/>}
        {label}
    </button>
  )
}
