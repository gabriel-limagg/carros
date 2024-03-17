import iconSedan from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxosos from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
      <div>
        <img src={iconSedan} alt="" />
            <h2>Sedans</h2>
            <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
              <a href="https://www.webmotors.com.br/sedans/carros/estoque?tipoveiculo=carros&necessidade=Sedans" target="_blank">ver mais</a>
      </div>
      <div>
            <img src={iconSuvs} alt="" />
            <h2>SUVs</h2>
            <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a href="https://www.webmotors.com.br/suvs" target="_blank" >ver mais</a>
      </div>
      <div>
          <img src={iconLuxosos} alt="" />
          <h2>Luxosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank">ver mais</a>
      </div>
      </section>
    </main>
  )
}
