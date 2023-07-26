"use client";

import Image from "next/image";
import Logo from "../assets/imgs/nextflix-logo.png";
import { useRouter } from "next/navigation";

interface IHeaderProps {
  authPage: boolean;
}

export default function Header({ authPage }: IHeaderProps) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/home");
  };

  return (
    <>
      <header className="top-0 h-14 flex justify-between items-center m-4 -mb-4 text-white antialiased">
        <div onClick={() => router.push("/home")}>
          <Image
            src={Logo}
            className=""
            alt="Nextflix Logo"
            height={48}
            style={{ objectFit: "contain", cursor:"pointer" }}
          ></Image>
        </div>
        <div className="flex gap-4">
          <button className="h-12 w-28 bg-zinc-500 text-s font-semibold backdrop-blur-sm rounded-md transition-all  hover:bg-zinc-400 ">
            GitHub
          </button>
          {authPage && (
            <button
              onClick={handleRedirect}
              className="h-12 w-28 bg-red-600 text-s font-semibold transition-all rounded-md hover:bg-red-500 "
            >
              Criar Conta
            </button>
          )}
        </div>
      </header>
    </>
  );
}
