"use client"

import React, { useCallback, useEffect, useState } from 'react' 
import { usePathname, useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Container } from '../Container'
import { Button } from '../Button'
import { NavMenu } from './NavMenu'
import { Img } from '../Img'

export const Navbar = () => {
  const router = useRouter()
  const pathName = usePathname()

  const [showNav, setShowNav] = useState(false)
  useEffect(()=>{
    setShowNav(false)
  }, [router, pathName])

  const toggleNav = useCallback(()=>{
    setShowNav((value)=>!value)
  }, [])

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
    <div className={`w-screen fixed top-0 left-0 z-50 ${scrolled ? "bg-white drop-shadow-blue drop-shadow-md":"bg-transparent drop-shadow-none "}`} >
      <Container>
          <div className='w-full py-2 flex flex-row items-center justify-between relative z-50'>
            <div className='cursor-pointer w-[2em] h-[2em] ml-2 rounded-full overflow-hidden relative' onClick={()=> router.push("/")}>
              <Img  src="/profile.jpg" />
            </div>
            <Button icon={showNav?FaTimes:FaBars} onClick={toggleNav} navBtn/>
          </div>
          
          <NavMenu showNav={showNav} scrolled={scrolled}/>
      </Container>
    </div>
  )
}
