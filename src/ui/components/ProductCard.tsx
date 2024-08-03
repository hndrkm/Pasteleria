import Image from "next/image";
import { Product } from "@/lib/definitions";
export function ProductCard(props: Product) {
    return (
        <div className="flex flex-col justify-between text-left bg-white rounded-lg group
        shadow-md">

            <figure className="relative flex flex-row justify-center rounded-lg group-hover:bg-white/80">
                <img
                    src="https://picsum.photos/id/493/800/600"
                    alt="card image"
                    className="aspect-video w-full rounded-lg group-hover:blur-sm"
                />
                <div className="text-center absolute h-full font-bold opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                    <p className="text-text-secondary">
                        {props.descrition}
                    </p>
                </div>
            </figure>

            <div className="p-6">
                <h3 className="text-xl font-bold text-primary">
                    {props.title}
                </h3>
            </div>
            <div className="flex justify-between p-6 pt-2">
                <div className="text-text-primary text-3xl 
                group-hover:text-button-hover group-hover:font-bold">
                    Bs. {props.price}
                    <p className="text-sm">Disponibles {props.stock} unidades</p>
                </div>
                <div className="flex flex-col">
                    <button className="h-10 m-2 items-center justify-center gap-2 whitespace-nowrap rounded bg-button px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-button-hover focus:bg-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:border-muted-DEFAUT disabled:bg-muted-DEFAUT disabled:shadow-none">
                        <span>Pide Ahora!</span>
                    </button>
                    <button className="h-10 m-2 items-center justify-center gap-2 whitespace-nowrap rounded bg-button px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-button-hover focus:bg-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:border-muted-DEFAUT disabled:bg-muted-DEFAUT disabled:shadow-none">
                        <span>Reserva Ahora!</span>
                    </button>
                </div>

            </div>

        </div>
    )
}
