"use client"

import { usePathname} from 'next/navigation'
import React from 'react' 

interface NavItemProps {
  label: string
  onClick: ()=> void
  path: string
  lgTextClr: string
  bgClr: string
  textClr: string
  animate: string
}

export const NavItem = ({label,  onClick, path, lgTextClr, bgClr, textClr, animate}: NavItemProps) => {
      
      const pathName = usePathname()
  return(
    <div onClick={onClick} className={`transition duration-200  h-full flex items-center justify-center cursor-pointer hover:scale-105 lg:hover:scale-100 lg:animate-none origin-left 
        ${pathName===path?`w-full ${lgTextClr}`:"w-[3em]"}
        ${animate && animate} ${textClr && textClr} ${bgClr && bgClr}`}>    
        <h3 className='lg:rotate-[90deg] whitespace-nowrap text-2xl'>{label}</h3> 
    </div>
  )
}
