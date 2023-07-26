import Image from "next/image";
import Logo from "../../assets/imgs/nextflix-logo.png";
import Background from "../assets/imgs/background.jpg";
import Auth from "@/components/AuthPage";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Header authPage={false} />
        <div className="text-white h-screen flex flex-col justify-center antialiased">
          <Auth />
          <div className="h-screen w-screen fixed top-0 background-gradient -z-10"></div>
          <div className="h-screen w-screen fixed top-0 bg-cover bg-[url('../assets/imgs/background.jpg')] -z-20"></div>
        </div>
      </AuthProvider>
    </>
  );
}
