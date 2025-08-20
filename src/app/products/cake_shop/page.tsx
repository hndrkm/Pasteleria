import { cakes } from "@/lib/api";
import { CakeCard } from "@/ui/components/CakeCard";
import Image from "next/image";
import Link from "next/link";

export default function CakeShopPage() {
  return (
    <div className="w-full mb-4">
      <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
      <div className="flex justify-center">
        <div className="container flex flex-col p-4">
          <h2 className="font-bold text-4xl text-primary">Tortas</h2>
          <div className="p-4 text-text-secondary">
            Cada torta se hace una a una con los mejores ingredientes naturales.

            Pedidos con 24 hrs de anticipación a la entrega.

            Las tortas clásicas incluyen texto escrito en torta o cartelito personalizado, otros detalles ingrese a tortas para eventos
          </div>
          <div className="p-4 text-text-secondary">
            <span className=" text-xl font-bold ">Personaliza tu torta gratis!</span><br />
            Escritura de en torta con chocolate con mensajes cortos Topper o cartelito impreso pinchado en la torta con la imagen y mensaje que desee.
            Usted puede enviar la imagen de buena calidad a nuestro whatsapp el momento de pedir su torta que sera impresa en papel fotográfico e incluido en su torta, si no tiene la imagen solo díganos que tema desea y el mensaje y nosotros diseñaremos el topper para su torta.
          </div>
          <div className="p-4">
            <h2 className="font-bold text-3xl text-text-primary text-center p-4"> Tortas disponibles </h2>
            <div className="container grid grid-cols-1 gap-4 place-items-center">
            {cakes.map((item) =>
                                <CakeCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    img={item.img}
                                    price_1={item.price_1}
                                    price_2={item.price_2}
                                    price_3={item.price_3}
                                    price_4={item.price_4}
                                ></CakeCard>)
                            }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
