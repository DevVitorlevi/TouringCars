import Car from "@/assets/images/Macan.png";
import Inter from "@/assets/images/TextMacan.png";

export function Cards() {
  return (
    <div className="w-full grid grid-cols-1 gap-8 justify-items-center py-5 lg:px-10 lg:flex xl:justify-between xl:w-[1250px] xl:m-auto">

      {/* Card da imagem do carro */}
      <div
        className="w-[90%] h-[490px] lg:w-[50%] xl:w-[60%] 2xl:w-[60%] bg-cover bg-no-repeat bg-center rounded-4xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
        style={{ backgroundImage: `url(${Car.src})` }}
      ></div>

      {/* Card com texto */}
      <div
        className="w-[90%] h-[490px] lg:w-[50%] xl:w-[40%] 2xl:w-[40%] bg-cover bg-left-top rounded-4xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center flex-col justify-center p-6"
        style={{ backgroundImage: `url(${Inter.src})` }}
      >
        <span className="text-center text-[1.2rem] mb-3 md:text-[1.8rem] xl:text-[1.4rem] text-white">Novo Porsche Macan GTS</span>
        <p className="text-white text-[1rem] md:text-[1.4rem] xl:text-[1.2rem] leading-relaxed text-justify mx-10">
          Novo Macan GTS: destaque nos aspectos em que os outros se perdem na multidão. Jovem, dinâmico e urbano, com equipamentos de série completos, características de design exclusivas do modelo e, é claro, o tradicional desempenho Porsche.
        </p>
      </div>

    </div>
  );
}
