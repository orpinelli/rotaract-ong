'use client'

import Image from 'next/image'
import Link from 'next/link'

function IndexPage() {

  return (
    <>
    <div className="bg-stone-200 h-[100vh] ">
      <div className="inset-0 flex flex-col justify-center items-center  max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <h1 className="m-4 font-primary font-extrabold text-black text-3xl sm:text-4xl md:text-5xl md:leading-tight mt-12">
            faça a diferença ajudando uma{` `}
              <span className="text-[#d41367]">
               ONG,
              </span>
              <span className="text-black">
              {` `} Seja esperança
              </span>
            </h1>
            <p className="font-secondary text-black text-base md:text-lg lg:text-xl mb-14 m-4">
            A criação deste espaço online  dedicado às organizações da cidade de Araras foi motivada pelo anseio de unir esforços, inspirar colaborações e dar visibilidade às organizações locais que, muitas vezes, operam nos bastidores, longe dos holofotes. Sendo um elo entre aqueles que buscam fazer a diferença e as organizações que moldam o presente e o futuro de cada pessoa que passam por ela. 
            Que este espaço não seja somente uma lista de orgs e sim um convite caloroso para que residentes, visitantes e simpatizantes se envolvam, apoiem e celebrem o notável trabalho que acontece em cada canto da cidade, construindo assim laços mais fortes, cultivando empatia e inspirando ações. 
            Juntos somos parte de algo extraordinário
            </p>
            <div className='flex mt-2 justify-center m-4'>
               <Link className="font-semibold border-solid border-2 border-600 rounded-md px-8 py-4 bg-[#d41367] text-white" href={'/ong'}>VEJA AS ONG</Link >
            </div>
          <div className=" bg-gray-900">
          </div>
          </div>
      </div>
    </div>
    <div className="bg-[#000] flex flex-col lg:flex-row items-center inset-x-0 bottom-0 h-180 justify-center">
      <Image
        src="/Rotaract.png"
        width={300}
        height={600}
        alt="Picture of the author"
        className='mx-6 my-6'
      />
      <Image
        src={"https://araras.sp.gov.br/assets/img/content/logo-branco.png"} 
        width={300}
        height={600}
        alt="Picture of the author"
        className='mx-6 my-6'
      />
    </div>
     </>
  )
}

export default IndexPage