import Title from "../common/title/Title";
import { VendasCards } from "./vendas/vendasCards/vendasCards";

export function Vendas(){
    return(

        <>
            <section>
                <Title text="Ultimas Vendas"/>
                <VendasCards/>
            </section>
        </>
    )
}