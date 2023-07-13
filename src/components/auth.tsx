"use client";

import Input from "@/components/input";
import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [signIn, setSignIn] = useState(true);
  const { register, handleSubmit } = useForm();

  function handleSignIn(data) {
    console.log(data)
  }

  return (
    <>
      {signIn ? (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-4 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Entrar</h1>
          <form action="POST" className="flex flex-col w-full gap-4" onSubmit={handleSubmit(handleSignIn)}>
            <Input
              {...register("email")}
              id="email-address"
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="Digite seu e-mail."
            />
            <Input
              {...register("password")}
              id="password-address"
              name="password"
              autoComplete="password"
              required
              type="password"
              placeholder="Digite sua senha"
            />

            <div className="w-full mt-4 gap-2 flex flex-col">
              <button className="h-16 bg-red-700 hover:bg-red-600 transition-colors p-2 flex justify-center items-center w-full text-zinc-200 font-bold text-lg rounded-md">
                Entrar
              </button>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <label htmlFor="rememberMe">Lembre de mim</label>
                </div>
                <a href="/" className="font-bold">
                  Quer voltar?
                </a>
              </div>
            </div>
          </form>
          <h4 className="m-auto mt-4">
            Novo no nextflix?{" "}
            <a
              className="font-bold cursor-pointer"
              onClick={() => setSignIn(false)}
            >
              Crie uma conta agora!
            </a>
          </h4>
        </div>
      ) : (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-4 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Criar Conta</h1>
          <form action="POST" className="flex flex-col w-full gap-4">
            <Input
              {...register("email")}
              id="email-address"
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="Digite seu e-mail."
            />
            <Input
              {...register("password")}
              id="password"
              name="password"
              autoComplete="password"
              required
              type="password"
              placeholder="Digite sua senha"
            />
            <Input
              {...register("repeat-password")}
              id="repeat-password"
              name="repeat-password"
              autoComplete="password"
              required
              type="password"
              placeholder="Digite sua senha novamente"
            />

            <div className="w-full mt-4 gap-2 flex flex-col">
              <button className="h-16 bg-red-700 hover:bg-red-600 transition-colors p-2 flex justify-center items-center w-full text-zinc-200 font-bold text-lg rounded-md">
                Criar conta
              </button>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <label htmlFor="rememberMe">Lembre de mim</label>
                </div>
                <a href="/" className="font-bold">
                  Quer voltar?
                </a>
              </div>
            </div>
          </form>
          <h4 className="m-auto mt-4">
            Já tem uma conta nextflix?{" "}
            <a
              className="font-bold cursor-pointer"
              onClick={() => setSignIn(true)}
            >
              Entre na sua conta agora!
            </a>
          </h4>
        </div>
      )}
    </>
  );
}
