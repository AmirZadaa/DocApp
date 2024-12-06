import React, { useState } from "react";
import { Check } from "lucide-react";
import { useId } from "react";

export default function BookingSlotButton({
  isProceed,
  setIsProceed,
  timeSlot,
}) {
  const [isSelectSlot, setSelectSlot] = useState(false);
  const id = useId();
  return (
    <div className="flex">
      <button
        disabled={isProceed === null ? false : isProceed !== id}
        className={`px-4 py-1 text-center mx-auto  relative hover:ring-1 group ${
          isSelectSlot ? "bg-primary" : ""
        } `}
        onClick={() => {
          setIsProceed(id === isProceed ? null : id);
          setSelectSlot(!isSelectSlot);
        }}
      >
        <span className="z-20 relative text-nowrap px-2">{`${timeSlot.start}-${timeSlot.end}`}</span>
        {isSelectSlot || (
          <div className="bg-secondary absolute inset-0 transition-all mx-auto group-hover:scale-0 duration-500 flex items-center justify-center z-10"></div>
        )}
        {isSelectSlot && (
          <span className="absolute top-2 bg-primary right-0 ">
            <Check size={18} />
          </span>
        )}
      </button>
    </div>
  );
}
