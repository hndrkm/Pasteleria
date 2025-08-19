'use client'
import { FC } from "react"
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
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
    <header className="fixed z-30 w-full bg-white">
      <div className="mx-auto flex flex-row justify-center backdrop-blur-sm">
        <div className="flex items-center justify-end py-2 hover:translate-y-[5px] transition duration-300 ease-in-out">
          <Image
            src="/logodark.svg"
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
                <NavItem name={item.name} href={item.href}></NavItem>
              </li>)
            }
          </ul>
        </div>

        <div className="flex items-center justify-start  pt-8">
          <a href="https://www.facebook.com/pasteleriaalarcon97">
            <FaFacebookSquare className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=59163190136&text=Hola">
            <RiWhatsappFill className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px]   transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.instagram.com/pasteleriaalarcon/">
            <FaInstagram className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.facebook.com/pasteleriaalarcon97">
            <FaTiktok className="text-button hover:text-accent w-7 h-7 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
          </a>

        </div>
      </div>
    </header>
  )
} 
