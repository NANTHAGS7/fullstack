import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import {Link} from 'react-router-dom';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { FaHandsHelping } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { RiGalleryFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { GiPartyPopper } from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import { MdFeedback } from "react-icons/md";


const Cust_navbar = () => {
  const Navigate = new useNavigate();
  const handleChange=()=>{
    Navigate('/home');
  }
  const handleChange1=()=>{
    Navigate('/services')
  }
  const handleChange2=()=>{
    Navigate('/about')
  }
  const handleChange3=()=>{
    Navigate('/contacts')
  }
  const handleChange4=()=>{
    Navigate('/gallery')
  }
  const handleChange5=()=>{
    Navigate('/feedback')
  }
  const handleChange6=()=>{
    Navigate('/Login')
  }

  return (
    <Navbar>
    <Navbar.Brand style={{color:'black',fontWeight:'',fontSize:"20px",fontFamily:"fantasy",display:"flex"}} >
    {/* <GiPartyPopper style={{width:"50%"}} /> */}
    {/* <br></br> */}
    .Time2Vibe. 
    {/* <InputGroup style={{width:"100%",height:"100%",marginLeft:"20px"}}>
      <Input placeholder="Search Services..."/>
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup> */}
    </Navbar.Brand>
    
    <Nav pullRight>
    <Nav>
      
      <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"20px",fontFamily:"initial"}} icon={<HomeIcon/>} onClick={handleChange}>Home</Nav.Item>
      <Nav.Item  style={{color:'black',fontWeight:'bolder',fontSize:"20px",fontFamily:"initial"}} icon={<FaHandsHelping />} onClick={handleChange1}> Our Services</Nav.Item>
        <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"20px",fontFamily:"initial"}} icon={<VscReferences />} onClick={handleChange2}>  About</Nav.Item>
        <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"20px",fontFamily:"initial"}} icon={<MdPermContactCalendar />} onClick={handleChange3}>  Contact</Nav.Item>
      </Nav>
      <Nav.Menu eventKey="4" title="Settings" style={{color:'red',fontFamily:'initial',fontWeight:'bolder',fontSize:'20px'}} icon={<GearCircleIcon />}>
            <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"16px",fontFamily:"cursive"}} eventKey="4-1" icon={<RiGalleryFill />} onClick={handleChange4}>Gallery</Nav.Item>
            <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"16px",fontFamily:"cursive"}} eventKey="4-2" icon={<MdFeedback />} onClick={handleChange5}>Feedback</Nav.Item>
            <Nav.Item style={{color:'black',fontWeight:'bolder',fontSize:"16px",fontFamily:"cursive"}} eventKey="4-3" icon={<CiLogout />} onClick={handleChange6}>Logout</Nav.Item>
            </Nav.Menu>
    </Nav>
  </Navbar>
  );
}

export default Cust_navbar;

