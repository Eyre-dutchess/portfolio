"use client"

import React from 'react' 

export const InfoSec = () => {
  return(
    <div className='w-full lg:w-[calc(100%_-_12em)] lg:px-[calc(1em_+_3vw)]  py-8 flex flex-col gap-8'>
        <h2 className='text-5xl xl:text-8xl font-[family-name:var(--font-title)] lg:text-center w-full'>Skills & History</h2>
        <div className='w-full h-[5px] rounded-md bg-gradient-to-r from-orange-600 via-blue-400 to-white/5 mb-4'></div>

        <div className='infor-container'>
            <h3 className='text-xl font-bold lg:text-center lg:w-full md:text-xl lg:text-3xl mb-2'> Skills</h3>
            <div className='skills lg:flex flex-row items-center justify-center gap-2 lg:text-lg pb-4 '>
              <span>Javascript</span> <span>Scss</span> <span>React</span> <span>Next</span> <span>Typescript</span> <span>NextAuth</span> <span>Prisma</span> <span>MangoDB</span>
            </div>
            <ul className='px-4 list-disc text-sm lg:text-lg lg:pl-6 lg:w-4/5 mx-auto'>
              <li>Proficiency in HTML, CSS/Tailwind, JavaScript and TypeScript</li>
              <li>Experience with React and NextJS</li>
              <li>Experience with Auth0 , Asynchronous calls and Git version control</li>
              <li>Experience with responsive design and mobile-first development</li>
              <li>Development and optimization of user interfaces</li>
              <li>Commitment to delivering high-quality and defect-free projects</li>
              <li>Chinese(Native) and English(Bilingual Proficiency)</li>
            </ul>
        </div>

        <div className='infor-container '>
            <h3 className='text-xl font-bold lg:text-center lg:w-full md:text-xl  lg:text-3xl mb-2'>Strength & Passion</h3>
            <ul className='px-4 list-disc text-sm lg:text-lg lg:pl-6 lg:w-4/5 mx-auto'>
              <li>I am passionate for individual deep work and problem-solving.</li>
              <li>I enjoy collaborating with a team to complete projects rapidly.</li>
              <li>I am comfortable with both object-oriented and procedural programming methodologies.</li>
              <li>I have a strong knowledge of troubleshooting and solid understanding of software development life-cycle and best practices.</li>
              <li>I am professional, dependable, detail-oriented, and self-motivated and have the curiosity and motivation to learn.</li>
            </ul>
        </div>

        <div className='infor-container '>
            <h3 className='text-xl font-bold lg:text-center lg:w-full md:text-xl  lg:text-3xl mb-2'> History</h3>
            <ul className='px-4 list-disc text-sm lg:text-lg lg:pl-6 lg:w-4/5 mx-auto'>
              <li>
                <h6>Web Developer (Feb. 2021 -- Present)</h6>
                <p>-- 10 hours per day of experimental projects and developement with multiple online resources</p>
              </li>
              <li>
                <h6>Early Education (Feb. 2012 -- 2021)</h6>
                <p>-- Education institutions in Amsterdam , Amersfoort and Shanghai</p>
              </li>
              <li>
                <h6>Customer Service (Feb. 2006 -- 2011)</h6>
                <p>-- Restaurants and retail stores in Shanghai and Nanjing</p>
              </li>
            </ul>
        </div>
    </div>
  )
}
