
import React from 'react'
import { Dropdown } from 'react-bootstrap';


function Crosswordfooter () {
  return (
    <footer>
    <div>
      
    <div className = 'd-flex flex-row justify-content-evenly align bg-dark w-100% text-light'>

    <div className= "p-2  "> 

<h5> My Account  </h5>
<Dropdown.Item eventKey="1">Secure Shopping </Dropdown.Item>
<Dropdown.Item eventKey="2">Privacy Policy </Dropdown.Item>
<Dropdown.Item eventKey="3"> Shipping Policy </Dropdown.Item>
<Dropdown.Item eventKey="4">Secure Shopping </Dropdown.Item>
<Dropdown.Item eventKey="5">Secure Shopping </Dropdown.Item>
      </div>
      <div className="p-2">
<h5> Contact Information  </h5>
<Dropdown.Item eventKey="5">My Account  </Dropdown.Item>
<Dropdown.Item eventKey="5">My order </Dropdown.Item>
<Dropdown.Item eventKey="5">My Shopping cart </Dropdown.Item>
<Dropdown.Item eventKey="5">My Wishing list </Dropdown.Item>



        </div>
        <div className="p-2">
<h5> Quick Links </h5>
<Dropdown.Item eventKey="5">My Account  </Dropdown.Item>
<Dropdown.Item eventKey="5">My order </Dropdown.Item>
<Dropdown.Item eventKey="5">My Shopping cart </Dropdown.Item>
</div>
      

      </div>
     </div> </footer>
  )
}
export default Crosswordfooter;