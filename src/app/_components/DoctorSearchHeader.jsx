import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const filters = [
  "All",
  "Dentist",
  "Urologist",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Oncologist",
  "Pediatrician",
];

export default function DoctorSearchtHeader({ totalDoctors, onFilter }) {
  return (
    <div className="flex justify-between items-center mb-4 max-sm:flex-col gap-4">
      <h1 className="text-2xl font-semibold">{totalDoctors} Doctors found</h1>
      <div>
        <div className="flex gap-2">
          <Select onValueChange={(value) => onFilter(value)}>
            <SelectTrigger className="w-[180px]" aria-label="Filter">
              <SelectValue placeholder="Select a Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select</SelectLabel>
                {filters.map((filter) => (
                  <SelectItem key={filter} value={filter}>
                    {filter}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
