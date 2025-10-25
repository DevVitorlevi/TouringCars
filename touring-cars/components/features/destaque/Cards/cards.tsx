import Car from "@/assets/images/Macan.png";
import Inter from "@/assets/images/TextMacan.png";

export function Cards() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 py-10 px-4">

      {/* Card da imagem do carro */}
      <div
        className="w-[801px] h-[490px] bg-cover bg-center rounded-2xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
        style={{ backgroundImage: `url(${Car.src})` }}
      ></div>

      {/* Card com texto */}
      <div
        className="w-[431px] h-[490px] bg-cover bg-center rounded-2xl relative shadow-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center flex-col justify-center p-6"
        style={{ backgroundImage: `url(${Inter.src})` }}
      >
        <span className="text-center text-[1.5rem] mb-3 text-white">Novo Porsche Macan GTS</span>
        <p className="text-white text-[1.2rem] leading-relaxed text-justify mx-10">
    Novo Macan GTS: destaque nos aspectos em que os outros se perdem na multidão. Jovem, dinâmico e urbano, com equipamentos de série completos, características de design exclusivas do modelo e, é claro, o tradicional desempenho Porsche.
        </p>
      </div>

    </div>
  );
}
