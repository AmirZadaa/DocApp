import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import Rating from './Rating'

export default function BookingCard({doctorData}) {
  return (
    <div className='px-10 mt-10 max-md:px-5'>
    <div className='p-4 border-[1px] border-black rounded-md flex gap-4 max-sm:flex-col '>
      <div className='w-20 aspect-square  relative max-sm:mx-auto'>
        <Image  
            src= {doctorData.profileImage} 
            alt= 'doctor' 
            fill
            priority
            className= 'object-cover rounded-sm' 
            sizes= '80px'
        />
      </div>
      <div className='space-y-1 pt-1 max-sm:mx-auto'>
        <h1 className='font-bold text-xl'>{doctorData.name}</h1>
         <Rating rating={doctorData.review.rating} />
        <div>
          <MapPin size={18} className="inline mr-2" />
          <span>{doctorData.address.city}, {doctorData.address.province}</span>
        </div>
      </div>
    </div>
    </div>
  )
}
