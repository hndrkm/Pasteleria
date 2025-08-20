import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

export default function ContactUs() {
  return (

    <div className="w-3/6 mx-auto text-center ">
      <h2 className="text-5xl font-bold tracking-tight text-text-primary pb-10">CONTACTENOS</h2>
      <div className="flex flex-col">

        <div className=" group duration-700 hover:scale-105  ">


          <div className="flex items-center justify-center  py-8 ">
            <a href="https://www.facebook.com/pasteleriaalarcon97">
            <FaFacebookSquare className="text-button hover:text-button-hover w-28 h-28 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
            </a>
            
            <a href="https://api.whatsapp.com/send?phone=59163190136&text=Hola">
            <RiWhatsappFill className="text-button hover:text-button-hover w-28 h-28 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
            </a>
            
            <a href="https://www.instagram.com/pasteleriaalarcon/">
            <FaInstagram className="text-button hover:text-button-hover w-28 h-28 p-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
            </a>
            
            <a href="https://www.facebook.com/pasteleriaalarcon97">
              <FaTiktok className="text-button hover:text-accent w-28 h-28 m-2 hover:translate-y-[-5px] transition duration-300 ease-in-out" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
