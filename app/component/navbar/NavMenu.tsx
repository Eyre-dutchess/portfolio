"use client"

import React from 'react' 
import { useRouter } from 'next/navigation'

import { NavItem } from './NavItem'
import { Button } from '../Button'

interface NavMenuProps {
  showNav: boolean
  scrolled: boolean
}

const navList = [
  { label:"About Me",
    path:"/",
    lgTextClr:"lg:text-sky-900/0",
    bgClr:"bg-white",
    textClr:"text-sky-900",
    animate:"animate-Nav"
  },
  { label:"Entertainment",
    path:"/entertain",
    lgTextClr:"lg:text-white/0",
    bgClr:"bg-[var(--clr-orange)]",
    textClr:"text-white",
    animate:"animate-Nav-1"
  },
  { label:"Life Styles",
    path:"/lifestyle",
    lgTextClr:"lg:text-white/0",
    bgClr:"bg-[var(--clr-blue)]",
    textClr:"text-white",
    animate:"animate-Nav-2"
  },
  { label:"Easy Tools",
    path:"/easytool",
    lgTextClr:"lg:text-white/0",
    bgClr:"bg-[var(--clr-green)]",
    textClr:"text-white",
    animate:"animate-Nav-3"
  },
]
export const NavMenu = ({showNav, scrolled}: NavMenuProps) => {
    const router = useRouter()

  return(
    <div className={`${showNav?"block":"hidden"} lg:block w-screen h-screen fixed top-0 left-0 bg-white lg:bg-transparent  text-xl z-40 `}>
        <div className='h-[calc(100%_-_10em)] grid grid-cols-2 grid-rows-2 lg:h-full lg:w-full lg:flex lg:flex-row font-[family-name:var(--font-title)]'>
            {navList.map((item)=>{
              return <NavItem key={item.label} label={item.label} path={item.path} onClick={()=> router.push(`${item.path}`)} 
                    lgTextClr={item.lgTextClr} bgClr={item.bgClr} textClr={item.textClr} animate={item.animate}/>
            })}
            </div>
        <div className='w-2/3 mx-auto font-bold h-[10em] flex items-center justify-center lg:hidden'>
            <Button label="LinkedIn" defauBtn/>
        </div>
    </div>
  )
}
