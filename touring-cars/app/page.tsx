import { Destaque } from "@/components/features/destaque/destaque";
import {Hero} from "@/components/features/hero/hero"
import { Models } from "@/components/features/models/models";
import { Vendas } from "@/components/features/vendas";
export default function Home() {
  return (
   <>
    <Hero/>
    <Models/>
    <Destaque/>
    <Vendas/>
   </>
  );
}
