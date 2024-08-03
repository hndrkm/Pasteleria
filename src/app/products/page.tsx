import { ProductCard } from "@/ui/components/ProductCard";
import { products } from "@/lib/api";
import Link from "next/link";
export default function ProductPage() {
    return (
        <div className="w-full ">
            <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
            <div className="text-center">
                <h2 className="text-5xl font-bold tracking-tight text-text-primary py-10">PRODUCTOS y SERVICIOS</h2>
                <div className="flex flex-col items-center divide-y-2 divide-dashed divide-primary">
                    <div className="container flex flex-row p-4">
                        <div className="flex justify-center w-1/3 bg-muted-foreground  m-2 rounded-lg border-2 border-button-hover">
                            <span className="m-auto text-black">Imagen</span>
                        </div>
                        <div className="w-2/3 py-4 flex flex-col">
                            <h1 className="text-center text-text-primary text-4xl font-bold w-full">Pasteleria</h1>

                            <p className="text-text-secondary text-left p-4 font-semibold text-xl">
                                En cada sucursal, cada día horneamos una variedad de productos  de pastelería y panadería  dulces y saladas. tenemos servicio para llevar y cafetería.
                                La pastelería está disponible y la producción de salados sale a partir de las 10 de la mañana y los dulces a partir de las 11 de la mañana.
                            </p>
                            <Link href={"/products/confectionery"}>
                                <button className="bg-button p-2 rounded-md text-white font-bold hover:bg-button-hover mx-4">
                                    Ver mas
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="container flex flex-row p-4">
                        <div className="flex justify-center w-1/3 bg-muted-foreground m-2 rounded-lg border-2 border-button-hover">
                            <span className="m-auto text-black">Imagen</span>
                        </div>
                        <div className="w-2/3 py-4 flex flex-col">
                            <h1 className="text-center text-text-primary text-4xl font-bold w-full">Cafeteria</h1>

                            <p className="text-text-secondary text-left p-4 font-semibold text-xl">
                                Nuestra acogedora cafetería está disponible, en El Alto, se sirve café de especialidad, variedad de bebidas frías y calientes para acompañar a los pastelitos que desees degustar ese día. Muchas parejas, reunión de amigos y amigas,  familias y compañeros de trabajo se reúnen para disfrutar del lugar y de la compañía,
                            </p>
                            <Link href={"/products/coffee_bar"}>
                                <button className="bg-button p-2 rounded-md text-white font-bold hover:bg-button-hover mx-4">
                                    Ver mas
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="container flex flex-row p-4">
                        <div className="flex justify-center w-1/3 bg-muted-foreground  m-2 rounded-lg border-2 border-button-hover">
                            <span className="m-auto text-black">Imagen</span>
                        </div>
                        <div className="w-2/3 py-4 flex flex-col">
                            <h1 className="text-center text-text-primary text-4xl font-bold w-full">Tortas</h1>

                            <p className="text-text-secondary text-left p-2 font-semibold text-xl">
                                Cada torta se hace una a una con los mejores ingredientes naturales.

                                Pedidos con 24 hrs de anticipación a la entrega.

                                Las tortas clásicas incluyen texto escrito en torta o cartelito personalizado, otros detalles ingrese a tortas para eventos
                            </p>
                            <Link href={"/products/cake_shop"}>
                                <button className="bg-button p-2 rounded-md text-white font-bold hover:bg-button-hover mx-4">
                                    Ver mas
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="container flex flex-row p-4">
                        <div className="flex justify-center w-1/3 bg-muted-foreground  m-2 rounded-lg border-2 border-button-hover">
                            <span className="m-auto text-black">Imagen</span>
                        </div>
                        <div className="w-2/3 py-4 flex flex-col">
                            <h1 className="text-center text-text-primary text-4xl font-bold w-full">Servicio de Eventos</h1>

                            <p className="text-text-secondary text-left p-2  font-semibold text-xl">
                                En cada sucursal, cada día horneamos una variedad de productos  de pastelería y panadería  dulces y saladas. tenemos servicio para llevar y cafetería.
                                La pastelería está disponible y la producción de salados sale a partir de las 10 de la mañana y los dulces a partir de las 11 de la mañana.
                                <br />
                                Ver las sucursales aqui.
                            </p>
                            <Link href={"/products/events"}>
                                <button className="bg-button p-2 rounded-md text-white font-bold hover:bg-button-hover mx-4">
                                    Ver mas
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}