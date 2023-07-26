"use client";

import Input from "@/components/Input";
import ErrorSpan from "@/components/ErrorSpan";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "@/contexts/AuthContext";
import { BsCheck as CheckedIcon } from "react-icons/bs";
import * as Checkbox from "@radix-ui/react-checkbox";

const enterUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatorio!")
    .email("O email é invalido!")
    .toLowerCase(),
  password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
});

type EnterUserFormData = z.infer<typeof enterUserFormSchema>;

const createUserFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("O email é obrigatorio!")
      .email("O email é invalido!")
      .toLowerCase(),
    password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password == fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Auth() {
  const [signInScreen, setSignInScreen] = useState(false);
  const [checked, setChecked] = useState(false);
  const formSchema = signInScreen ? enterUserFormSchema : createUserFormSchema;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(formSchema),
  });

  console.log(errors, "ERROS");

  const { signUp } = useContext(AuthContext);

  async function createUser(data: any) {
    await signUp(data);
  }

  return (
    <>       
      {signInScreen ? (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-4 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Entrar</h1>
          <form
            className="flex flex-col w-full gap-2"
            onSubmit={handleSubmit(createUser)}
          >
            <Input
              name="email"
              title="E-mail"
              register={register}
              required
              type="email"
              placeholder="Digite seu e-mail."
              hasError={errors.email ? true : false}
            />
            {errors.email && <ErrorSpan errorText={errors.email.message} />}

            <Input
              name="password"
              title="Senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha"
              hasError={errors.password ? true : false}
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
                  <Checkbox.Root
                    className="w-4 h-4 bg-zinc-50 flex self-center rounded-[4px]"
                    defaultChecked
                    id="c1"
                    checked={checked}
                    onCheckedChange={() => {
                      setChecked(!checked);
                    }}
                  >
                    <Checkbox.Indicator className="text-zinc-900">
                      <CheckedIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
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
              onClick={() => setSignInScreen(false)}
            >
              Crie uma conta agora!
            </a>
          </h4>
        </div>
      ) : (
        <div className="font-base m-auto text-center grid grid-cols-1 gap-1 content-start justify-items-start h-[700px] w-[500px] backdrop-blur-md shadow-black rounded-md shadow-2xl bg-zinc-950/75 p-16">
          <h1 className="font-bold text-3xl">Criar Conta</h1>
          <form
            className="flex flex-col w-full gap-2"
            onSubmit={handleSubmit(createUser)}
          >
            <Input
              name="email"
              title="E-mail"
              register={register}
              required
              type="email"
              placeholder="Digite seu e-mail."
              hasError={errors.email ? true : false}
            />
            {errors.email && <ErrorSpan errorText={errors.email.message} />}
            <Input
              name="password"
              title="Senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha"
              hasError={errors.password ? true : false}
            />
            {errors.password && (
              <ErrorSpan errorText={errors.password.message} />
            )}
            <Input
              name="confirmPassword"
              title="Confirme sua senha"
              register={register}
              required
              type="password"
              placeholder="Digite sua senha novamente"
              hasError={errors.confirmPassword ? true : false}
            />
            {errors.confirmPassword && (
              <ErrorSpan errorText={errors.confirmPassword.message} />
            )}

            <div className="w-full mt-2 gap-1 flex flex-col">
              <button className="h-16 bg-red-700 hover:bg-red-600 transition-colors p-2 flex justify-center items-center w-full text-zinc-200 font-bold text-lg rounded-md">
                Criar conta
              </button>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <Checkbox.Root
                    className="w-4 h-4 bg-zinc-50 flex self-center rounded-[4px]"
                    defaultChecked
                    id="c1"
                    checked={checked}
                    onCheckedChange={() => {
                      setChecked(!checked);
                    }}
                  >
                    <Checkbox.Indicator className="text-zinc-900">
                      <CheckedIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor="rememberMe">Lembre de mim</label>
                </div>
                <a href="/" className="font-bold">
                  Quer voltar?
                </a>
              </div>
            </div>
          </form>
          <h3 className="mt-3 text-sm">
            Já tem uma conta nextflix?{" "}
            <a
              className="font-bold cursor-pointer"
              onClick={() => setSignInScreen(true)}
            >
              Entre na sua conta agora!
            </a>
          </h3>
        </div>
      )}
    </>
  );
}
