import React from "react";
import Cust_navbar from "../components/Navbar";
import twod from "../assets/images/twod.jpg";
import imageservice from "../assets/images/imageservice.jpg"
import '../assets/css/service.css';
import Comp from './temp'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import batman from "../assets/images/batman.jpg";
import carnival from "../assets/images/carnival.jpg";
import sea from "../assets/images/sea.jpg";
import movienight from "../assets/images/movienight.jpg";
import videogame from "../assets/images/videogame.jpg";
import retro from "../assets/images/retro.jpg";
import musicfest from "../assets/images/musicfest.jpg";
import sports from "../assets/images/sports.jpg";
import Card3 from "./Card3";
const Services = ()=>{
    return(
        <>
        <Cust_navbar />
        <br></br>
        <div className="imc">
        <img className="iim" src={imageservice}/>
        </div>
        <br></br>
        <br></br>
        <h1 style={{textAlign:"center"}}>BIRTHDAY THEMES</h1><br/><br/>
        <br></br>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Link to="/payment" style={{color:"black"}}><Comp Image={twod} name="2D & 3D THEME" content="
    Embark on a visual journey with our captivating 2D and 3D Birthday Theme. Experience the whimsy of a Cartoon Wonderland
     in 2D or immerse yourself in the enchanting depth of an otherworldly 3D celebration.
     Get ready for a multi-dimensional experience filled with creativity and joy!"/></Link>
    <Link to="/payment"  style={{color:"black"}}><Comp Image={batman} name="SUPERHERO" content="
    Unleash the extraordinary with our Superhero Birthday Theme! Transform your celebration into an action-packed adventure where
     little heroes can don capes, masks, and immerse themselves in a world of superpowers. With vibrant decorations, heroic games, and a power-packed 
     atmosphere."/></Link>
    <Link to="/payment"  style={{color:"black"}}><Comp Image={carnival} name="CARNIVAL & CIRCUS" content="
    Step right up to the greatest show on earth with our Carnival and Circus Birthday Theme! Immerse your
     celebration in the magical world of dazzling lights, vibrant colors, and thrilling performances. From 
     whimsical decorations to classic carnival games, this theme brings the joy and excitement of the circus to your 
     party. "/></Link>
   
  </div><br/><br/><br/><br/><br/><br/>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Link to="/payment"  style={{color:"black"}}><Comp Image={sea} name="UNDER THE SEA" content="
  Dive into an enchanting under the sea adventure! Our theme immerses your celebration in oceanic wonders, 
  with vibrant marine decor and aquatic delights for a memorable, magical experience."/></Link>
   <Link to="/payment"  style={{color:"black"}}> <Comp Image={movienight} name="MOVIE NIGHT" content="
    Experience the magic of the silver screen with our Movie Night Birthday Theme! Create cinematic memories with popcorn, 
    film reels, and Hollywood-inspired decor for a blockbuster celebration under the stars."/></Link>
    <Link to="/payment"  style={{color:"black"}}><Comp Image={videogame} name="VIDEO GAME" content="
    Level up your celebration with our Video Game Birthday Theme! Immerse your party in pixelated fun, featuring game-inspired decor, 
    thrilling challenges, and a high-score atmosphere for an epic gaming experience."/></Link>
  </div><br/><br/><br/><br/><br/><br/>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Link to="/payment"  style={{color:"black"}}><Comp Image={retro} name="VINTAGE OR RETRO" content="
  Travel back in time with our Vintage or Retro Birthday Theme! Immerse your celebration in nostalgic charm, 
  featuring classic décor and timeless details for a retro-inspired party full of memories"/></Link>
  <Link to="/payment"  style={{color:"black"}}><Comp Image={musicfest} name="MUSIC FESTIVAL" content="
    Rock your celebration with our Music Festival Birthday Theme! Immerse the party in the rhythm of live music, 
    vibrant decor, and festival vibes for an unforgettable experience under the stars."/></Link>
    <Link to="/payment"  style={{color:"black"}}><Comp Image={sports} name="SPORTS THEME" content="Dive into the excitement of our Sports Birthday Theme! Celebrate the thrill of the game with sporty decorations, team spirit, and activities that score big on fun and camaraderie."
/></Link>
  </div>
  <br></br>
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

export default Services;