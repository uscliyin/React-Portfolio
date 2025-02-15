import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validate required fields
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name) {
      alert("Please enter your name");
      return;
    }
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!message) {
      alert("Please enter your message");
      return;
    }

    // Append the access key needed for submission
    formData.append("access_key", "a7494785-63bb-4a48-b23f-b730be73ac1b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();
      if (result.success) {
        alert(result.message);
        // Reset the form fields after a successful submission
        event.target.reset();
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <a href="mailto:uscliyin@gmail.com">uscliyin@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <a href="tel:+12134223562">+1 213-422-3562</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>MI, United States</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;