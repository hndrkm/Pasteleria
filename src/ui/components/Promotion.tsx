import { tPromotion } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export function Promotion(props: tPromotion) {
    return (
        <div className="max-w-max p-4">
            <div className="max-w-min bg-background border rounded-lg shadow-lg hover:shadow-lg hover:shadow-button-hover group">
                <div className="relative h-72 w-96 flex justify-center">
                    <Image
                        className="rounded-lg"
                        src={props.image}
                        fill={true}
                        quality={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-semibold tracking-tight text-text-primary group-hover:text-destructive">{props.title}</h5>
                    <p className="p-2 text-justify">{props.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-text-primary group-hover:text-destructive">Desde Bs.{props.price}</span>
                        <Link href={props.href} className="text-white bg-button hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center">Al Pedido</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
