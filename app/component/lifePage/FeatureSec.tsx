"use client"

import React from 'react' 
import { Container } from '../Container'
import { DetailList } from '../DetailList'

const lifeData = [
  {title:"airbnb",
    srcList: [
       "/images/2airbnb/airbnb2.png",
       "/images/2airbnb/airbnb3.png",
       "/images/2airbnb/airbnb4.png",
     ],
     url:"airbnb-clone-next-ts-pkma.vercel.app"
   },
   {title:"bakery",
    srcList: [
       "/images/2bakery/bakery1.png",
       "/images/2bakery/bakery2.png",
       "/images/2bakery/bakery3.png",
       "/images/2bakery/bakery4.png",
       "/images/2bakery/bakery5.png"
     ],
     url:""
   },
   {title:"service",
    srcList: [
       "/images/2service/service1.png",
       "/images/2service/service2.png",
       "/images/2service/service3.png",
       "/images/2service/service4.png",
       "/images/2service/service6.png",
     ],
     url:"household-service-provider-nextjs-m.vercel.app"
   },
]
export const FeatureSec = () => {
  return(
        <div className='w-full h-full py-10  mx-auto  px-[calc(1em_+_5vw)]'>
        
              <div className='md:px-[calc(2em_+_5vw)] xl:px-6 flex flex-col gap-4'>
                {lifeData.map((item)=>{
                        return <DetailList key={item.title} title={item.title} srcList={item.srcList}  url={item.url}/>
                      })}
              </div>
         
        </div>
  )
}
