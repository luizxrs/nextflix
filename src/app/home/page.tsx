import Image from "next/image";
import Logo from "../../assets/imgs/nextflix-logo.png";
import Background from "../assets/imgs/background.jpg";
import Auth from "@/components/auth";

export default function Home() {
  
  return (
    <>
      <div className="text-white h-screen flex flex-col justify-center antialiased">
        <header className="top-0 h-14 flex justify-between items-center m-4 -mb-4">
          <Image
            src={Logo}
            className=""
            alt="Nextflix Logo"
            height={48}
            style={{ objectFit: "contain" }}
          ></Image>
          <div className="flex gap-4">
            <button className="h-12 w-28 bg-zinc-500 text-s font-semibold backdrop-blur-sm rounded-md transition-all  hover:bg-zinc-400 ">
              GitHub
            </button>
          </div>
        </header>
        <div className="h-screen w-screen fixed top-0 background-gradient -z-10"></div>
        <div className="h-screen w-screen fixed top-0 bg-cover bg-[url('../assets/imgs/background.jpg')] -z-20"></div>
      </div>
    </>
  );
}
