"use client";

import { signUpRequest } from "@/services/auth";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signUp: (data: SignUpData) => Promise<void>;
};

interface Props {
  children?: ReactNode;
}

type SignUpData = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const isAuthenticated = !!user;

  async function signUp({ email, password }: SignUpData) {
    const signUpRequestResponse = await signUpRequest({
      email,
      password,
    });

    const { token, user } = signUpRequestResponse;



    console.log(token, "-----------------------", user);

    setCookie(undefined, "token", token, {
      maxAge: 60 * 60 * 1, //1 hour
    });

    setUser(user);

    // router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
