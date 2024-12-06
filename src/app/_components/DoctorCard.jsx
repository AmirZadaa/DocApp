"use client";
import React from "react";
import Image from "next/image";
import CardDetaits from "./CardDetaits";
import CardInfo from "./CardInfo";
export default function DoctorCard({doctor,index}) {
  
  return (
        <div
          key={doctor.id}
          className="flex gap-4 border-[1px] rounded-md border-black justify-between p-4 max-md:flex-col overflow-hidden"
        >
          <section className="flex gap-4 max-md:flex-col max-md:gap-16">
            <div className="w-44 aspect-[3/2] mx-auto">
              <Image 
                src= {doctor.profileImage} 
                alt= {doctor.speciality} 
                className= "rounded-sm object-contain" 
                sizes= "176px"
                priority= {`${index<=2 ? true:false}`}

              />
            </div>
            <CardDetaits {...doctor} />
          </section>
          <CardInfo {...doctor} />
        </div>
  );
}
