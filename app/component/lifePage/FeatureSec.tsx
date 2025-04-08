"use client"

import React from 'react' 
import { Container } from '../Container'
import { DetailList } from '../DetailList'

const lifeData = [
  {title:"airbnb",
    srcList: [
       "/images/2airbnb/airbnb1.png",
       "/images/2airbnb/airbnb2.png",
       "/images/2airbnb/airbnb3.png",
       "/images/2airbnb/airbnb4.png",
       "/images/2airbnb/airbnb5.png"
     ]
   },
   {title:"bakery",
    srcList: [
       "/images/2bakery/bakery1.png",
       "/images/2bakery/bakery2.png",
       "/images/2bakery/bakery3.png",
       "/images/2bakery/bakery4.png",
       "/images/2bakery/bakery5.png"
     ]
   },
   {title:"service",
    srcList: [
       "/images/2service/service1.png",
       "/images/2service/service2.png",
       "/images/2service/service3.png",
       "/images/2service/service4.png",
       "/images/2service/service5.png",
       "/images/2service/service6.png",
       "/images/2service/service7.png"
     ]
   },
]
export const FeatureSec = () => {
  return(
        <div className='w-full h-full py-10  lg:max-w-[1100px] mx-auto'>
          <Container>
              <div className='md:px-[calc(2em_+_5vw)] flex flex-col gap-4'>
                {lifeData.map((item)=>{
                        return <DetailList key={item.title} title={item.title} srcList={item.srcList}/>
                      })}
              </div>
          </Container>
        </div>
  )
}
