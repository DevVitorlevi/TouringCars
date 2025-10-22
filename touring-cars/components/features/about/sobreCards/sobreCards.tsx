"use client"
import Image from "next/image"
import Car from "@/assets/images/porsche-model1 1.png"
export function SobreNos(){
    return(
        <>
            <section className="flex items-center justify-center">
                    <div className="w-[600px] h-[600px] bg-gray-100 flex items-center rounded-2xl shadow-2xl my-20">
                        <div>
                            <h1 className="ml-5 mb-3 text-4xl font-bold">Sobre nós</h1>
                            <p className="text-[1] text-justify m-5 font-semibold">A Touring Cars é especializada, principalmente, na venda de veículos de luxo e superesportivos. Com Segurança, transparência e qualidade, nossos veículos são verificados e certificados para garantir ao cliente uma compra completamente segura.</p>

                            <p className="text-[1] text-justify m-5 font-semibold">Oferecemos exemplares especiais e exclusivos, além de um amplo estoque renovado diariamente para oferecer a melhor experiência e um alto padrão de qualidade.</p>

                            <p className="text-[1] text-justify m-5 font-semibold">Contamos com Detail Center, frota própria para entrega em todo o Brasil, além de um show room premium dedicado aos carros superesportivos, especiais, personalizados e exclusivos.</p>


                            <p className="text-[1] text-justify m-5 font-semibold">A Touring Cars se orgulha de firmar parcerias com os melhores fornecedores, lojas e centros técnicos do mundo, para juntos desenhar uma das melhores estruturas de comércio de carros de luxo no país.</p>
                        </div>

                    </div>
                        <Image src={Car} alt=""/>
            </section>
        </>
    )
}