export default function CoffeBarPage() {
  return (
    <div className="w-full space-y-8  ">
      <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
      <div className="flex justify-center">
        <div className="container flex flex-col p-4">
          <h2 className="font-bold text-4xl text-primary">Cafeteria</h2>
          <div className="p-4">
            Nuestra acogedora cafetería está equipada para preparar bebidas exquisitas.
            Se sirve café de especialidad, variedad de bebidas frías y calientes para acompañar a los pastelitos que desees degustar ese día. Muchas parejas, reunión de amigos y amigas,  familias y compañeros de trabajo se reúnen para disfrutar del lugar y de la compañía,
          </div>
          <div className="p-4">
            Horario de atención
            La cafetería está abierta de lunes a sábado de 9:00 am a 20:00pm, para servicio de té, café y consumo de nuestros pastelitos.
          </div>
          <div className="p-4">
            <h2 className="font-bold text-3xl text-text-primary text-center p-4"> Menú de bebidas </h2>
            <div className="grid grid-cols-3 p-4">
              <div className=" border-r-2 border-primary border-dashed mx-4">
                <h2 className="text-center font-bold text-xl text-text-secondary">Cafés</h2>
                <ul className="p-4 text-lg font-semibold text-text-secondary list-disc">
                  <li className="py-2">Café espresso simple <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Café espresso doble <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Café Americano simple <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Café Americano doble <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Cappuchino simple <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Cappuchino doble <span className="pl-4 text-text-primary"> 18 Bs.</span></li>
                  <li className="py-2">Café Latte simple <span className="pl-4 text-text-primary"> 15 Bs.</span></li>
                  <li className="py-2">Café Latte doble <span className="pl-4 text-text-primary"> 20 Bs.</span></li>
                  <li className="py-2">Café con leche simple <span className="pl-4 text-text-primary"> 10 Bs.</span></li>
                  <li className="py-2">Café con leche  doble <span className="pl-4 text-text-primary"> 14 Bs.</span></li>
                  <li className="py-2">Flat White <span className="pl-4 text-text-primary"> 15 Bs.</span></li>
                </ul>
              </div>
              <div className=" border-r-2 border-primary border-dashed mx-4">
                <h2 className="text-center font-bold text-xl text-text-secondary">Té e Infusiones</h2>
                <ul className="p-4 text-lg font-semibold text-text-secondary list-disc">
                  <li className="py-2">Té negro <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Té negro con canela y/o clavo <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Té chai  <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Té early gray <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Infusión manzanilla, anis o coca <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Chocolate espumoso caliente simple <span className="pl-4 text-text-primary"> 18 Bs.</span></li>
                  <li className="py-2">Chocolate espumoso caliente doble <span className="pl-4 text-text-primary"> 15 Bs.</span></li>
                  
                </ul>
              </div>
              <div className=" border-r-2 border-primary border-dashed mx-4">
                <h2 className="text-center font-bold text-xl text-text-secondary">Jugos y Refrescos</h2>
                <ul className="p-4 text-lg font-semibold text-text-secondary list-disc">
                  <li className="py-2">Jugo con frutas de la estación, medio litro (agua) <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Jugo con frutas de la estación medio litro (leche) <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Agua sin gas o Agua con gas 600ml <span className="pl-4 text-text-primary"> 7 Bs.</span></li>
                  <li className="py-2">Café Americano doble <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                  <li className="py-2">Sodas de 500ml <span className="pl-4 text-text-primary"> 12 Bs.</span></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
