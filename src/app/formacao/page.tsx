import Image from "next/image";
import Footercomdados from "@/components/foltercomdados";
import Navbarcomdados from "@/components/navBardados";
import Formacao from "@/components/formacao";
import BotaoImagem from "@/components/botaoimagem";
//Página que demonstra minhas formações, com nav bar para retorno e a tabela que fiz para mack, footer também com os dados, diferente
// do inicial
export default function Formacaopag() {
  return (
    <div>
      <Navbarcomdados/>
      <Formacao/>
      <Footercomdados/>
      
    </div>
    )
  }