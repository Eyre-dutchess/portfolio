"use client"

import React, { useEffect, useMemo, useState } from 'react' 
import { usePathname, useRouter } from 'next/navigation'
import { FaBars} from 'react-icons/fa'

import { Container } from '../Container'
import { Button } from '../Button'
import { Img } from '../Img'
import { MobileNav } from './MobileNav'
import { DeskLeftNav } from './DeskLeftNav'
import { DeskRightNav } from './DeskRightNav'

export const navList = [
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
export const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()
  const isMainPage = pathName === "/"

  const scrolledBgClr = useMemo(()=>{
    if(isMainPage){
      return "bg-gradient-to-br from-orange-400/25 via-blue-400/75 to-white/5"
    }else{
      return "bg-gradient-to-r from-white/5 via-white/75 to-white/5"
    }
  }, [pathName, router, isMainPage])

  const mLeft= useMemo(()=>{
        if(pathName === "/"){
          return "lg:ml-2 lg:mr-[9em]"
        }
        if(pathName === "/entertain"){
          return "lg:ml-2 lg:mr-[3em]"
        }
        if(pathName=== "/lifestyle"){
          return "lg:ml-[3em] "
        }
        if(pathName === "/easytool"){
          return "lg:ml-[9em]"
        }
      }, [pathName, router])

  const [showNav, setShowNav] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.pageYOffset > 1){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return(
    <div className={`w-screen fixed top-0 left-0 z-50 ${scrolled ? `${scrolledBgClr} drop-shadow-lg`:"bg-transparent drop-shadow-none "}`} >
      <Container>
          <div className='w-full py-4 lg:py-6 flex flex-row items-center justify-between lg:justify-center relative z-50 '>
            <div className={`cursor-pointer w-[2em] h-[2em] ml-2 rounded-full overflow-hidden relative ${mLeft}`} onClick={()=> router.push("/")}>
              <Img  src="/profile.jpg" />
            </div>
            <div className='lg:hidden'>
              <Button icon={FaBars} onClick={()=> setShowNav(true)} navBtn/>
            </div>
          </div>
          
          {showNav && <MobileNav showNav={showNav} setShowNav={setShowNav} navList={navList} />}
          <DeskLeftNav />
          <DeskRightNav />
      </Container>
    </div>
  )
}
