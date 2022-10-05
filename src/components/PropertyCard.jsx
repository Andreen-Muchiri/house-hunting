import React from "react"
import { property } from "./data/Data"

function  PropertyCard () {
  return (
    <>
      <div className='content grid5 mtop'>
        {property.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default PropertyCard;