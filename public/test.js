
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://i.imgur.com/Tf7TRkC.png" alt="_logo" width="170"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
                   <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              <Button variant="outline-success">Search</Button>
            </Form>

          </Nav>
<ul>
<li><a href="mailto:sales@customtentwithlogo.com"><i aria-hidden="true" class="fa fa-envelope "></i> sales@customtentwithlogo.com</a></li>
  
  <li><a href="@">Toll Free: 1-866-465-1210</a></li></ul>
          
<NavDropdown title="Link" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">
 Another action
</NavDropdown.Item>
 <NavDropdown.Divider />
 <NavDropdown.Item href="#action5"                Something else here>              </NavDropdown.Item>
</NavDropdown>







        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
