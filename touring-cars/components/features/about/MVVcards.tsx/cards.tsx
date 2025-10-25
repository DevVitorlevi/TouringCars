export function Cards() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1250px] w-full justify-items-center">
        {/* Card 1 */}
        <div className="bg-black px-6 py-8 rounded-2xl text-white flex flex-col justify-center w-full">
          <h1 className="text-3xl font-bold mb-3">Missão</h1>
          <p className="text-justify">
            Ser a melhor escolha em automóveis premium e fazer parte dos momentos especiais da vida das pessoas.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black px-6 py-8 rounded-2xl text-white flex flex-col justify-center w-full">
          <h1 className="text-3xl font-bold mb-3">Visão</h1>
          <p className="text-justify">
            Ser referência nacional como a empresa mais surpreendente na conexão entre pessoas, veículos, bens e serviços afins.
          </p>
        </div>

        {/* Card 3 — ocupa duas colunas */}
        <div className="bg-black px-6 py-8 rounded-2xl text-white w-full md:col-span-2">
          <h1 className="text-3xl font-bold mb-3">Valores</h1>
          <ul className="space-y-1 list-disc list-inside">
            <li>Inspirar pessoas</li>
            <li>Antecipar demandas</li>
            <li>Excelência em todos os processos</li>
            <li>Clientes plenamente satisfeitos</li>
            <li>Atuação social constante</li>
            <li>Sustentabilidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
