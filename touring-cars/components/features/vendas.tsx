import Title from "../common/title/Title";
import { VendasCards } from "./vendas/vendasCards/vendasCards";

export function Vendas() {
  return (

    <>
      <section className="pb-20">
        <Title text="Ultimas Vendas"/>
        <VendasCards/>
      </section>
    </>
  );
}
