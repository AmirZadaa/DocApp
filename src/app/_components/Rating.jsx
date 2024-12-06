import React from "react";
import { Star } from "lucide-react";
export default function Rating({rating}) {
  return (
    <>
      <div className="flex items-center max-md:justify-center gap-1 ">
        {Array(5)
          .fill(0)
          .map((star, ind) => (
            <Star key={ind} size={16} className="fill-primary " />
          ))}
        <span>({rating})</span>
      </div>
    </>
  );
}
