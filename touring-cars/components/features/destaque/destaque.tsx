import Title from "@/components/common/title/Title";
import { Cards } from "./Cards/cards";

export function Destaque(){
    return(
        <>
            <section className="py-[160px]">
                <Title text="Destaque Semanal"/>
                <Cards/>
            </section>
        </>
    )
}