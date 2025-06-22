"use client"

import React, { useEffect, useState } from 'react' 

import { FeatureItem } from './FeatureItem'
interface FeatureListProps {
  title: string
  srcList: string[]
}

export const FeatureList = ({title, srcList}: FeatureListProps) => {
    const [value, setValue] = useState(0)

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
        <div className='w-full max-w-[500px] md:max-w-[750px] lg:max-w-[900px] mx-auto h-max mb-20 '>
            <h3 className='text-xl lg:text-3xl uppercase font-semibold lg:text-center lg:w-full rounded-l-full bg-gradient-to-r from-sky-800/75 lg:from-white/5 lg:via-sky-800/75 to-white/5 px-4 py-2 text-white'>
                {title}</h3>
            <div className=' w-full mx-auto h-[40vh] md:h-[60vh] shadow-lg shadow-blue-200/50 rounded-md '>
                <div className=' w-full h-full relative'>
                    {srcList.map((item, index)=>{
                        let position
                        if(index === value){
                            position = "currentSlide"
                        }else if(index < value){
                            position = "previousSlide"
                        }else{
                            position = "nextSlide"
                        }
                        return <FeatureItem key={index} src={item} position={position}/>
                    })}
                </div>  
            </div>
        </div>
    )
}
