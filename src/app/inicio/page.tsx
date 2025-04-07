import Image from "next/image";
import Footercomdados from "@/components/foltercomdados";
import Navbarcomdados from "@/components/navBardados";
import TabelaPortifolio from "@/components/tabelaportifolio";
import BotaoImagem from "@/components/botaoimagem";
//Página home, carregando a tabela do portifolio que leva para prj, experiencia e formaçãos
export default function Comeco() {
  return (
    <div>
      <Navbarcomdados/>
      <TabelaPortifolio/>
      <Footercomdados/>
      
    </div>
    )
  }