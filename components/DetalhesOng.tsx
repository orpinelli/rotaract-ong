'use client'

import { usePathname } from 'next/navigation'
import ongs from '../public/ongs.json';
import Image from 'next/image'


export default function DetalhesOng() {
  const pathname = usePathname()

  const idFromPathname = Number(pathname?.match(/(\d+)$/)?.[0])

  const ONG_SELECIONADA = ongs.find((ongs) => ongs.id === idFromPathname)

  if (!ONG_SELECIONADA) {
    return <div>ong não encontrada</div>
  }

  function renderInfoBoardGame(ONG_SELECIONADA: any) {
    return (
      <div className="w-[550px]">
        <Image
          className="flex justify-center"
          src={'/ong1.jpg'}
          alt="imagem dos board game"
          width={400}
          height={200}
        />
        <div className="md:flex-1 px-4 divide-gray-700 divide-emerald-200">
          <h2 className="mb-2 mt-8 leading-tight tracking-tight font-bold text-black text-2xl md:text-3xl">
            {ONG_SELECIONADA.name}
          </h2>
          <div className="text-gray-800 pt-6 pb-6">
            {ONG_SELECIONADA.description}
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="flex justify-center mt-12 ">
      {renderInfoBoardGame(ONG_SELECIONADA)}

    </div>
  )
}
