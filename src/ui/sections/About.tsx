import Image from "next/image";

export default function About()
{
  return(
    <section className="container mx-auto text-center p-2">
      <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">NOSOTROS</h2>
      <div className="flex flex-col p-4">
        <div className="w-full flex items-center bg-white my-4 bg-background rounded-lg shadow 
        hover:shadow-lg group duration-700">

            <div className="relative flex flex-row justify-center rounded-full items-center w-3/6 h-96 ">
              <Image
                className="rounded-l-lg"
                src="/pasteleria.jpg"
                fill={true}
                quality={100}
                objectFit="cover"
                alt="Picture of the author"
              />
            </div>
            <div className="flex-1 pl-6 px-6">
              <h2 className="text-3xl mb-4 font-semibold text-text-primary ">Quienes Somos</h2>
              <p className="text-text-secondary">
                Descubre nuestra exquisita selección de pasteles, perfectos para cualquier celebración o para darte un gusto personal. 
                Desde clásicos pasteles de chocolate y vainilla hasta creaciones innovadoras como tarta de limón con merengue y pastel de red velvet, cada uno de nuestros productos está hecho con ingredientes de alta calidad y una atención meticulosa a los detalles. Ya sea que estés buscando el pastel perfecto para un cumpleaños, una boda o simplemente una merienda especial, nuestro surtido promete endulzar tu día con sabores irresistibles y presentaciones elegantes. ¡Haz tu pedido hoy y déjate llevar por el sabor!
                </p>
            </div>
        </div>

        <div className="w-full flex items-center bg-white  my-4 bg-background  rounded-lg shadow 
        hover:shadow-lg group duration-700 ">

          <div className="flex-1 pl-6 px-10">
            <h2 className="text-3xl mb-4 font-semibold text-text-primary">Un Viaje de Sabores en Cada Taza</h2>
            <p className="text-gray-700">Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. Utilizamos granos de café de la más alta calidad, provenientes de regiones selectas alrededor del mundo, para asegurar que cada sorbo sea una celebración del sabor y el aroma. Perfecto para comenzar el día con energía o para disfrutar de una pausa relajante, nuestro menú de cafés está diseñado para satisfacer todas tus preferencias. Ven y descubre el placer de un café perfectamente preparado, ya sea en nuestra acogedora cafetería o en la comodidad de tu hogar con nuestros productos para llevar. ¡Haz tu pedido y deja que el café hable por ti!</p>
          </div>

          <div className="relative flex flex-row justify-center rounded-full items-center w-3/6 h-96 ">
            <Image
              className="rounded-r-lg"
              src="/PasteleriaA1.jpg"
              fill={true}
              quality={100}
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
