"use client";

import { usePathname, useRouter } from 'next/navigation';
import React from 'react' 
import { NavItem } from './NavItem';
import { navList } from './Navbar';
interface DeskRightNavProps {
  
}

export const DeskRightNav = ({}: DeskRightNavProps) => {
  const pathName = usePathname() 
  const router = useRouter()
  
  let body = (
    <div className='h-full w-[9em] flex flex-row'>
        <NavItem label={navList[1].label} path={navList[1].path} onClick={()=> router.push(`${navList[1].path}`)} 
                    lgTextClr={navList[1].lgTextClr} bgClr={navList[1].bgClr} textClr={navList[1].textClr} animate={navList[1].animate}/>
        <NavItem label={navList[2].label} path={navList[2].path} onClick={()=> router.push(`${navList[2].path}`)} 
                lgTextClr={navList[2].lgTextClr} bgClr={navList[2].bgClr} textClr={navList[2].textClr} animate={navList[2].animate}/>
        <NavItem label={navList[3].label} path={navList[3].path} onClick={()=> router.push(`${navList[3].path}`)} 
                lgTextClr={navList[3].lgTextClr} bgClr={navList[3].bgClr} textClr={navList[3].textClr} animate={navList[3].animate}/>
    </div>
    
  )
  if(pathName === "/entertain"){
    body=(
        <div className='w-[6em] h-full flex flex-row'>
            <NavItem label={navList[2].label} path={navList[2].path} onClick={()=> router.push(`${navList[2].path}`)} 
                    lgTextClr={navList[2].lgTextClr} bgClr={navList[2].bgClr} textClr={navList[2].textClr} animate={navList[2].animate}/>
            <NavItem label={navList[3].label} path={navList[3].path} onClick={()=> router.push(`${navList[3].path}`)} 
                    lgTextClr={navList[3].lgTextClr} bgClr={navList[3].bgClr} textClr={navList[3].textClr} animate={navList[3].animate}/>
        </div>
      
    )
  }
  if(pathName === "/lifestyle"){
    body=(
      <div className='w-[3em] h-full flex flex-row'>
        <NavItem label={navList[3].label} path={navList[3].path} onClick={()=> router.push(`${navList[3].path}`)} 
                    lgTextClr={navList[3].lgTextClr} bgClr={navList[3].bgClr} textClr={navList[3].textClr} animate={navList[3].animate}/>
      </div>
    )
  }
  if(pathName === "/easytool"){
    body=(
      <div className='w-0'></div>
    )
  }
  return(
    <div className={`hidden lg:block w-max h-screen fixed z-50 right-0 top-0`}>
      {body}
    </div>
  )
}
