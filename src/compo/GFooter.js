import React from 'react'
import { Dropdown } from 'react-bootstrap';


function Crosswordfooter() {
  return (
    <footer>
      <div>

        <div className='d-flex flex-row justify-content-evenly align bg-dark w-100% text-light' style={{ paddingTop: '30px', paddingBottom: '30px', fontSize: '14px' }}>

          <div className="p-2" >
            <h2>My Account</h2>
            <ul className="specials" style={{ marginTop: 5 }}>
              <li className="bodytext">
                <a href="#" className="bodytext">
                  Tenders &amp; Quotations
                </a>
                <hr className="menu-hr" />
              </li>
              <li className="bodytext">
                <a href="#" className="bodytext">
                  Announcements
                </a>
                <hr className="menu-hr" />
              </li>
              <li className="bodytext">
                <a href="#" className="bodytext">
                  Notifications
                </a>
                <hr className="menu-hr" />
              </li>
              <li className="bodytext">
                <a href="#" className="bodytext">
                  Circulars
                </a>
                <hr className="menu-hr" />
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
<div className="block">
<div className="block-title"><strong><h2>Contact Information</h2></strong></div>
<div className="block-content">
<ul className="contact-info">
<li><b>CustomTentwithLogo.com</b><br/>By Starline Exhibits International</li>
<li>
<p><b>Georgia Address:</b><br/>125 Townpark Dr, #300 Kennesaw, GA 30144, USA</p>
</li>
<li>
<p><b>San Francisco Address:</b><br/>1390 Market Street, Suite 200, San Francisco 94102, USA</p>
</li>
<li><p><b>Phone:</b> <a href="tel:1-866-465-1210">1-866-465-1210</a></p></li>
<li><p><b>Email:</b> <a href="mailto:sales@customtentwithlogo.com">sales@customtentwithlogo.com</a></p></li>
<li>
<p><b>Working Days/Hours:</b><br/>Mon - Friday / 9:30AM - 6.30PM</p>
</li>
</ul>
</div>
</div>
</div>

        </div>
      </div>
    </footer>
  )
}

export default Crosswordfooter;
