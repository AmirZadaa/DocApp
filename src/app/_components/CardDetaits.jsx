import Link from "next/link";
import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import CardGallery from "./CardGallery";
export default function CardDetaits({name,description,speciality,speciality_img,review,clinicImages}) {
  return (
      <div className="space-y-2 max-md:text-center mx-auto">
        <div className="space-y-1">
            <Link href="#" className="font-bold">{name}</Link>
            <p className="text-[14px]">{description}</p>
        </div>
        <div className="flex gap-2 pt-2 max-md:justify-center"> 
          <div className="w-5 aspect-square relative">
            <Image src={speciality_img} fill alt="specialities"  sizes="64px"/>
          </div>
          <span className="text-primary text-[14px]">{speciality}</span>
        </div>
        <Rating {...review}/>
        <CardGallery clinicImages={clinicImages} />
      </div>
  );
}
