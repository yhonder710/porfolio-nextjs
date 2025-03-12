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
          <div className="flex border-2 rounded-3xl w-120 text-5xl justify-center items-center gap-8 py-3.5 ">
          <FaFacebook />
          <BsInstagram />
          <IoLogoTiktok />
          <SiWhatsapp />
          <VscGithubInverted />
          </div>
          <p className="text-2xl text-left w-155">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officia pariatur delectus nam, maiores quia cumque ducimus nobis iste saepe ipsum numquam facilis in porro non temporibus aliquam omnis necessitatibus?</p>
        </div>
        <div className="w-[40%] h-80 flex justify-center items-center">
          <img className="rounded-[100%] w-80 h-80 object-cover" src="https://wiki.leagueoflegends.com/en-us/images/Chibi_Akali_Base_Tier_1.png?6ebb1"/>
        </div>
      </section>
    </main>
  )
}
