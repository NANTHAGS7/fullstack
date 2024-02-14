import React from 'react';
import '../assets/css/contact.css'
import Cust_navbar from "../components/Navbar";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Form, Input, ButtonToolbar, Button } from 'rsuite';
import phone from "../assets/images/phone.jpg"
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
const Contacts = () => {
  return (
    <>
    <Cust_navbar/>
    <div className="c1">
      {/* <header>
        <h1>Welcome to Time2Vibe</h1>
        <p>Your go-to solution for memorable birthday celebrations!</p>
      </header> */}
      <div>
          <div style={{ paddingTop: 150, paddingBottom: 200 ,position:'relative'}}>
            <h2 style={{ color: "white", marginLeft: "", fontWeight: 800, fontStyle: "italic", textAlign:"center"}}>
              <img src={phone}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex:-1}}
              ></img>Connect with us using the form below, and we'll respond promptly.............................................................
            </h2>
          </div>
        </div>

      <section className="c2">
        <h2>Contact Us</h2>
        <p>
          For inquiries, bookings, or any assistance, feel free to reach out to us.
        </p>

        <div className="c3">
          <p>Phone: +91 93447 35276</p>
          <p>Email: timetwovibe@gmail.com</p>
          <p>Address: 69/F2 Nehru Nagar, Coimbatore</p>
        </div>
        <br></br>
<div>
  <div style={{backgroundColor:"lightgrey",padding:"5%"}}>
        <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }}>
    <div style={{width:"40%",justifyContent:"center",textAlign:"center",display:"fles",paddingTop:"%"}}>
      <h3>You would rather send us a message, please do so using the form below. We will respond to your request within a business day.</h3>
      </div>
      <div style={{width:"60%",display:"flex"}}>
      
        <Form layout="horizontal">
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      {/* <Form.HelpText>Required</Form.HelpText> */}
    </Form.Group>
    <Form.Group controlId="email-6">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
    </Form.Group>
    <Form.Group controlId="password-6">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="textarea-6">
      <Form.ControlLabel>Textarea</Form.ControlLabel>
      <Form.Control name="textarea" rows={5} accepter={Textarea} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </div>
  </div>
  </div>

        {/* <form className="c4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>                               
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form> */}
      </section>
<div>
      {/* Footer Section */}
      <footer>
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
            <li><a href="/about">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3>Get in Touch</h3>
          <p>Follow us on social media for updates and more!</p>
          <div style={{display:'flex'}}>
          <a href="" style={{marginLeft:"5%"}}>< FaTwitter style={{fontSize:'30px'}}/></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaInstagramSquare style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaFacebook style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><IoLogoWhatsapp style={{fontSize:'30px'}}/></a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div>
          <p>&copy; 2024 Time2Vibe. All rights reserved.</p>
        </div>
      </footer>

    </div>
    </div>
    </>
  );
};

export default Contacts;
