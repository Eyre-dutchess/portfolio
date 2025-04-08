"use client"

import React from 'react' 
import { Container } from '../Container'
import { DetailList } from '../DetailList'

const toolData = [
  {title:"bucketList",
    srcList: [
       "/images/1bucketList/bucket1.png",
       "/images/1bucketList/bucket2.png",
       "/images/1bucketList/bucket3.png"
     ]
   },
   {title:"budget",
    srcList: [
       "/images/1budget/budget1.png",
       "/images/1budget/budget2.png",
       "/images/1budget/budget3.png",
       "/images/1budget/budget4.png",
       "/images/1budget/budget5.png"
     ]
   },
   {title:"calculator",
    srcList: [
       "/images/1calculator/calculator.png"
     ]
   },
]
export const FeatureSec = () => {
  return(
        <div className='w-full h-full py-10 lg:max-w-[1100px] mx-auto'>
          <Container>
              <div className='md:px-[calc(2em_+_5vw)] flex flex-col gap-4'>
                {toolData.map((item)=>{
                       return <DetailList key={item.title} title={item.title} srcList={item.srcList}/>
                     })}
              </div>
          </Container>
        </div>
  )
}
