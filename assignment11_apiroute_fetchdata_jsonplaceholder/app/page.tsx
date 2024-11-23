'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter()
  return (
    <>
    <div className="max-w-full h-dvh w-full mx-auto p-6 bg-gradient-to-tr from-[#003566] via-[#004b23] to-[#3c096c]">
      <div className="w-auto max-w-full mx-auto flex flex-col">
        <h1 className="text-white text-center text-[55px] font-bold">API routes using external API</h1>
        <Button onClick={()=> route.push('./fetch-posts')}
        className=" flex mx-auto justify-center items-center px-4 py-2 rounded-2xl bg-white text-black font-semibold 
        sm:text-[20px] md:text-[24px] lg:text-[28px] text-[16px] hover:bg-gradient-to-l from-[#ffd60a] via-[#fca311] to-[#ef233c] my-8">
        Click here to see posts
        </Button>
      </div>
    </div>
    </>
  );
}
