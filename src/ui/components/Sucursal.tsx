import Image from "next/image"

export function Sucursal(
  props: { title: string, src_img: string, src_map: string, description_title: string, description_text: string }) {
  return (

    <div className="flex flex-col py-1">
      <div className="group duration-700 hover:scale-105  ">

        <h2 className="text-2xl font-bold tracking-tight text-text-primary py-10">{props.title}</h2>

        <div className="w-full  mb-4 bg-background  ">
          <div className="flex items-center bg-white ">

            <div className="relative flex flex-row justify-center  items-center w-3/6 h-96 m-5">
              <Image
                className=""
                src={props.src_img}
                fill={true}
                quality={100}
                alt="Picture of the author"
                style={{ width: "100%", display: "block", maxHeight: "100vh", objectFit: "cover" }}
              />
            </div>

            <div className="relative flex flex-row justify-center  items-center w-3/6 h-96 m-5">
              <div className="w-full h-full max-w-4xl mx-auto my-8">
                <iframe
                  src={props.src_map}
                  width="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg h-96 border-none  "
                />
              </div>
            </div>

          </div>
        </div>

        <div className="p-2 flex items-center justify-center ">
          <div className="text-left">
            <p className="text-gray-800 pb-8">{props.description_text}</p>
          </div>
        </div>

      </div>
    </div>
  )
}