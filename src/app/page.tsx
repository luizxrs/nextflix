"use client";

import "./globals.css";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/authentication");
  };

  return (
    <>
        <div className="text-white h-screen flex flex-col justify-center antialiased">
          <Header authPage={true} />
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
              <div className="flex justify-center mt-2">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="h-14 bg-zinc-100 text-zinc-400 w-3/4 p-4"
                />
                <button
                  className=" bg-red-600 text-s font-semibold transition-all hover:bg-red-500 text-lg flex justify-center items-center w-1/4"
                  onClick={handleRedirect}
                >
                  Começar
                </button>
              </div>
            </div>
          </div>

          <div className="h-screen w-screen fixed top-0 background-gradient -z-10"></div>
          <div className="h-screen w-screen fixed top-0 bg-[url('../assets/imgs/background.jpg')] -z-20"></div>
        </div>
    </>
  );
}
