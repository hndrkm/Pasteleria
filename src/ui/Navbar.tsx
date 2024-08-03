'use client'
import { FC } from "react"
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { NavItem } from "./components/NavItem";

interface Props {
  locale: string
}
const navigation =
  [
    {
      'name': "INICIO",
      'href': "/"
    },
    {
      'name': "PRODUCTOS",
      'href': "/products"
    },
    {
      'name': "NOSOTROS",
      'href': "/about"
    },
    {
      'name': "CONTACTO",
      'href': "/contact"
    }
  ]
export const Navbar: FC<Props> = ({ locale }) => {
  return (
    <header className="fixed z-30 w-full bg-white/70">
      <div className="mx-auto flex flex-row justify-center backdrop-blur-sm">
        <div className="flex items-center justify-end py-2 hover:translate-y-[5px] transition duration-300 ease-in-out">
          <Image
            src="/Plogot2.png"
            width={400}
            height={100}
            alt="Pasteleria Alarcon"
          />
        </div>

        <div className=" p-8">
          <ul className="font-medium flex flex-row px-4 
           mt-4 border-x border-primary ">
            {navigation.map((item) =>
              <li key={item.name}>
                <NavItem  name={item.name} href={item.href}></NavItem>
              </li>)
            }
          </ul>
        </div>

        <div className="flex items-center justify-start  pt-8">
          <FaFacebookSquare className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
          <RiWhatsappFill className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px]   transition duration-300 ease-in-out" />
          <FaInstagram className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
        </div>
      </div>
    </header>
  )
} 
