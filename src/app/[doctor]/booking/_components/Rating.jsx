import React from "react";
import { Star } from "lucide-react";
export default function Rating({rating}) {
  return (
    <>
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((star, ind) => (
            <Star key={ind} size={18} className="fill-[#f0c253] text-[#f0c253] " />
          ))}
        <span className="ml-1 inline-block">{rating}</span>
      </div>
    </>
  );
}
