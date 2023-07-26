"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header authPage={false} />
      <div className="text-white h-screen flex flex-col justify-center antialiased">
        <div className="h-screen w-screen fixed top-0 background-gradient -z-10"></div>
        <div className="h-screen w-screen fixed top-0 bg-cover bg-[url('../assets/imgs/background.jpg')] -z-20"></div>
      </div>
    </>
  );
}
