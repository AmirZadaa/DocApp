import React from "react";
import { ThumbsUp, MessageCircle, MapPin, Banknote } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function CardInfo({ fee, address,review,likes,slug }) {
  return (
    <div className="flex flex-col gap-12 ">
      <ul className="space-y-4 text-[14px] mx-auto max-md:text-start">
        <li>
          <ThumbsUp size={16} className="inline mr-2" />
          {likes}%
        </li>
        <li className="">
          <MessageCircle size={16} className="inline mr-2" />
          {review.review_count} Feedback
        </li>
        <li>
          <MapPin size={16} className="inline mr-2" />
          {`${address.city}, ${address.province}`}
        </li>
        <li className="flex items-center space-x-1">
          <Banknote size={16} className="inline mr-2" />
          {`$${fee}`}
          <span className="px-2 text-center  items-center text-[12px] font-bold rounded-full text-background inline-block bg-black">
            i
          </span>
        </li>
      </ul>
      <div className="mx-auto">
       <Link href={`${slug}/booking`} aria-label="go to the booking pages"><Button className="rounded-sm ring-2">Book Appointment</Button></Link> 
      </div>
    </div>
  );
}
