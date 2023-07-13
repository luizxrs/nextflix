'use client'

import Image from "next/image";
import Logo from "../assets/imgs/nextflix-logo.png";
import Background from "../assets/imgs/background.jpg";
import "./globals.css";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/authentication");
  };
  
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
            <button
              onClick={handleRedirect}
              className="h-12 w-28 bg-red-600 text-s font-semibold transition-all rounded-md hover:bg-red-500 "
            >
              Criar Conta
            </button>
          </div>
        </header>
        <div className="m-auto text-center grid grid-cols-1 gap-4 content-center justify-items-center h-4/6 w-2/3 bg-transparent">
          <h1 className="text-6xl max-w-3xl font-semibold leading-snug">
            Filmes ilimitados, seriados de TV e mais.{" "}
          </h1>
          <h3 className="text-sm font-normal text-zinc-200 -mt-4">
            Assista quando quiser. Cancele a qualquer momento.
          </h3>
          <div className="w-4/6">
            <label htmlFor="Input">
              Pronto para assistir? Comece agora usando seu e-mail!
            </label>
            <form action="POST">
              <div className="flex justify-center mt-2">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="h-14 bg-zinc-100 text-zinc-400 w-3/4 p-4"
                />
                <button className=" bg-red-600 text-s font-semibold transition-all hover:bg-red-500 text-lg flex justify-center items-center w-1/4">
                  Começar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-screen w-screen fixed top-0 background-gradient -z-10"></div>
        <div className="h-screen w-screen fixed top-0 bg-[url('../assets/imgs/background.jpg')] -z-20"></div>
      </div>
    </>
  );
}
