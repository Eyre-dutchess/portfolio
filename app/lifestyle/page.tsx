import React from 'react'
import { HomeSec } from '../component/lifePage/HomeSec'
import { FeatureSec } from '../component/lifePage/FeatureSec'
import { Footer } from '../component/Footer'

export default function LifeStylePage() {
  return (
    <div className='bg-[var(--clr-blue)] w-full min-h-[100vh] relative z-30  pt-30 pb-20 text-white/75 flex flex-col items-center lg:pl-[3em]'>
      <HomeSec />
      <FeatureSec />
      <Footer />
    </div>
  )
}
