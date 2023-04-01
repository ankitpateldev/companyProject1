import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Crosswordfooter() {
  return (
    <footer>
      <Container fluid>
        <Row className='bg-dark text-light py-3'>
          <Col xs={12} md={6} lg={4}>
            <h2>My Account</h2>
            <ul className='list-unstyled'>
              <li>
                <a href='#'>Tenders &amp; Quotations</a>
              </li>
              <li>
                <a href='#'>Announcements</a>
              </li>
              <li>
                <a href='#'>Notifications</a>
              </li>
              <li>
                <a href='#'>Circulars</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className='block'>
              <div className='block-title'>
                <h2>Contact Information</h2>
              </div>
              <div className='block-content'>
                <ul className='contact-info list-unstyled'>
                  <li>
                    <b>CustomTentwithLogo.com</b>
                    <br />
                    By Starline Exhibits International
                  </li>
                  <li>
                    <p>
                      <b>Georgia Address:</b>
                      <br />
                      125 Townpark Dr, #300 Kennesaw, GA 30144, USA
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>San Francisco Address:</b>
                      <br />
                      1390 Market Street, Suite 200, San Francisco 94102, USA
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Phone:</b>{' '}
                      <a href='tel:1-866-465-1210'>1-866-465-1210</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Email:</b>{' '}
                      <a href='mailto:sales@customtentwithlogo.com'>
                        sales@customtentwithlogo.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Working Days/Hours:</b>
                      <br />
                      Mon - Friday / 9:30AM - 6.30PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Crosswordfooter;
