"use client"
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Page = () => {
  const [ value, setValue ] = useState(10)
  return (
    <div>
      <span>Slider Value:{value}</span>
        <Slider 
          defaultValue={[value]} 
          max={100} 
          step={1}
          onValueChange={(value) => setValue(value[0])} 
        />
    </div>
  )
}

export default Page;