import iconSedan from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxosos from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center " >
      <section className="lg:flex">
      <div className="bg-orange p-12 rounded-t-lg">
        <img src={iconSedan} alt="" className="mb-7"/>
            <h2 className="font-shouIders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
            <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
              <a className="font-lexend mb-7 bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans/carros/estoque?tipoveiculo=carros&necessidade=Sedans" target="_blank">ver mais</a>
      </div>
       
      <div className="bg-green p-12 ">
            <img src={iconSuvs} alt=""  className="mb-7" />
            <h2 className="font-shouIders  mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
            <p className="font-lexend  mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a className="font-lexend mb-7 bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs" target="_blank" >ver mais</a>
      </div>
      <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxosos} alt=""  className="mb-7"/>
          <h2 className="font-shouIders  mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxosos</h2>
          <p className="font-lexend  mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend mb-7 bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-black-green"  href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank">ver mais</a>
      </div>
      </section>
    </main>
  )
}
