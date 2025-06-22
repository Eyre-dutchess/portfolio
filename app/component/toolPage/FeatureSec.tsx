"use client"

import React from 'react' 
import { Container } from '../Container'
import { DetailList } from '../DetailList'

const toolData = [
  {title:"bucketList",
    srcList: [
       "/images/1bucketList/bucket2.png",
       "/images/1bucketList/bucket3.png"
     ],
     url:"bucket-list-next-ts-prisma.vercel.app"
   },
   {title:"messenger",
    srcList: [
      "/images/1messenger/don1.png",
      "/images/1messenger/don2.png",
      "/images/1messenger/don3.png",
      "/images/1messenger/don4.png"
    ],
    url:"messenger-next-ts-prisma-pusher-nex.vercel.app"
   },
    {title:"budget",
     srcList: [
        "/images/1budget/budget2.png",
        "/images/1budget/budget3.png",
        "/images/1budget/budget4.png",
        "/images/1budget/budget5.png"
      ],
      url:"budget-next-app-ts-prisma-next-auth.vercel.app"
    },
]
export const FeatureSec = () => {
  return(
        <div className='w-full h-full py-10  mx-auto  px-[calc(1em_+_5vw)]'>
        
              <div className='md:px-[calc(2em_+_5vw)] xl:px-6 flex flex-col gap-4'>
                {toolData.map((item)=>{
                       return <DetailList key={item.title} title={item.title} srcList={item.srcList} url={item.url}/>
                     })}
              </div>
      
        </div>
  )
}
