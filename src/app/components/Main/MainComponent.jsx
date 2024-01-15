import Link from "next/link";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function MainComponent() {
  return (
    <div>
      <nav className="flex items-center gap-40 mb-11 md:h-full md:w-20" >
        <Link href="/choose-card" className="hidden sm:block">
          <ButtonComponent text={"Empezar"} />
        </Link>
        <div className="items-center mt-10">
          <h1 className="text-[5.25rem] text-font-color leading-9">Sakura Tarot </h1>
          <h2 className={`text-[3rem] text-center text-font-color mt-5`}>Instrucciones</h2>
        </div>
      </nav>
      <section className="flex flex-col sm:flex-row items-center gap-20 mt-10">
  <img src="/img/pngwing.png" className="w-13.188 h-140 mb-5 sm:mb-0  " />
  <section className="max-w-xl">
          <div className="p-5 cm:flex cm:colunm">
            <p className="text-[1.5em] text-font-color  sm:ml-7">
              ¡Bienvenido a nuestra plataforma de tarot! Descubre las
              revelaciones del pasado, presente y futuro con las cartas clown.
              Sigue estos sencillos pasos para obtener tu lectura personalizada.
              Explora las cartas y elige las 3 que más te llame la atención, con esas 3 cartas veremos tu pasado, presente y futuro.
            </p>
          </div>
          <div className="mb-20">
            <p className="text-[1.5rem] text-font-color p-6">
              Te aconsejamos que te siéntes en un lugar tranquilo, respira
              profundamente y permite que la energía de las cartas te envuelva.
              ¡La experiencia de Tarot de Sakura está diseñada para iluminar tu
              camino interior y ofrecerte perspectivas fascinantes! ¡Que las
              cartas guíen tu viaje!
            </p>
          </div>
             <Link href="/choose-card">
          <ButtonComponent text={"Empezar"} />
        </Link>
        </section>
      </section>
    </div>
  );
}
