"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])

  const dateFormatter = (date: Date | undefined) => {
    if(!date) return '';
    return date.toLocaleDateString('es-ES', {
      weekday: "short",
      day: "numeric",
      month: "short" 
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className=" flex flex-wrap justify-center items-center gap-5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
          disabled={(day) => day.getDay() === 0}
        />

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
          disabled={(day) => day < new Date()}
        />

        <div className="flex-col text-center">
          <span className="capitalize">multiple choice</span>
          <Calendar
            mode="multiple"
            selected={multipleDate}
            onSelect={setMultipleDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </div>
      </div>

      <div className="w-ful mx-auto text-center">
        <h1 className="p-3">Information</h1>
        <div className="border-b"></div>
        <p>{dateFormatter(date)}</p>
        {multipleDate?.map((date) => dateFormatter(date)).join(", ")}
      </div>
    </div>
  );
}

export default Page;