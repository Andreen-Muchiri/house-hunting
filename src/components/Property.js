import React from "react"
import Heading from "./header/Heading"
import "./property.css"
import PropertyCard from "./PropertyCard"

function Property()  {
  return (
    <>
        <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Currently available and listed for viewing and renting.' />
          <PropertyCard />
        </div>
      </section>
    </>
  )
}

export default Property;

