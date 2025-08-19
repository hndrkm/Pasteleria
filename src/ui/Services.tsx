import { CardService } from "./components/CardService";
const dataService =
    [
        {
            'id': 1,
            'name': "Pasteleria Diaria",
            'href': "/products/confectionery",
            'img': "/Icon1.png"
        },
        {
            'id': 2,
            'name': "Cafeteria",
            'href': "/products/coffee_bar",
            'img': "/Icon2.jpg"
        },
        {
            'id': 3,
            'name': "Tortas Clasicas",
            'href': "/products/cake_shop",
            'img': "/Icon3.jpg"
        },
        {
            'id': 4,
            'name': "Tortas para Eventos",
            'href': "/products/events",
            'img': "/Icon4.jpg"

        }
    ]
export default function Footer() {
    return (
        <section id="services" className="py-10 bg-background">
            <div className="w-full text-5xl text-center font-bold tracking-tight text-text-primary p-4">SERVICIOS</div>
            <div className="flex flex-row justify-center">
                {dataService.map((service) =>
                    <CardService key={service.id} name={service.name} img={service.img}  />
                )}

            </div>
        </section>
    )
}
