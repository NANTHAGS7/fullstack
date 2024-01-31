import React from "react";
import videoBG from "../assets/videos/dashvid.mp4";
import { Navbar, Nav } from 'rsuite';
import {Link} from 'react-router-dom';
import { FaCashRegister } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import '../assets/css/index.css'
const Dashboards = () => {
  return (<>
    <div className="">
    <div className="navbarr">
    {/* <Navbar.Brand >Time2Vibe.ly</Navbar.Brand> */}
    <Link to={'/Login'} style={{paddingRight:"10%",fontSize:"40px",color:"white"}}><RiLoginCircleFill /></Link>
      <Link to={'/signup'} style={{fontSize:"40px",color:"white"}}><FaCashRegister /></Link>
  </div>
      <video src={videoBG} autoPlay loop muted />
      <div className="titles">
        <div className="heading" >Time2Vibe.com</div>
        <br></br>
        <div class="delay" style={{color:"white"}}>
          Turning dreams into unforgettable celebrations...
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboards;
