import React,{useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function BPanel() {
  /* achieve the menu for we use useState*/
  const [inc , setInc]= useState(false) /*  initial state value false */

  /* using arrow function for  */
  const handleToggle = () => setInc(!inc);

  return (
    <div>
      <Navbar bg="light" expand="sm" inc={inc}>
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            className="ms-auto"
          />
          
          {/* collapse on smaller screens  */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center"
              style={{
               display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}
              onClick={() => setExpanded(false)}
              activeKey=""
            >

              {/* from here all link is start */}
              <Nav.Link href="#home">BLOG </Nav.Link> 
              <span className="separator">|</span>
              <Nav.Link href="#home">SIGN IN</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#home">BEST SELLER</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#home" style={{color:'red' }}>CLEARANCE</Nav.Link>
              <span className="separator">|</span>

              <Nav.Link href="#home" style={{color:'red'}}>
                <img src="https://i.imgur.com/bzR6LXq.png" alt="Upload Artwork" />
                UPLOAD ARTWORK
              </Nav.Link>
              <span className="separator">|</span>

              <Nav.Link href="#home">REQ. A QUOTE</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#home">REQ. A CALL</Nav.Link>
              <span className="separator">|</span>
              <Nav.Link href="#home">CREATE AN ACCOUNT</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
}

export default BPanel;
