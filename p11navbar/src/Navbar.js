import { findAllByDisplayValue } from "@testing-library/dom";
import React, { useState } from "react";
import { links, social } from "./Data";
// import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbar1= () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    // <div className="navbar">
    //   <div className="left_side">
    //     <div className="links" id={showLinks ? "hidden" : ""}>
    //       <a>Dashboard</a>
    //       <a>Profile</a>
    //       <a>Logout</a>
          
    //     </div>
    //     <button onClick={()=>{setShowLinks(!showLinks)}}>Open</button>
    //   </div>
    //   <div className="left_side">
    //   <button onClick={()=>{setShowLinks(!showLinks)}}>Open</button>
    //   </div>
    // </div>
  );
};

export default Navbar1;

// <div>
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">Coding Addict</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             {toogle && (
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav">
//                         {links.map((item) => {
//                             const { id, url, text } = item
//                             return (
//                                 <>
//                                     <li key={id} class="nav-item">
//                                         <a class="nav-link active" aria-current="page" href={url}>{text}</a>
//                                     </li>
//                                 </>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             )}

//             <button onClick={() => { setToogle(!toogle) }}>{toogle?"HideNavbar":"ShowNavbar"}</button>
//         </div>
//     </nav>
// </div>
