import React from 'react';
import { BsBag } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"><img src="https://i.imgur.com/Tf7TRkC.png"  alt="next" class="logo-img"/></div>
        <div className="col-md-5 p-4 ml-5 d-md-block d-none "> {/* show only in desktop */}
  <div className="d-flex align-items-center">
    <Form className="d-flex border rounded">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <NavDropdown title="Type" id="navbarScrollingDropdown border-primary">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5" Something else here></NavDropdown.Item>
      </NavDropdown>
    </Form>
    <div style={{marginLeft:'70px'}}>
      <BsBag color='red' size='2.5rem'/>
    </div>
  </div>
</div>

        <div className="col-3"></div>
      </div>
      <div className="row d-md-none"> {/* show only in mobile */}
        <div className="col-12 p-4 d-flex align-items-center">
          <Form className="d-flex border rounded ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search" />
            <Button variant="outline-success " className="bts"><img src="https://i.imgur.com/mOCHosU.png" alt="_s"/></Button>
          </Form>
          <div style={{ marginLeft: '30px' }}>
    <BsBag color='red' size='2.5rem'/>
  </div>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
