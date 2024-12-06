'use client'
import React,{useState} from "react";
import Image from "next/image";
import GalleryModel from "./GalleryModel";
export default function CardGallery({clinicImages}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" gap-2 pt-2 max-md:justify-center  mx-auto whitespace-nowrap w-60 space-x-2 overflow-auto ">
        {clinicImages.map((image, index) => (
          <div key={index} className="w-12 aspect-square cursor-pointer inline-block space-x-4" onClick={() => setIsOpen(true)}>
            <Image
              src= {image}
              alt= "feature"
              className= "object-cover rounded-sm"
              sizes= "50px"
            />
          </div>
        ))}
      </div>
      <div className="space-x-2 mt-1 max-md:hidden">
        <span className="py-1 px-3 border-2 rounded-sm border-secondary text-[12px]">
          Dental Fillings
        </span>
        <span className="py-1 border-2 px-3 rounded-sm border-secondary text-[12px]">
          Whitneing
        </span>
      </div>
      {isOpen && <GalleryModel clinicImages={clinicImages} setIsOpen={setIsOpen}/>}
    </>
  );
}
