import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto  p-2">
      <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">NOSOTROS</h2>
      <div className="flex flex-col p-4">
        <div className="w-full flex items-center bg-white my-4 bg-background rounded-lg 
         group duration-700">

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
              Somos una pasteleria que cuenta con un equipo humano comprometido con satisfacer los requerimientos de nuestros clientes mediante la elaboracion de productos de calidad, innovando diseños de acuerdo a las preferencias de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center bg-white  my-4 bg-background  rounded-lg  group duration-700 ">

          <div className="flex-1 pl-6 px-10">
            <h2 className="text-3xl mb-4 font-semibold text-text-primary">Un Viaje de Sabores en Cada Taza</h2>
            <p className="text-gray-700"> 
              <h1 className="font-bold">MISIÓN</h1>
              Satisfacer a nuestros clientes con la variedad de productos,
              elaborados eficientemente con insumos de calidad y con un equipo
              humano comprometido.
              <h1 className="font-bold">VISIÓN</h1>
              Ser una de las pastelerías preferidas dentro de nuestro mercado
              principalmente por el sabor, calidad, creatividad e innovación de
              nuestros productos, la excelente atención y la constante cercanía
              con nuestros clientes para conocer sus diferentes inquietudes.
              <h1 className="font-bold">VALORES</h1>
              Esfuerzo, Eficiencia, Calidad e innovación serán nuestros pilares
              fundamentales para establecernos dentro de nuestro mercado</p>
          </div>

          <div className="relative flex flex-row justify-center rounded-full items-center w-3/6 h-96 ">
            <Image
              className="rounded-r-lg"
              src="/LogoP.png"
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
