"use client";
import React, { useState } from "react";
import BookingCard from "./_components/BookingCard";
import { useParams } from "next/navigation";
import { BookingHeader } from "./_components/BookingHeader";
import Link from "next/link";
import { doctorsData, availableTimings } from "../../../assets/data";
import BookingSlots from "./_components/BookingSlots";
import { Button } from "../../../components/ui/button";

export default function Page() {
  const { doctor } = useParams();
  const doctorData = doctorsData.find((obj) => doctor == obj.slug);
  const availableTiming = availableTimings.find((obj) => doctor == obj.slug);

  const [isProceed, setIsProceed] = useState(null);

  return (
    <div className="mb-20">
      <BookingHeader />
      <div className="container mx-auto">
        <BookingCard doctorData={doctorData} />
        {availableTiming ? (
          <BookingSlots
            availableTiming={availableTiming}
            setIsProceed={setIsProceed}
            isProceed={isProceed}
          />
        ) : (
          <div className="text-center mt-10">
            No Doctor Available for this time
          </div>
        )}
        <div className="px-10 mt-6 max-md:px-5">
          <Link href="checkout" aria-label="got to the checkout page">
            <Button className="float-end" disabled={!isProceed}>
              Proceed to Pay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
