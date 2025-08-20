import { Cake } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";


export function CakeCard(props: Cake) {
    return (

        <div className="flex rounded-xl max-w-4xl overflow-hidden border border-primary ">
            <div className="w-1/3 p-4 flex justify-center items-center bg-white">
                <div className="min-w-60 min-h-60 rounded-xl overflow-hidden relative aspect-video ">
                    <Image
                        fill
                        src={props.img}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                        alt="image"
                    />
                </div>
            </div>
            <div className="w-2/3 p-4 flex flex-col items-center justify-center text-text-secondary text-left ">
                <h3 className="text-xl font-bold tracking-tighter mt-3 mb-1">
                    { props.title}
                </h3>
                <p className=" leading-5">{props.description } </p>
                <div>
                    <ul className="p-2 m-2 list-disc">
                        <li>
                            10 Porciones Bs. {props.price_1}.00
                        </li>
                        <li>
                            20 Porciones Bs. {props.price_2}.00
                        </li>
                        <li>
                            30 Porciones Bs. {props.price_3}.00
                        </li>
                    </ul>
                </div>
                <div className="px-2">
                    <button className="w-full bg-button rounded-lg no-underline text-white hover:bg-button-hover p-2"
                    >
                        <Link href="/docs/cards-with-image-bg">Hacer Pedido</Link>
                    </button>
                </div>
            </div>

        </div>)
}