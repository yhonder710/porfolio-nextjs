'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Link {
  name: string,
  href: string,
}

const link: Link[] = [
  {name: 'Inicio', href: '/'},
  {name: 'Sobre mi', href: '/sobreMi'},
  {name: 'Proyectos', href: '/proyectos'},
  {name: 'Contactos', href: '/contactos'}
]


export function NavLink () {
  const pathname = usePathname()

  return (
    <header>
      <div className="bg-transparent border-2 w-120 h-15 rounded-3xl p-2 flex justify-center">
        <ul className="flex justify-center items-center gap-5 text-[18px] font-bold">
          {
            link.map(link => {

              return (
                <Link key={link.name} href={link.href} className={`p-[5px] px-[10px] rounded-2xl ${pathname === link.href ? 'bg-indigo-700' : ''}`}>
                {link.name}
                </Link>
              )
            })
          }
        </ul>
      </div>
    </header>
  )
}
