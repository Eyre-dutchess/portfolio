"use client"

import React from 'react' 
import { Img } from '../Img'

export const HomeSec = () => {
  return(
            <div className=' lg:w-[calc(100%_-_12em)] lg:px-[calc(1em_+_3vw)]'>
                <h1 className='text-5xl xl:text-8xl font-[family-name:var(--font-title)] lg:text-center w-full'>About Me</h1>
                <div className='w-full h-[5px] rounded-md bg-gradient-to-r from-orange-600 via-blue-400 to-white/5 '></div>
                
                <div className='py-4  sm:grid sm:grid-cols-2 md:grid-cols-6 grid-rows-1  items-center gap-[calc(1em_+_3vw)] lg:gap-0  xl:px-[calc(1em_+_3vw)]'>
                    <div className='z-40 lg:pl-[calc(0.5em_+_1vw)] text-sm  md:text-lg xl:text-xl row-span-full md:col-span-4  md:col-end-5 md:bg-gradient-to-r from-white from-60% to-blue-600/50 md:shadow-[15px_0_15px_rgba(255, 255, 255, 0.5)] md:py-[calc(0.5em_+_2vw)] md:rounded-r-full md:pr-[8vw] xl:pr-[5vw]'>
                      I am a dreamer.For Over 10 years, Early Education had been my way of helping shape the future of our society. With the hope of contributing in a more transforming and fundamental scale, I embarked on the journey of computer science about 5 years ago and have expanded my ability to take an overall website concept and build it with required skills and multiple programming languages, to ensure that the design is well-made, easily maintainable and scalable. 
                    </div>
                    <div className='relative md:w-full my-2 rounded-md  overflow-hidden row-span-full md:col-start-4 md:col-span-3 aspect-5/3 sm:aspect-square  lg:rounded-3xl lg:aspect-4/5 xl:max-w-[500px] xl:aspect-3/2'>
                        <Img  src="/profile.jpg" />
                        <div className='w-full h-full sm:bg-radial from-white/5 from-50% via-blue-400/50 via-75% to-white/75  absolute top-0 left-0'></div>
                    </div>
                </div>
            </div>
  )
}
