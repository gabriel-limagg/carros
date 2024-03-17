import iconSedan from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxosos from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6" >
      <section>
      <div className="bg-orange">
        <img src={iconSedan} alt="" />
            <h2 className="font-shouIders">Sedans</h2>
            <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
              <a className="font-lexend" href="https://www.webmotors.com.br/sedans/carros/estoque?tipoveiculo=carros&necessidade=Sedans" target="_blank">ver mais</a>
      </div>
       
      <div className="bg-green">
            <img src={iconSuvs} alt="" />
            <h2 className="font-shouIders">SUVs</h2>
            <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a className="font-lexend" href="https://www.webmotors.com.br/suvs" target="_blank" >ver mais</a>
      </div>
      <div className="bg-dark-green">
          <img src={iconLuxosos} alt="" />
          <h2 className="font-shouIders">Luxosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend"  href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank">ver mais</a>
      </div>
      </section>
    </main>
  )
}
