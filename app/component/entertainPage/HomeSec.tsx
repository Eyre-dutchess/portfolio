"use client"

import React from 'react' 
import { Container } from '../Container'
import { Img } from '../Img'

export const HomeSec = () => {
  return(
    <div className='w-full h-full '>
      <Container>
        <h1 className='py-4 font-[family-name:var(--font-title)] w-full text-5xl lg:text-8xl lg:text-center'>Entertainment</h1>
        
        <div className='w-full p-2 bg-white/75 rounded-lg md:rounded-[50vw] shadow shadow-white/50 h-max border md:grid grid-cols-2 items-center max-w-[800px] mx-auto gap-[calc(1em_+_3vw)]'>
            <div className=' relative '>
              <div className='w-full aspect-square relative hidden md:block  rounded-full overflow-hidden'>
                <Img  src="/entertain.jpeg"/>
              </div>
              <div className='w-full h-full rounded-full z-50 absolute top-0 left-0 shadow-lg shadow-orange-400 bg-radial from-white/0 from-50% via-white via-75% to-orange-400'></div>
            </div>

          <div className='text-lg text-[var(--clr-orange)] pl-8 pr-8 md:pl-0 md:pr-4'>What’s life without fun? We enjoy music and movies. They uplift our spiritual and physical life. We enjoy games, virtual and real. Showcased here are Netflix (clone), Spotify(clone) and the most classic game, Tetris. </div>
        </div>
      </Container>
    </div>
  )
}
