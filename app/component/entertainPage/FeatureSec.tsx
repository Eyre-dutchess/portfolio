"use client"

import React from 'react' 
import { DetailList } from '../DetailList'

const entertainData = [
  {title:"netflix",
    srcList: [
       "/images/3netflix/netflix1.png",
       "/images/3netflix/netflix2.png",
       "/images/3netflix/netflix3.png",
       "/images/3netflix/netflix4.png",
       "/images/3netflix/netflix5.png",
       "/images/3netflix/netflix6.png",
     ]
   },
   {title:"spotify",
    srcList: [
       "/images/3spotify/spotify1.png",
       "/images/3spotify/spotify2.png",
       "/images/3spotify/spotify3.png",
       "/images/3spotify/spotify4.png",
       "/images/3spotify/spotify5.png",
       "/images/3spotify/spotify6.png",
       "/images/3spotify/spotify7.png"
     ]
   },
   {title:"game",
    srcList: [
       "/images/3game/tetris.png",
       "/images/3game/tetris.png"
     ]
   },
]
export const FeatureSec = () => {

  return(
    <div className='w-full h-full py-10  lg:max-w-[1100px] mx-auto lg:px-0 px-[calc(1em_+_5vw)]'>
          <div className='md:px-[calc(2em_+_5vw)]  flex flex-col gap-4'>
            {entertainData.map((item)=>{
              return <DetailList key={item.title} title={item.title} srcList={item.srcList}/>
            })}
          </div>
    </div>
  )
}
