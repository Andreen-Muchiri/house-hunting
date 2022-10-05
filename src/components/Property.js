import React from "react"
import Heading from "./header/Heading"
import "./property.css"
import PropertyCard from "./PropertyCard"

function Property()  {
  return (
    <>
      <section className='property background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find Any kind of property your looking for.' />
    
       <PropertyCard />
        </div>
      </section>
    </>
  )
}

export default Property;

