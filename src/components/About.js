import React from "react"
import img from "./img/about.jpg"
import "./about.css"
import  Back from "./header/Back";
import Heading from "./header/Heading";

function About(){
    return(
        <>
        <section className='about'>
          <Back name='About Us' title='About Us - Who We Are?' cover={img} />
          <div className='container flex mtop'>
            <div className='left row'>
              <Heading title='Our Agency Story' subtitle='Check out our company story ' />
  
              <p>We all know the struggles that we go through during house hunting, particularly on the off chance that we really can't get a home inside our set models as far as location, budget, and features are concerned.</p>
              <p>Rental_Homez is a site that is very much intended to furnish clients with a more straightforward house hunting experience. The client will be in a position to get sufficient details of different houses available to be purchased or leased in view of their requirements and models.
  
  </p>
              <button className='btn2'>More About Us</button>
            </div>
            <div className='right row'>
              <img src='./img/immio.jpg' alt='' />
            </div>
          </div>
        </section>
      </>
    )
}
export default About;