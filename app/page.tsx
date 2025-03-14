import { FaFacebook} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";


export default function page () {
  return (
    <main className="p-5 flex flex-col h-full justify-center gap-15">
      <section className="w-full h-20">
        <h1 className="text-6xl font-bold text-center">Es un placer, soy Kpito</h1>
      </section >
      <section className="flex">
        <div className="w-[60%] h-80 flex flex-col gap-5 items-center justify-center">
          <h2 className="text-4xl font-bold text-center ">Desarrolador Full Stack Autodidacta</h2>
          <div className="flex flex-col items-center justify-center">
           <p className="text-[18px] w-155 pb-5">
             WhatsApp: Envíanos un mensaje directo para consultas rápidas
             Instagram: Síguenos y envíanos un DM para interactuar
             TikTok: Conéctate con nosotros y déjanos un comentario
             Facebook: Visítanos y envíanos un mensaje en nuestra página
             GitHub: Si tienes preguntas sobre proyectos
           </p>
          </div>
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5 justify-center items-center">
          <img className="rounded-[100%] w-60 h-auto object-cover" src="https://www.shutterstock.com/image-vector/programmer-computer-expert-black-linear-600nw-2033137370.jpg"/>
          <div className="flex border-2 rounded-3xl w-120 text-5xl justify-center items-center gap-8 py-3.5 ">
              <FaFacebook className="bg-blue-500 p-2 rounded-4xl w-13 h-auto"/>
              <BsInstagram className="insta p-2 w-13 h-auto"/>
              <IoLogoTiktok className="bg-black p-2 rounded-4xl w-13 h-auto"/>
              <SiWhatsapp className="bg-green-600 p-2 rounded-4xl w-13 h-auto"/>
              <VscGithubInverted className="bg-black p-2 rounded-4xl w-13 h-auto"/>
            </div>
        </div>
      </section>
    </main>
  )
}
