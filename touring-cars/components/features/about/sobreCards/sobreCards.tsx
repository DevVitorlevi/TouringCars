"use client";
import Image from "next/image";
import Car from "@/assets/images/porsche-model1 1.png";

export function SobreNos() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20">
      {/* Card de texto */}
      <div className="w-full md:w-[700px] bg-gray-100 flex items-center rounded-2xl shadow-2xl p-6">
        <div>
          <h1 className="text-4xl font-bold mb-5">Sobre nós</h1>

          <p className="text-justify mb-4 font-semibold">
            A Touring Cars é especializada, principalmente, na venda de veículos
            de luxo e superesportivos. Com segurança, transparência e qualidade,
            nossos veículos são verificados e certificados para garantir ao
            cliente uma compra completamente segura.
          </p>

          <p className="text-justify mb-4 font-semibold">
            Oferecemos exemplares especiais e exclusivos, além de um amplo
            estoque renovado diariamente para oferecer a melhor experiência e um
            alto padrão de qualidade.
          </p>

          <p className="text-justify mb-4 font-semibold">
            Contamos com Detail Center, frota própria para entrega em todo o
            Brasil, além de um showroom premium dedicado aos carros
            superesportivos, especiais, personalizados e exclusivos.
          </p>

          <p className="text-justify font-semibold">
            A Touring Cars se orgulha de firmar parcerias com os melhores
            fornecedores, lojas e centros técnicos do mundo, para juntos desenhar
            uma das melhores estruturas de comércio de carros de luxo no país.
          </p>
        </div>
      </div>

      {/* Imagem */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={Car}
          alt="Porsche"
          className="w-full max-w-[500px] h-auto"
          priority
        />
      </div>
    </section>
  );
}
