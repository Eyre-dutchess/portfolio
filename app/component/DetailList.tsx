"use client"

import React, { useEffect, useState } from 'react' 
import { FaHandPointRight } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

import { Img } from './Img'
import Link from 'next/link'

interface DetailListProps {
  title: string
  srcList: string[]
  url: string
}

export const DetailList = ({title, srcList, url}: DetailListProps) => {
  
    const router = useRouter()
    const [value, setValue] = useState(0)
    const [list, setList] = useState(srcList)
    const visitTitles = ["game","airbnb","service","bucketList" ,"budget" ]
    
      useEffect(()=>{
        let tempList = srcList  
            .map(value=> ({value, sort: Math.random()}))
            .sort((a, b)=> a.sort - b.sort)
            .map(({value}) => value)
        setList(tempList)
      }, [srcList])

      useEffect(()=>{
          let lastValue = srcList.length - 1
          if(value > lastValue){
              setValue(0)
          }
          if(value < 0){
              setValue(lastValue)
          }
      }, [value, srcList])
  
      useEffect(()=>{
          const slider = setInterval(()=>{
              setValue(value=> value + 1)
          }, 3000)
          return ()=> clearInterval(slider)
      }, [value])
  return(
            <div className='w-full flex flex-col gap-2 items-center justify-center'>
              <div className='w-full flex items-center justify-between font-semibold bg-gradient-to-r from-white to-white/0 text-[var(--clr-orange)]  pl-4 py-3 mt-12  rounded-l-full '>
                <h3 className='text-xl pl-6 xl:pl-[calc(0.5em_+_1vw)] uppercase '>{title} </h3>
                <div className=' pr-20'>
                  {visitTitles.find((item)=> item === title)
                  ? (
                    <Link href={url}><p className='cursor-pointer transition hover:underline underline-offset-3 z-50 text-white/75 flex flex-row items-center gap-2  hover:text-shadow-lg hover:text-white'> Visit now <FaHandPointRight /></p></Link>) 
                  : (
                    <p className='cursor-not-allowed text-white/50 flex flex-row items-center gap-2 '>In progress <FaClock /></p>
                  )}
                </div>
              </div>

              <div className='w-full shadow-inner shadow-white/50 rounded-l-xl overflow-hidden rounded-br-xl p-[1em] h-[50vh] xl:h-[65vh] flex lg:grid grid-cols-1 xl:grid-cols-2 gap-[calc(1em_+_3vw)] xl:gap-6 xl:px-[calc(0.5em_+_1vw)]'>
                    <div className='w-full  overflow-hidden rounded-lg relative  h-[calc(50vh_-_2em)] xl:h-[calc(65vh_-_2em)]'>
                       {srcList.map((item, index)=>{
                          let position
                          if(index === value){
                              position = "currentSlide"
                          }else if(index < value){
                              position = "previousSlide"
                          }else{
                              position = "nextSlide"
                          }
                            return (
                              <div key={index}  className={`absolute top-0 left-0 w-full h-full  duration-500 transition ${position && position}`}>
                                <Img src={item}/>
                              </div>
                            )
                          })}
                    </div>
                    <div className='hidden w-full grid-span-1 xl:block overflow-hidden relative rounded-lg  h-[calc(50vh_-_2em)] xl:h-[calc(65vh_-_2em)]'>
                        {list.map((item, index)=>{
                          let position
                          if(index === value){
                            position = "currentSlide"
                          }else if(index < value){
                            position = "previousSlide"
                          }else{
                            position = "nextSlide"
                          }
                                return (
                                  <div key={index}  className={`absolute top-0 left-0 w-full h-full ease-in-out duration-500 transition ${position && position}`}>
                                    <Img src={item}/>
                                  </div>
                                )
                              })}
                    </div>
              </div>
            </div>
  )
}
