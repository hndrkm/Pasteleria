import OurService from "../components/OurService";
export default function OurServices() {
  return (

   <section className="container mx-auto text-center ">

     <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">NUESTROS SERVICIOS</h2>

     <div className="flex flex-col items-center">
        <OurService 
        src_img="/PasteleriaA1.jpg" 
        title="Un Viaje de Sabores" description="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. " />
        <OurService src_img="/PasteleriaA1.jpg" title="Un Viaje de Sabores" description="Embárcate en un viaje sensorial con nuestra exclusiva selección de cafés, cuidadosamente elaborados para los verdaderos amantes del café. Desde intensos espressos y suaves lattes hasta exquisitos cafés filtrados y frappés refrescantes, cada taza es una experiencia única. " />
     </div>

   </section>
  )
}

