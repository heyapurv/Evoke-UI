"use client";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <main className=" bg-black h-screen ">
        <div>
          <HeroSection/>
        </div>
        <footer className=" flex justify-center text-center items-center my-10 gap-1 text-slate-300">
          <span>Made With</span>
          <span className="text-red-600 text-2xl ">&#10084;</span>
          <span> by</span>

          <a
            href="https://www.linkedin.com/in/apurvsprofile/ "
            className="hover:scale-105  duration-200"
          >
            <span className="text-cyan-400 "> Apurv Gore</span>
          </a>
        </footer>
      </main>
    </>
  );
}
