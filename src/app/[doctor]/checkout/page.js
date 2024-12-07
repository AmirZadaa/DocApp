"use client";
import React from "react";
import { useParams } from "next/navigation";
import CheckoutHeader from "./_components/CheckoutHeader";
import { doctorsData } from "../../../assets/data";
import CheckoutCard from "./_components/CheckoutCard";
import CheckoutForm from "./_components/CheckoutForm";
export default function Page() {
  const { doctor } = useParams();
  const doctorData = doctorsData.find((obj) => doctor == obj.slug);
  return (
    <div className="space-y-10 mb-10">
      <CheckoutHeader />
      <div className="flex gap-4 px-10 max-md:flex-col max-md:px-5">
        <section className="w-[65%] max-md:w-full">
          <CheckoutForm doctorName={doctorData.name} />
        </section>
        <section className="w-[35%] max-md:w-full">
          <CheckoutCard {...doctorData} />
        </section>
      </div>
    </div>
  );
}
