"use client"

import React, { useEffect, useState } from 'react' 
import { NavItem } from './NavItem'
import { useRouter } from 'next/navigation'
import { Button } from '../Button'
import { IoClose } from 'react-icons/io5'
interface MobileNavProps {
  showNav: boolean
  navList: any
  setShowNav: (value: boolean)=> void
}

export const MobileNav = ({showNav, navList, setShowNav}: MobileNavProps) => {
    const router = useRouter()
    const [show, setShow] = useState(showNav)

    
  return(
    <div className={`lg:hidden block w-screen h-screen fixed top-0 left-0 bg-white z-50  text-xl transition duration-500 origin-top transform ${show?"scale-100":"scale-0"}`}>
        <div className='font-[family-name:var(--font-title)] grid grid-cols-2 grid-rows-2 h-[calc(100%_-_10em)]'>
            {navList.map((item: any)=>{
                    return <NavItem key={item.label} label={item.label} path={item.path} onClick={()=> router.push(`${item.path}`)} 
                            lgTextClr={item.lgTextClr} bgClr={item.bgClr} textClr={item.textClr} animate={item.animate}/>
            })}
        </div>
        <div className='w-max h-max absolute top-3 right-3 z-50'>
            <Button icon={IoClose} onClick={()=> setShowNav(false)} navBtn/>
        </div>
        <div className='w-2/3 mx-auto font-bold h-[10em] flex items-center justify-center lg:hidden'>
            <Button label="LinkedIn" defauBtn/>
        </div>
    </div>
  )
}
