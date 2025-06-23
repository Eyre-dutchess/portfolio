"use client"

import React, { useEffect, useMemo, useState } from 'react' 
import { usePathname, useRouter } from 'next/navigation'
import { FaMapPin } from 'react-icons/fa'
import { AiOutlineGithub, AiOutlineHome, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'


export const Footer = () => {
    const pathName = usePathname()
    const isMainPage = pathName === "/"
    const router = useRouter()

    // const [scrolledToBot, setScrolledToBot] = useState(false)
   
    // useEffect(()=>{
    //   setScrolledToBot(false)
    // }, [router])
    
    const position = useMemo(()=>{
      if(pathName === "/"){
        return "w-full text-sky-900/75 hover:text-sky-900 lg:pr-[12em]"
      }
      if(pathName === "/entertain"){
        return "w-4/5 text-white/75 hover:text-white lg:flex items-center justify-center lg:pr-[1em] "
      }
      if(pathName=== "/lifestyle"){
        return "w-4/5 text-white/75 hover:text-white lg:flex items-center justify-center lg:pl-[2em] "
      }
      if(pathName === "/easytool"){
        return "w-4/5 text-white/75 hover:text-white lg:flex items-center justify-center lg:pl-[2em] "
      }
    }, [pathName, router])
    // console.log(position, pathName)
    // useEffect(()=>{
    //     const handleScroll = () =>{
    //       if(window.pageYOffset > document.body.clientHeight - 990 ){
    //         setScrolledToBot(true)
    //       }else{
    //         setScrolledToBot(false)
    //       }
          
    //     }
    //     window.addEventListener("scroll", handleScroll)
    //     return () =>{
    //       window.removeEventListener("scroll", handleScroll)
    //     }
    //   }, [])

  return(
    <div className={`md:p-4 transition relative z-30 mb-10 ${position}`}>
        <div className='lg:flex flex-col items-center md:px-[5vw] '>
            <h1 className="text-3xl  -pb-2 font-bold ">Contact Me </h1>
            <div className='relative w-full border-2 border-dotted truncate lg:w-max  p-4 md:py-8 md:px-[calc(1em_+_5vw)] shadow shadow-blue-200/50 rounded-md text-sm font-semibold md:text-lg flex flex-col items-start justify-between '>
                <FaMapPin className='absolute top-0 right-4 z-40 text-3xl rotate-45 text-sky-400'/>
                <div className='flex items-center gap-2'>
                  <AiOutlineMail />
                  Email: <span className='italic  font-light'>EyreJinx@outlook.com</span> 
                </div>
                <div className='flex items-center gap-2'>
                  <AiOutlineHome />
                  Location: <span className='italic font-light'>Shanghai, China</span> 
                </div>
                <Link href="https://github.com/Eyre-dutchess">
                  <div className='flex items-center gap-2' >
                    <AiOutlineGithub />
                    Github:  <span className='italic cursor-pointer transition hover:not-italic hover:underline underline-offset-4'>https://github.com/Eyre-dutchess</span>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/eyre-xi-697864ba">
                  <div  className='flex items-center gap-2'>
                    <AiOutlineLinkedin />
                    LinkedIn:  <span className='italic cursor-pointer transition hover:not-italic hover:underline underline-offset-4'>www.linkedin.com/in/eyre-xi-697864ba</span>
                  </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
