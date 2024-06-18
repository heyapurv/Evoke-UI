"use client";
import Link from "next/link";

import SparklesText from "./magicui/sparkles-text";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ToggleBtn from "@/app/evokehome/ToggleBtn";
import WordPullUp from "@/components/magicui/word-pull-up";
import ShinyButton from "./magicui/shiny-button";
import Section from "./Section";
export default function HeroSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
    <div className="flex justify-end">
      <span className="m-5"><ToggleBtn/></span>
    </div>
      <div className="md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased dard:bg-grid-white/[0.02] relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />

        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <span className="text-4xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <SparklesText text="Evoke UI" />{" "}
            <WordPullUp
              className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
              words="is the new trend "
            />
          </span>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center md:mx-auto mb-10 ">
            Discover EVOKE UI, featuring high-quality, customizable components
            for fast, responsive, and stunning UI design. Perfect for developers
            and designers. Get started today!
          </p>
          <div className="flex justify-center my-5">
            <Link href={"/evokehome"}>
              <ShinyButton text="Browse Components" />
            </Link>
          </div>
        </div>
        
      </div>
      <Section/>
    </>
  );
}
