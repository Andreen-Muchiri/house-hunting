import React from "react"
import { property } from "./data/Data"

function  PropertyCard () {
  return (
    <>
      <div className='content grid5 mtop'>
        {property.map((property, index) => (
          <div className='box' key={index}>
            <img src={property.cover} alt='' />
            <h4>{property.name}</h4>
            <label>{property.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default PropertyCard;