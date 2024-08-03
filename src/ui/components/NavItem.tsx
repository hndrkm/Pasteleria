import Link from "next/link"

export function NavItem (props:{name:string,href:string})
{
    return (
        <div>
            <Link href={props.href} 
            className="font-bold block py-2 px-4 text-lg text-text-primary  decoration-4 uppercase
            hover:text-accent
            hover:underline
            hover:translate-y-[-5px] transition duration-300 ease-in-out">
            {props.name}
            </Link>
        </div>
    )
}
