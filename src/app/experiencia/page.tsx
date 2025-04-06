import Image from "next/image";
import Footercomdados from "@/components/foltercomdados";
import Navbarcomdados from "@/components/navBardados";
import Empresa from "@/components/empresa";
import BotaoImagem from "@/components/botaoimagem";

export default function Formacaopag() {
  return (
    <div>
      <Navbarcomdados/>
      <Empresa/>
      <Footercomdados/>
      
    </div>
    )
  }