import Image from "next/image";
import Footer from "@/components/footersemdados";
import Navbar from "@/components/navBar";
import BotaoImagem from "@/components/botaoimagem";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <BotaoImagem />
    </div>
    )
  }
