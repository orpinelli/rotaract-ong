'use client'

import Image from 'next/image';
import ongs from '../public/ongs.json';
import React from 'react';


export default function Card() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div  className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {ongs.map((ong, index) => (
        <a key={index} href={`/ong/${ong.id}`} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
             src="/ong1.jpg"
             width={500}
             height={500}
             alt="Picture of the author"
             />
          </div>
          <p className="mt-1 text-lg font-medium text-gray-900">{ong.name}</p>
        </a>
       ))}
      </div>
    </div>
  </div>
  )
}
