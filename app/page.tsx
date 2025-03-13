import { FaFacebook} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";


export default function page () {
  return (
    <main className="p-5 flex flex-col gap-10">
      <section className="w-full h-20">
        <h1 className="text-6xl font-bold text-center">Es un placer, soy Kpito</h1>
      </section >
      <section className="flex">
        <div className="w-[60%] h-80 flex flex-col gap-5 items-center justify-center">
          <h2 className="text-4xl font-bold text-center ">Desarrolador Full Stack Autodidacta</h2>
            <div className="flex border-2 rounded-xl w-120 text-5xl justify-center items-center gap-8 py-3.5 ">
              <FaFacebook  className="bg-white text-[#2c7ffa] rounded-4xl"/>
              <BsInstagram className="bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 p-1 rounded-[14px] text-white "/>
              <IoLogoTiktok className="bg-black rounded-3xl p-1"/>
              <SiWhatsapp className="bg-green-600 rounded-3xl p-[5px]"/>
              <VscGithubInverted className="bg-black rounded-3xl p-1"/>
            </div>
          <div>
          <ul className="text-[21px] text-left w-155">
            <li>WhatsApp: Envíanos un mensaje directo para consultas rápidas.</li>
            <li>Instagram: Síguenos y envíanos un DM para interactuar.</li>
            <li>TikTok: Conéctate con nosotros y déjanos un comentario.</li>
            <li>Facebook: Visítanos y envíanos un mensaje en nuestra página.</li>
            <li>GitHub: Si tienes preguntas sobre proyectos, no dudes en abrir un issue.</li>
          </ul>
          </div>
        </div>
        <div className="w-[40%] h-80 flex justify-center items-center">
          <img className="rounded-[100%] w-80 h-80 object-cover" src="https://www.shutterstock.com/image-vector/programmer-computer-expert-black-linear-600nw-2033137370.jpg"/>
        </div>
      </section>
    </main>
  )
}
