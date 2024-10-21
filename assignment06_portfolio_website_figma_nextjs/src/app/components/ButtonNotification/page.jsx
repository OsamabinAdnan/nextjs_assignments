import 'react-notifications/lib/notifications.css';
import React from 'react'
import { Button } from '@/components/ui/button'
import { TbSend2 } from "react-icons/tb";



export default function Notification() {
  
  return (
    <div>
          {/*  */}
      <Button type='submit' className="bg-[#01eeff]  drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px]">
      <TbSend2 /> Submit
      </Button>

    </div>
  )
}
