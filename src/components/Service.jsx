import React from 'react'
import ServiceCard from './card/ServiceCard'
import { services } from './data/services'

const Service = () => {
  return (
    <>
        <h2 className="text-heading text-center font-semibold">
            Services
        </h2>
        <h1 className="mt-4 text-heading text-4xl text-center font-bold">
            Our Services
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
                <ServiceCard 
                    key={i}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    </>
  )
}

export default Service
