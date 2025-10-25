import Title from "@/components/common/title/Title";
import { Cards } from "./Cards/cards";

export function Destaque() {
  return (
    <>
      <section className="py-20">
        <Title text="Destaque Semanal"/>
        <Cards/>
      </section>
    </>
  );
}
