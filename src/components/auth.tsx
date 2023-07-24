"use client";

import Input from "@/components/input";
import ErrorSpan from "@/components/errorSpan";
import { useContext, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "@/contexts/AuthContext";

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatorio!")
    .email("O email é invalido!")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Auth() {
  const [signUpScreen, setSignUpScreen] = useState(true);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  console.log(errors, "ERROS");

  const { signUp } = useContext(AuthContext);
  
  async function createUser(data: any) {
    await signUp(data)
  }

  return (
    <>
      {signUpScreen ? (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-4 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Entrar</h1>
          <form
            className="flex flex-col w-full gap-4"
            onSubmit={handleSubmit(createUser)}
          >
            <Input
              name="email"
              title="E-mail"
              register={register}
              required
              type="email"
              placeholder="Digite seu e-mail."
            />
            {errors.email && <ErrorSpan errorText={errors.email.message} />}

            <Input
              name="password"
              title="Senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha"
            />
            {errors.password && (
              <ErrorSpan errorText={errors.password.message} />
            )}

            <div className="w-full mt-4 gap-2 flex flex-col">
              <button
                type="submit"
                className="h-16 bg-red-700 hover:bg-red-600 transition-colors p-2 flex justify-center items-center w-full text-zinc-200 font-bold text-lg rounded-md"
              >
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
              onClick={() => setSignUpScreen(false)}
            >
              Crie uma conta agora!
            </a>
          </h4>
        </div>
      ) : (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-4 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Criar Conta</h1>
          <form
            className="flex flex-col w-full gap-4"
            onSubmit={handleSubmit(createUser)}
          >
            <Input
              name="email"
              title="E-mail"
              register={register}
              required
              type="email"
              placeholder="Digite seu e-mail."
            />
            {errors.email && <ErrorSpan errorText={errors.email.message} />}
            <Input
              name="password"
              title="Senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha"
            />
            {errors.password && (
              <ErrorSpan errorText={errors.password.message} />
            )}
            <Input
              name="repeat-password"
              title="Repita sua senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha novamente"
            />
            {errors.password && (
              <ErrorSpan errorText={errors.password.message} />
            )}

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
              onClick={() => setSignUpScreen(true)}
            >
              Entre na sua conta agora!
            </a>
          </h4>
        </div>
      )}
      <DevTool control={control} />
    </>
  );
}
