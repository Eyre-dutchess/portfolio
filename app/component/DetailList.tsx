"use client"

import React, { useEffect, useState } from 'react' 
import { Img } from './Img'
interface DetailListProps {
  title: string
  srcList: string[]
}

export const DetailList = ({title, srcList}: DetailListProps) => {
  
    const [value, setValue] = useState(0)
    const [list, setList] = useState(srcList)
    
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
            <div className='w-full flex flex-col items-center justify-center'>
              <h3 className='text-xl w-full uppercase font-semibold bg-gradient-to-r rounded-l-full pl-4 py-3 mt-12 from-white to-white/0 text-[var(--clr-orange)]'>{title}</h3>
              <div className='w-full shadow-inner shadow-white rounded-l-xl p-[1em] h-[40vh] lg:h-[55vh] flex lg:grid grid-cols-2 gap-[calc(1em_+_3vw)] lg:max-w-[800px]'>
                    <div className='w-full  overflow-hidden rounded-lg relative h-[calc(40vh_-_2em)] lg:h-[calc(55vh_-_2em)]'>
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
                              <div key={index}  className={`absolute top-0 left-0 w-full h-full ${position && position}`}>
                                <Img src={item}/>
                              </div>
                            )
                          })}
                    </div>
                    <div className='hidden w-full grid-span-1 lg:block overflow-hidden relative rounded-lg  h-[calc(40vh_-_2em)] lg:h-[calc(55vh_-_2em)]'>
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
                                  <div key={index}  className={`absolute top-0 left-0 w-full h-full ease-in-out transition ${position && position}`}>
                                    <Img src={item}/>
                                  </div>
                                )
                              })}
                    </div>
              </div>
            </div>
  )
}
