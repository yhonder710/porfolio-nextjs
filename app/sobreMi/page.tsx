          /* iconos del fronten */
import { FaSquareJs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
          /* iconos del Backent */
import { FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
          /* iconos de herramientas */
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

export default function page () {
  return(
    <main className="flex flex-col h-full justify-center">
    <section className="flex justify-center">
      <div className="w-300 flex flex-col h-full items-center gap-5">
        <h2 className="text-4xl font-bold">Develope skill</h2>
      <div>
        <img className="w-screen h-50 object-cover rounded-3xl" src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/02/%C2%BFQue-es-un-framework-en-programacion-scaled.jpg" alt="" />
      </div>
        <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt at amet? Quaerat repellendus illo in odit facere minus ad, adipisci deleniti voluptatibus dolor nobis vel animi omnis rem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere nisi harum quidem rerum odio omnis distinctio, obcaecati reiciendis modi sint, molestiae quo eligendi debitis ab tenetur expedita ipsum at!</p>
      <div className="flex gap-10 w-full">
        {/* PARTE DE ICONOS DEL FRONTEN */}
          <div className="border-2 w-100  rounded-2xl justify-center items-center pt-3">
            <section className="flex flex-col justify-center items-center">
              <h3 className=" text-3xl font-bold">FRONTENT</h3>
            </section>
            <section className="flex flex-wrap justify-center items-center p-2 text-6xl gap-4">
              <FaHtml5 className="text-orange-600"/>
              <FaCss3Alt className="text-blue-700"/>
              <FaSquareJs className="text-yellow-400"/>
              <FaReact className="text-[#337ef6]" />
              <SiTailwindcss className="text-[#33f6cf]"/>
              <RiNextjsFill className="bg-white text-black rounded-4xl w-14 h-auto"/>

            </section>
          </div>
          {/* PARTE DE ICONOS DEL BACKENT */}
        <div className="border-2 w-100 h-40 rounded-2xl justify-center items-center pt-3">
          <section className="flex flex-col justify-center items-center">
            <h3 className=" text-3xl font-bold">BACKENT</h3>
          </section>
          <section className="flex justify-center items-center p-2 text-6xl gap-4">
            <FaNodeJs className="text-green-700"/>
            <SiSqlite className="text-blue-500"/>
          </section>
        </div>
        {/* PARTE DE ICONOS DEL TOOLS */}
        <div className="border-2 w-100 h-40 rounded-2xl justify-center items-center pt-3">
          <section className="flex flex-col justify-center items-center">
            <h3 className=" text-3xl font-bold">
            TOOLS
            </h3>
          </section>
          <section className="flex justify-center items-center p-2 text-6xl gap-2">
          <BiLogoVisualStudio className="text-[#0063ee]"/>
          <SiFigma className="text-fuchsia-400 p-1"/>
          <SiAdobephotoshop className="bg-[#0f8ad1] rounded-2xl text-[#03265a] p-1"/>
          <SiAdobeillustrator className="bg-[#f47c24] rounded-2xl text-[#3b1e08] p-1"/>
          </section>
        </div>
      </div>
      </div>
    </section>
    </main>
  )
}
