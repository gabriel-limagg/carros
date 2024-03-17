import iconLuxosos from "../assets/icon-luxury.svg"

export default function Luxosos() {
  return (
    <div className="bg-dark-green p-12 max-lg:rounded-b-lg
    lg:rounded-r-lg ">
       <img src={iconLuxosos} alt=""  className="mb-7"/>
       <h2 className="font-shouIders  mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxosos</h2>
       <p className="font-lexend  mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
       <a className="font-lexend mb-7 bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-black-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg"  href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank">ver mais</a>
   </div>
  )
}
