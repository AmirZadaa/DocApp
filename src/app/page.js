
"use client"

import React from 'react'
import DoctorPgae from './_components/DoctorPage'
import Map from './_components/Map'

export default function Page() {
  return (
    <div className='container mx-auto mb-52'>
      <div className='flex p-4 gap-4 max-xl:flex-col-reverse'>
        <section className='w-[60%] max-xl:w-full'>
          <DoctorPgae/>
        </section>
        <section className='w-[40%] max-xl:w-full'>
          <div className='bg-secondary h-[calc(100vh-80px)] xl:fixed xl:top-20 xl:w-[50%]'>
            <Map/>
          </div>
        </section>
      </div>
    </div>
  )
}
