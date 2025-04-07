import Image from "next/image";
import Footercomdados from "@/components/foltercomdados";
import Navbarcomdados from "@/components/navBardados";
import ProjetosCerto from "@/components/projetoscerto"
import BotaoImagem from "@/components/botaoimagem";
//pagina que evidentemente mostra os projetos
export default function Comeco() {
  return (
    <div>
      <Navbarcomdados/>
      <ProjetosCerto/>
      <Footercomdados/>
      
    </div>
    )
  }