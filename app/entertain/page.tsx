import React from 'react'
import { HomeSec } from '../component/entertainPage/HomeSec'
import { FeatureSec } from '../component/entertainPage/FeatureSec'
import { Footer } from '../component/Footer'

export default function EntertainPage() {
  return (
    <div className='bg-[var(--clr-orange)] w-full min-h-[100vh] relative z-30 pt-40 pb-20 text-white/75 flex flex-col items-center lg:pr-[3em]'>
      <HomeSec />
      <FeatureSec />
      <Footer />
    </div>
  )
}
