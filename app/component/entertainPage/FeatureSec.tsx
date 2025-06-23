"use client"

import React from 'react' 
import { DetailList } from '../DetailList'

const entertainData = [
  { title:"netflix",
    srcList: [
       "/images/3netflix/netflix1.png",
       "/images/3netflix/netflix2.png",
       "/images/3netflix/netflix3.png",
       "/images/3netflix/netflix4.png",
       "/images/3netflix/netflix5.png",
       "/images/3netflix/netflix6.png",
     ],
    url: ""
   },
   {title:"musicPlayer",
    srcList: [
       "/images/3music/spotify1.png",
       "/images/3music/spotify2.png",
     ],
    url:"https://music-player-vite-mu.vercel.app"
   },
   {title:"game",
    srcList: [
       "/images/3game/tetris.png",
       "/images/3game/snakegame.png",
       "/images/3game/spaceshooter.png",
       "/images/3game/quiz1.png",
       "/images/3game/quiz2.png",
       "/images/3game/quiz3.png",
       "/images/3game/game.png"
     ],
     url:"https://game-database-two.vercel.app"
   },
]
export const FeatureSec = () => {

  return(
    <div className='w-full h-full py-10  mx-auto  px-[calc(1em_+_5vw)] '>
          <div className='md:px-[calc(2em_+_5vw)] xl:px-6 flex flex-col gap-4'>
            {entertainData.map((item)=>{
              return <DetailList key={item.title} title={item.title} srcList={item.srcList} url={item.url}/>
            })}
          </div>
    </div>
  )
}
