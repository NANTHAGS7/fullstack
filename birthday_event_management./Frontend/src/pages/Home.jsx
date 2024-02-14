import React from 'react';
import { Carousel } from 'rsuite';
import Cust_navbar from "../components/Navbar";
import { FaTwitter, FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import imageone from "../assets/images/imageone.jpg";
import imagetwo from "../assets/images/imagetwo.jpg";
import imagethree from "../assets/images/imagethree.jpg";
import imagefour from "../assets/images/imagefour.jpg";
import imagefive from "../assets/images/imagefive.jpg";
import { Panel } from 'rsuite';
import Comp from "./temp";
import cake from "../assets/images/cake.jpg";
import dj from "../assets/images/dj.jpg";
import popcorn from "../assets/images/popcorn.jpg";
import guestlist from "../assets/images/guestlist.jpg";
import photography from "../assets/images/photography.jpg";
import foodrinks from "../assets/images/foodrinks.jpg";
import decorone from "../assets/images/decorone.jpg";
import seatingone from "../assets/images/seatingone.jpg";
import partyfavors from "../assets/images/partyfavors.jpg";

const Home = () => {
  return (
    <>
      <Cust_navbar />
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "80%", height: "80%" }}>
          <Carousel style={{ height: "600px", borderRadius: "25px" }} autoplay className="custom-slider">
            <img src={imageone} alt="Image One" />
            <img src={imagefour} alt="Image Four" />
            <img src={imagefive} alt="Image Five" />
            <img src={imagethree} alt="Image Three" />
            <img src={imagetwo} alt="Image Two" />
          </Carousel><br /><br /><br /><br />
          <h1 style={{ textAlign: "center" }}>Birthday Party Essentials</h1><br /><br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Comp Image={cake} name="CAKE" content="" />
            <Comp Image={dj} name="DJ NIGHT" />
            <Comp Image={foodrinks} name="FOOD & DRINKS" />
          </div><br /><br /><br /><br /><br /><br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Comp Image={guestlist} name="GUEST LIST" />
            <Comp Image={photography} name="PHOTOGRAPHY" />
            <Comp Image={popcorn} name="POPCORN MACHINE" />
          </div><br /><br /><br /><br /><br /><br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Comp Image={decorone} name="DECORATIONS" />
            <Comp Image={seatingone} name="SEATING" />
            <Comp Image={partyfavors} name="PARTY FAVORS" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <footer>
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
            <li><a href="/about">About</a></li>
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
    </>
  );
}

export default Home;
