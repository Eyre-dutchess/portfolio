import React from 'react'
import { HomeSec } from '../component/toolPage/HomeSec'
import { FeatureSec } from '../component/toolPage/FeatureSec'
import { Footer } from '../component/Footer'

export default function EasyToolPage() {
  return (
    <div className='bg-[var(--clr-green)] min-h-[100vh] w-full  ml-auto relative z-30 py-10 text-white/75 flex flex-col items-center lg:pl-[12em]'>
      <HomeSec />
      <FeatureSec />
      <Footer />
    </div>
  )
}
