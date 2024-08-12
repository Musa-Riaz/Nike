import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-6'>
      {services.map((service) =>(
        <ServiceCard key={service.label} imgURL ={service.imgURL} label={service.label} subtext={service.subtext} />
      ))}
    </section>
  )
}

export default Services
