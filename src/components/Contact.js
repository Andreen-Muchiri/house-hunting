import React, { useState } from "react"
import img from "./img/pricing.jpg"
import Back from "./header/Back"
import "./contact.css"

function Contact() {
  const[formData , setFormData] = useState({
            name: "",
            email: "",
            subject: "",
            
        });
        function handleChange(e) {
            setFormData({...formData, [e.target.id]: e.target.value });
      
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("the server URL", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    }
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Reach Us To Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input onChange={handleChange} value={formData.name}type='text' placeholder='Name' />
              <input onChange={handleChange} value={formData.email}type='text' placeholder='Email' />
             <input onChange={handleChange} value={formData.subject}type='text' placeholder='Subject' />
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


