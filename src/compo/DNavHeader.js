import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsBag } from 'react-icons/bs';

function MyNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar bg="primary" variant="light" expand="md"  className={`sticky-top ${isTop ? 'at-top' : ''}`}>
 
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mx-auto justify-content-center">
        <NavDropdown
          title="Pop Up Tents"
          id="basic-nav-dropdown"
          show={showDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            <a href="">
              <img src="https://i.imgur.com/koncPwa.png" alt="Example Image" />
              <span className="ml-auto">10x10 Package Deals</span>
            </a>
          </div>
        </NavDropdown>
        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
      </Nav>
    
      </Navbar.Collapse>
      {!isTop &&  <BsBag color='red' size='2.5rem'/>}
    </Navbar>
  );
}

export default MyNavbar;
