'use client'
import React from 'react'
import { Check } from 'lucide-react'
import SuccessHeader from './SuccessHeader'
import Footer from '../_components/Footer'
import { useSearchParams } from 'next/navigation'
export default function Page() {
  const searchParams = useSearchParams()
  const doctorName = searchParams.get('doctorName')
  return (
    < >
      <SuccessHeader/>
      <div className='container  w-1/2 max-md:w-auto  mx-auto max-xm:mx-2 text-center shadow-lg p-10 rounded-lg space-y-4 mt-10 ring-1 '>
        <div className='w-16 aspect-square bg-green-500 rounded-full flex justify-center items-center mx-auto'><Check size={30} strokeWidth={3}  className='text-white '/></div>
         <h1 className='text-2xl font-bold'>Appointment booked Successfully!</h1>
         <div>Appointment booked with <span className='font-bold text-nowrap'>{doctorName}</span></div>
         <div>On <span className='font-bold'>12 Nov 2019 5:00PM to 6:00PM</span></div>
      </div>
      <Footer/>
    </>
  )
}
