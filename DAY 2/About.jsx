import React from 'react';
import Cust_navbar from "../components/Navbar";
import Card3 from "../pages/Card3";
import { Link } from "react-router-dom";
import image12 from "../assets/images/image12.jpg";
import abouthem from "../assets/images/abouthem.jpg"
import vision from "../assets/images/vision.jpg"
import Comp from './temp';
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const About = () => {
  return (
    <div>
      <header>
        <Cust_navbar />
      </header>
      {/* <main> */}
        <div>
          <div style={{ paddingTop: 150, paddingBottom: 200 ,position:'relative'}}>
            <h2 style={{ color: "white", marginLeft: "2em", fontWeight: 800, fontStyle: "italic" }}>
              <img src={abouthem}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex:-1}}
              ></img>Embark on a Narrative of Distinction:
              <br></br>
              Unveiling the Essence of Our Endeavor
            </h2>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="haku" style={{ flexDirection: 'row', display: 'flex', paddingRight: 100, paddingLeft: 50, flexWrap: 'wrap' }}>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }}>
              <h2 style={{ color: "black" }}>Epoch Elegance: Crafting Timeless Vibes</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>Welcome to .Time2Vibe., where moments become memories and connections flourish. At Harmony Haven, we understand that life is a collection of experiences, and we're here to enhance every moment with our curated selection of products and services. Whether it's through our innovative technology solutions, lifestyle products, or memorable events, we are dedicated to creating an atmosphere where every individual can find their unique rhythm.</p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Pioneering Excellence, Inspiring Change: Crafting Tomorrow's Success Stories Today</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>
              At .T2V. , our mission is to spark joy and create lasting memories by delivering exceptional birthday experiences. We believe in the power of celebration and strive to make each birthday uniquely special. Through creativity, dedication, and a commitment to excellence, we aim to exceed expectations and be the trusted partner in bringing your dream celebration to life. Your joy is our mission, and we take pride in crafting moments that resonate with the spirit of celebration and leave a lasting impact.
              </p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Igniting Celebrations with Heartfelt Passion: Where Every Birthday Becomes an Extraordinary Symphony of Joy.</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>
              At .T2V. , passion isn't just a word; it's the heartbeat that fuels our dedication to crafting unparalleled birthday experiences. Our team is driven by an unwavering commitment to infuse every celebration with creativity, enthusiasm, and a genuine love for making moments extraordinary. From concept to execution, our passion for birthday event management shines through, ensuring that each celebration is not just an event but an immersive journey of joy and surprises. We thrive on transforming your ideas into vibrant realities, making your special day a reflection of the passion we pour into our craft. Your happiness is our passion, and that's what sets us apart in the art of birthday magic.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#f2f2f2' }}>
          <div style={{ justifyContent: 'space-between', width: '50%', height: 500, }}>
            <img
              style={{ width: '90%', height: '100%' }}
              src={vision}
              alt='HAKUNAMA TATA'
            />
          </div>

          <div style={{ justifyContent: 'space-between', width: '50%', height: '100%', textAlign: 'center', marginRight: 20 }}>

            <h1 style={{ color: 'black', fontSize: 30, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bolder' }}>VISION FOR THE FUTURE</h1>
            <br></br>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>At .T2V. , we envision a future where every birthday celebration becomes a timeless masterpiece, a unique reflection of individuality, joy, and unforgettable moments. As pioneers in the realm of birthday event management, our vision extends beyond the ordinary, aiming to redefine the way people experience and celebrate life's milestones.</p>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>As trends evolve and new ideas emerge, our commitment to innovation remains unwavering. We envision staying at the forefront of event design, introducing groundbreaking themes that captivate imaginations and set the stage for unforgettable celebrations. From classic and timeless concepts to cutting-edge and trendy themes, our goal is to create experiences that leave a lasting impression.</p>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>Looking forward, we envision leveraging cutting-edge technology to enhance the overall event experience. From interactive elements and virtual components to streamlined planning processes, our goal is to embrace technology in a way that elevates and modernizes the birthday event management industry.</p>
          </div>
        </div>
      <br>
      </br>
      <br></br>
    
  <h1 style={{textAlign:"center"}}>What people say about us</h1><br/><br/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Comp Image={image12} name="Louis Hamilton" content="From concept to celebration, Time2Vibe exceeded my expectations, creating a personalized and enchanting birthday event."/>
    <Comp Image={image12} name="Thomas Shelby" content="Grateful for Time2Vibe's dedication to making my birthday uniquely special – they truly know how to create joyful moments."/>
    <Comp Image={image12} name="Peter De Paul" content="Professionalism, creativity, and a genuine love for what they do – Time2Vibe made my birthday a day to remember."/>
  </div>
<br></br>
<br></br>
<br></br>
        
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
      {/* </main> */}
    </div>
  );
};

export default About;
