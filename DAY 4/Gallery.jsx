import React from "react";
import galleryone from "../assets/images/galleryone.jpg"
import g1 from "../assets/images/g1.jpg"

// import '../assets/css/footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Cust_navbar from "../components/Navbar";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g6 from "../assets/images/g6.jpg";
import g7 from "../assets/images/g7.jpg";
import g8 from "../assets/images/g8.jpg";
import g9 from "../assets/images/g9.jpg";
import Card3 from "./Card3";
const Gallerys = ()=>{
    return(
        <>
        <Cust_navbar/>
        {/* <h1>Step into a world of enchantment and celebration with our mesmerizing Gallery.</h1> */}
        <div>
          <div style={{ paddingTop: 150, paddingBottom: 200 ,position:'relative'}}>
            <h2 style={{ color: "white", marginLeft: "", fontWeight: 800, fontStyle: "italic", textAlign:"center"}}>
              <img src={galleryone}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex:-1}}
              ></img>Step into a world of enchantment and celebration with our mesmerizing Gallery.
              <br></br>
              Explore our exceptional birthday works through the lens of enchanting memories
            </h2>
          </div>
        </div>
    <br></br>
    <br></br>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Card3 Image={g1} name="CAKE" content="" />
            <Card3 Image={g8} name="DJ NIGHT" />
            <Card3 Image={g9} name="FOOD & DRINKS" />
          </div>
          <br></br>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Card3 Image={g4} name="CAKE" content="" />
            <Card3 Image={g5} name="DJ NIGHT" />
            <Card3 Image={g6} name="FOOD & DRINKS" />
          </div>
          <br></br>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Card3 Image={g7} name="CAKE" content="" />
            <Card3 Image={g8} name="DJ NIGHT" />
            <Card3 Image={g9} name="FOOD & DRINKS" />
          </div>
          <br></br>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Card3 Image={g1} name="CAKE" content="" />
            <Card3 Image={g4} name="DJ NIGHT" />
            <Card3 Image={g7} name="FOOD & DRINKS" />
          </div>
       

    {/* <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="/home" class="link-1">Home</a>
					
					<a href="">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="/about">About</a>
					
					<a href="/contacts">Faq</a>
					
					<a href="/Feedback">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Your premier destination for creating unforgettable moments, our company specializes in crafting extraordinary and personalized experiences for all your celebratory needs.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaInstagramSquare /></a>
                    <a href=""><FaFacebook /></a>
                    <a href=""><IoLogoWhatsapp /></a>

				</div>

			</div>

		</footer> */}

<footer>
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
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
    ) 
}

export default Gallerys;