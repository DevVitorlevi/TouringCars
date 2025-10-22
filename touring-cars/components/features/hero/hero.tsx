"use client"
import Image from "next/image"
import Porsche from "@/assets/images/porsche-model5 1.png"
export function Hero(){
    return(
    <div className="w-full h-[95vh] flex items-center justify-between">
        <h1 className="font-bold text-8xl ml-30">
        Qualidade,<br/>
        Segurança,<br/>
        Transparência.
        </h1>

        <Image src={Porsche} alt=""/>
   </div>
    )
}