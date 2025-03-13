          /* iconos del fronten */
import { FaSquareJs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
export default function page () {
  return(
    <section className="flex justify-center">
      <div className="w-300 flex flex-col h-full items-center gap-5">
      <h2 className="text-4xl font-bold">Develope skill</h2>
      <div>
        <img className="w-screen h-50 object-cover rounded-3xl" src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/02/%C2%BFQue-es-un-framework-en-programacion-scaled.jpg" alt="" />
      </div>
      <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt at amet? Quaerat repellendus illo in odit facere minus ad, adipisci deleniti voluptatibus dolor nobis vel animi omnis rem nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere nisi harum quidem rerum odio omnis distinctio, obcaecati reiciendis modi sint, molestiae quo eligendi debitis ab tenetur expedita ipsum at!</p>
      <div className="flex gap-10 w-full">
          <div className="border-2 w-100 h-40 rounded-2xl justify-center items-center pt-3">
            <section className="flex flex-col justify-center items-center">
              <h3 className=" text-3xl font-bold">FRONTENT</h3>
            </section>
            <section className="flex justify-center items-center pt-4 text-6xl gap-2">
              <FaHtml5 className="text-orange-600"/>
              <FaCss3Alt className="text-blue-700"/>
              <FaSquareJs className="text-yellow-500"/>
              <FaReact className="text-[#337ef6]" />
              <SiTailwindcss className="text-[#33f6cf]"/>
            </section>
          </div>
        <div className="border-2 w-100 h-40 rounded-2xl"></div>
        <div className="border-2 w-100 h-40 rounded-2xl"></div>
      </div>
      </div>
    </section>
  )
}
