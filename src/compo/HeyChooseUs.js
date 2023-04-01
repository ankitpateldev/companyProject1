import React from "react";
import { FaCheckCircle, FaThumbsUp, FaTruck, FaPaintBrush } from "react-icons/fa";

const WhyChooseUs = () => {
  
  const iconStyle = {
    fontSize: '120px',
    color: '#fff',
    marginBottom: '20px',
    border: '2px solid blue',
    borderRadius: '30%',
    padding: '25px',
    backgroundColor: 'blue',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    
  };
  
  
  
  
  return (
    <div className="why-choose-us">
      <div className="container">
        <h2 className="text-center"><span>Why Choose Us</span></h2>
        <p className="">To offer our customers the best custom pop up tents on the market, we follow a few key tenets in our manufacturing, distribution and customer service process.</p>
        <div className="row text-center">
          <div className="col-md-3 col-sm-6">
            <div className="icon-container" >
             
            <FaCheckCircle style={iconStyle}/>

              <p>Guaranteed High Quality</p>
              <p>We believe that our clients deserve the best, so we give them the highest quality products every time. If you're not satisfied, neither are we.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-container">
              <FaThumbsUp  style={iconStyle} />
              <p className="hmft-h">Affordability</p>
              <p>We provide the best prices in the industry while remaining true to our production standards, offering only high-quality materials.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="">
              <FaTruck  style={iconStyle}/>
              <p className="hmft-h">Free Shipping</p>
              <p>If you order more than $99.00 worth of goods with us, we provide Free Super Saver shipping to your door!</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="">
              <FaPaintBrush  style={iconStyle}/>
              <p className="hmft-h">Free Design Proofs</p>
              <p>There is no need to wait until you get a test print to see how your design looks. We'll give you a free design proof, so your design comes out looking great the first time around.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
