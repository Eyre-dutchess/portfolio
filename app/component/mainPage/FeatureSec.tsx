"use client"

import React from 'react' 
import { FeatureList } from './FeatureList'

const  featureData = [
  {title:"entertainment",
    srcList: [
       "/images/3netflix/netflix4.png",
       "/images/3netflix/netflix2.png",
       "/images/3spotify/spotify1.png",
       "/images/3spotify/spotify5.png",
       "/images/3game/tetris.png"
     ]
   },
    {title:"lifestyle",
     srcList: [
        "/images/2airbnb/airbnb4.png",
        "/images/2airbnb/airbnb3.png",
        "/images/2bakery/bakery1.png",
        "/images/2bakery/bakery4.png",
        "/images/2service/service1.png",
        "/images/2service/service2.png"
      ]
    },
     {title:"easytool",
      srcList: [
         "/images/1bucketList/bucket3.png",
         "/images/1bucketList/bucket2.png",
         "/images/1budget/budget1.png",
         "/images/1budget/budget4.png",
         "/images/1calculator/calculator.png",
       ]
     },
  ]

export const FeatureSec = () => {
  return(
    <div className='w-full lg:w-[calc(100%_-_12em)] lg:px-[calc(1em_+_3vw)]  pt-8 mt-8 flex flex-col'>
        <h2 className='text-5xl xl:text-8xl font-[family-name:var(--font-title)] lg:text-center w-full'>Showcase</h2>
        <div className='w-full h-[5px] rounded-md bg-gradient-to-r from-orange-600 via-blue-400 to-white/5 mb-8'></div>
        
        {featureData.map((item)=>{
          return <FeatureList key={item.title} title={item.title} srcList = {item.srcList} />
        })}
        
    </div>
  )
}
