import Image from "next/image";
import Footercomdados from "@/components/foltercomdados";
import Navbarcomdados from "@/components/navBardados";
import Formacao from "@/components/formacao";
import BotaoImagem from "@/components/botaoimagem";

export default function Formacaopag() {
  return (
    <div>
      <Navbarcomdados/>
      <Formacao/>
      <Footercomdados/>
      
    </div>
    )
  }