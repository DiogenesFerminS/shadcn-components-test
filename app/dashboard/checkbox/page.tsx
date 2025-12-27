"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label';
import { useState } from 'react'

const Page = () => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div className='w-full p-2'>
      <div className={`flex gap-3 p-4 w-fit ${check ? 'bg-blue-600 rounded-lg text-white' : ''} transition-all`}>
        <Checkbox 
          id='terms'
          checked={check}
          className={`
            border-2 
            data-[state=checked]:bg-white 
            data-[state=checked]:text-blue-600
            data-[state=checked]:border-white transition-all`}
          onCheckedChange={(check:boolean) => setCheck(check)}
        />

        <Label htmlFor='terms' className='cursor-pointer'>Accept the app&apos;s terms and conditions</Label>

      </div>
      
    </div>
  )
}

export default Page