import React from 'react'
import {products} from '../constants' 
import PopularProductCard from '../components/PopluarProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-palanquin font-bold'>Our
            <span className='text-coral-red'> Popular </span>
             Products</h2>
          <p className='max-w-lg mt-2 font-montserrat text-slate-gray'>Expirence top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
          with our best-selling products.
          </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grids-cols-3 sm:grids-cols-2 grid-cols-1 sm:gap-4 gap-14'>
    {products.map((product) => (
      <PopularProductCard key={product.name} {...product} />
    ))}
      </div>
    </section>
  )
}

export default PopularProducts
