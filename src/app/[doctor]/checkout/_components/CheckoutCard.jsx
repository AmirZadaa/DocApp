import React from "react";
import Rating from "./Rating";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function CheckoutCard({review,fee,name,profileImage,address}) {
  return (
      <div className="border-[1px] border-black rounded-md sticky top-28">
        <h1 className="font-bold text-xl p-4">Booking Summary</h1>
        <hr />
        <div className="p-4  rounded-md flex gap-4">
          <div className="w-20 aspect-square relative ">
            <Image
              src={profileImage}
              alt={name}
              className="object-cover rounded-sm max-lg:object-contain max-lg:object-left-top "
              fill
              priority
              sizes="100px"
            />
          </div>
          <div className="space-y-1 pt-1">
            <h1 className="font-bold text-xl max-sm:text-sm">{name}</h1>
            <Rating rating={review.rating} />
            <div>
              <MapPin size={18} className="inline mr-2" />
              <span>{`${address.province}, ${address.city}`}</span>
            </div>
          </div>
        </div>
        <div className="px-4 text-[14px] text-secondary-foreground mt-2">
          <span><span className="font-semibold text-foreground">Date</span>16 Nov 2019</span>
          <span ><span className="text-foreground font-semibold ms-2">Time</span> 10:00 Am</span>
        </div>
        <div className="space-y-4 mt-10 px-4 py-4 text-[14px] font-semibold">
          <div className="flex justify-between  text-xl">
            <div>Consulting Fee</div>
            <div className="text-primary">${fee}</div>
          </div>
        </div>
      </div>
  );
}
