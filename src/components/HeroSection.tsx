'use client'
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import SparklesText from "./magicui/sparkles-text"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
   <>
   
   <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <SparklesText text="Evoke UI"/>  is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center md:mx-auto mb-10 ">
        Discover EVOKE UI, featuring high-quality, customizable components for fast, responsive, and stunning UI design. Perfect for developers and designers. Get started today!
        </p>
        <div className="flex justify-center my-5"> 
            <Link href={'/evokehome'}>
            <Button variant="outline" size="default">
            Get Started<ChevronRight className="h-4 w-4" />
          </Button>
          </Link>
        </div>
      </div>
      
    </div>
   
   </>
  )
}

export default HeroSection
