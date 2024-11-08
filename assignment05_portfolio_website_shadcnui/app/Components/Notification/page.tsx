'use client'
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Notification() {

    return (
    <>
    <div>
        <Button onClick={()=>toast.error('Please fill the form')} className="bg-black text-white hover:text-black hoverMenu font-bold rounded-[10px]">< FaCircleArrowRight />Click to Submit</Button>
    </div>
    </>

    
  )
}

