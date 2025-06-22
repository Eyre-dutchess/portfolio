"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react' 
import { NavItem } from './NavItem';
import { navList } from './Navbar';
interface DesktopNavProps {
  
}

export const DeskLeftNav = ({}: DesktopNavProps) => {
  const pathName = usePathname() 
  const router = useRouter()
  
  let body = (
    <div className='w-0'></div>
  )
  if(pathName === "/entertain"){
    body=(
      <div className='w-[3em] h-full flex flex-row'>
        <NavItem label={navList[0].label} path={navList[0].path} onClick={()=> router.push(`${navList[0].path}`)} 
                    lgTextClr={navList[0].lgTextClr} bgClr={navList[0].bgClr} textClr={navList[0].textClr} animate={navList[0].animate}/>
      </div>
    )
  }
  if(pathName === "/lifestyle"){
    body=(
      <div className='w-[6em] h-full flex flex-row'>
        <NavItem label={navList[0].label} path={navList[0].path} onClick={()=> router.push(`${navList[0].path}`)} 
                lgTextClr={navList[0].lgTextClr} bgClr={navList[0].bgClr} textClr={navList[0].textClr} animate={navList[0].animate}/>
        <NavItem label={navList[1].label} path={navList[1].path} onClick={()=> router.push(`${navList[1].path}`)} 
                lgTextClr={navList[1].lgTextClr} bgClr={navList[1].bgClr} textClr={navList[1].textClr} animate={navList[1].animate}/>
      </div>
    )
  }
  if(pathName === "/easytool"){
    body=(
      <div className='w-[9em] h-full flex flex-row'>
        <NavItem label={navList[0].label} path={navList[0].path} onClick={()=> router.push(`${navList[0].path}`)} 
                    lgTextClr={navList[0].lgTextClr} bgClr={navList[0].bgClr} textClr={navList[0].textClr} animate={navList[0].animate}/>
        <NavItem label={navList[1].label} path={navList[1].path} onClick={()=> router.push(`${navList[1].path}`)} 
                lgTextClr={navList[1].lgTextClr} bgClr={navList[1].bgClr} textClr={navList[1].textClr} animate={navList[1].animate}/>
        <NavItem label={navList[2].label} path={navList[2].path} onClick={()=> router.push(`${navList[2].path}`)} 
                lgTextClr={navList[2].lgTextClr} bgClr={navList[2].bgClr} textClr={navList[2].textClr} animate={navList[2].animate}/>
      </div>
    )
  }
  return(
    <div className={`hidden lg:block w-max h-screen fixed z-50 left-0 top-0`}>
      {body}
    </div>
  )
}
