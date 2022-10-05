import React from "react"
import img from "./img/pricing.jpg"
import Back from "./header/Back"
import "./contact.css"

function Contact() {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Reach Us To Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
             <input type='text' placeholder='Subject' />
            </div>
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact


