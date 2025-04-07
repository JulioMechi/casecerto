import Navbarcomdados from "@/components/navBardados";
import SobreMim from "@/components/Sobre";
import Contato from "@/components/MeusContatos";
import Footercomdados from "@/components/foltercomdados";
//Página de contatos, com nav dados, o contato que fiz e o footer com os dados, default pegando tudo do import
export default function SobreMinPag() {
  return (
    <div>
      <Navbarcomdados/>
      <Contato/>
      <Footercomdados/>
    </div>
  );
}