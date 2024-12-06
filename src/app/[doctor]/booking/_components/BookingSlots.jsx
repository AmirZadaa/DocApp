"use client";
import React from "react";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Button } from "../../../../components/ui/button";
import { Calendar } from "../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import BookingSlotButton from "./BookingSlotButton";

export default function BookingSlots({
  availableTiming,
  setIsProceed,
  isProceed,
}) {
  const [selectedDate, setSelectedDate] = useState({
    from: Date.now(),
    to: addDays(Date.now(), 14),
  });
  return (
    <div>
      <div className="flex justify-between px-10 mt-10 max-md:px-5 max-sm:flex-col-reverse gap-4">
        <div>
          <div className="text-2xl font-bold">
            {format(selectedDate.from, "dd MMMM yyyy")}
          </div>
          <span className="">{format(selectedDate.from, "EEEE")}</span>
        </div>
        <DatePickerWithRange date={selectedDate} setDate={setSelectedDate} />
      </div>
      <div className="px-10 mt-10  max-md:px-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-[calc(100vw-10%)]  border-[1px] border-black "
        >
          <CarouselContent className="">
            {availableTiming.days.map((daySchedule, dayIndex) => (
              <CarouselItem
                className="basis-[14.4%] px-0   border-none max-xl:basis-1/6  max-lg:basis-1/4 max-md:basis-1/3 max-sm:basis-1/2  max-xm:basis-1/2"
                key={dayIndex}
              >
                <Card className="rounded-none border-none shadow-none ">
                  <CardHeader className="text-center" key={dayIndex}>
                    <div className="font-semibold">{daySchedule.day}</div>
                    <div>12 Nov 2019</div>
                  </CardHeader>
                  {daySchedule.slots.map((timeSlot, slotIndex) => (
                    <CardContent key={slotIndex}>
                      <BookingSlotButton
                        setIsProceed={setIsProceed}
                        timeSlot={timeSlot}
                        isProceed={isProceed}
                      />
                    </CardContent>
                  ))}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

function DatePickerWithRange({ date, setDate }) {
  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
