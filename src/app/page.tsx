"use client";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <main className=" bg-black ">
        <div >
          <HeroSection/>
        </div>
        <footer className=" flex justify-center text-center items-center my-10 gap-1 bg-black text-slate-300">
          <span>Made With</span>
          <span className="text-red-600 text-2xl ">&#10084;</span>
          <span> in</span>
            <span className="text-cyan-400 "> India</span>  
        </footer>
      </main>
    </>
  );
}
