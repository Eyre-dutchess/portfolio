"use client"

import React from 'react' 
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import { FaMapPin } from 'react-icons/fa'
import { AiOutlineGithub, AiOutlineHome, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

export const Footer = () => {
    const pathName = usePathname()
    const isMainPage = pathName === "/"
    const router = useRouter()
    
  return(
    <div className={`md:p-4  w-4/5 transition relative z-50 
        ${isMainPage?"w-full text-sky-900/75 hover:text-sky-900 lg:pr-[12em]":"text-white/75 hover:text-white"}
        ${pathName==="entertain"?"w-4/5 lg:flex items-center justify-center lg:pr-[3em]":""} 
        ${pathName==="lifestyle"?"lg:flex items-center justify-center lg:pl-[3em]":""}
        ${pathName==="easytool"?"lg:flex items-center justify-center lg:pl-[3em]":""}
        `}>
        <div className='lg:flex flex-col items-center md:px-[5vw]'>
            <h1 className="text-3xl  -pb-2 font-bold ">Contact Me </h1>
            <div className='relative w-full border-2 border-dotted  lg:w-max  p-4 md:py-8 md:px-[calc(1em_+_5vw)] shadow shadow-blue-200/50 rounded-md text-sm font-semibold md:text-lg flex flex-col items-start justify-between '>
                <FaMapPin className='absolute -top-4 right-4 text-3xl rotate-45 text-sky-400'/>
                <div className='flex items-center gap-2'>
                  <AiOutlineMail />
                  Email: <span className='italic  font-light'>xweyre@gmail.com</span> 
                </div>
                <div  className='flex  items-center gap-2'>
                  <AiOutlineHome />
                  Location: <span className='italic font-light'>Shanghai, China</span> 
                </div>
                <Link href="https://github.com/Eyre-dutchess">
                  <div className='flex items-center gap-2 ' >
                    <AiOutlineGithub />
                    Github:  <span className='italic cursor-pointer transition hover:not-italic hover:underline underline-offset-4'>https://github.com/Eyre-dutchess</span>
                  </div>
                </Link >
                <Link href="https://www.linkedin.com/in/eyre-xi-697864ba">
                  <div  className='flex items-center gap-2 '>
                    <AiOutlineLinkedin />
                    LinkedIn:  <span className='italic cursor-pointer transition hover:not-italic hover:underline underline-offset-4'>www.linkedin.com/in/eyre-xi-697864ba</span>
                  </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
