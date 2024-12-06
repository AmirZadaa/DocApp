import React, { useState } from "react";
import DoctorSearchHeader from "./DoctorSearchHeader";
import DoctorCart from "./DoctorCard";
import { doctorsData } from "../../assets/data";

export default function DoctorPage() {
  const [filterTerm, setFilterTerm] = useState("All");

  const filteredDoctors = doctorsData.filter(
    (doctor) => filterTerm == "All" || doctor.speciality === filterTerm
  );
  return (
    <div className="space-y-4 ">
      <DoctorSearchHeader
        totalDoctors={filteredDoctors.length}
        onFilter={(value) => setFilterTerm(value)}
      />
      {filteredDoctors.map((doctor, index) => (
        <DoctorCart doctor={doctor} key={index} />
      ))}
    </div>
  );
}
