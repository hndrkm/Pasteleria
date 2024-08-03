import { products } from "@/lib/api";
import { ProductCard } from "@/ui/components/ProductCard";

export default function ConfectioneryPage() {
    return (
        <div className="w-full">
            <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
            <div className="flex justify-center">
                <div className="container flex flex-col p-4">
                    <div className="py-4">
                        <h1 className="text-text-primary text-4xl font-bold">Pasteleria Diaria</h1>
                    </div>
                    <div className="text-text-secondary text-left p-4 font-semibold">
                        En cada sucursal, cada día horneamos una variedad de productos  de pastelería y panadería  dulces y saladas. tenemos servicio para llevar y cafetería.
                        <br />
                        Puede pedirlo con 24 hrs de anticipación para cantidades pequeñas o para cantidades masivas puede reservarlo.
                        <br />
                        <span className="font-bold">
                            HORARIOS DE ATENCIÓN. La pastelería está abierta de lunes a sábado de 9:00 am a 20:00pm, la producción de salados sale a partir de las 10 de la mañana y los dulces a partir de las 11 de la mañana
                        </span>
                    </div>
                    <div>
                        <h1 className="text-lg text-button-hover font-semibold">Elija uno de nuestros productos de pasteleria diaria:</h1>
                        <div className="grid grid-cols-3 gap-6 p-8 m-4">
                            {products.map((item) =>
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    descrition={item.descrition}
                                    price={item.price}
                                    stock={item.stock}
                                ></ProductCard>)
                            }


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
