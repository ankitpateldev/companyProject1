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
        
        <div className="row text-center">
          <div className="col-md-3 col-sm-6">
            <div className="icon-container" >
              <FaCheckCircle  style={iconStyle}/>
                          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
