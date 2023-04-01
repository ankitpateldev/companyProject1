import React from 'react';

function GContent() {
  const bannerStyle = {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };
  return (
    <>
    <div className="pt-5 pb-5">
      <div className="row align-items-center">
        <div className="col-md-7 col-sm-7">
          <h3 className="text-primary">Options for Personalized Pop Up Tents</h3>
          <p className="border-bottom border-primary pb-3">
            Determining what pop up canopy suits your business best is a time-consuming consideration. We hope to simplify this process for you and give you an idea of what we can offer you. As an industry leader in creating pop up tents and canopies, we're best suited to inform you of your options for this type of marketing tool. Accessories are also something to consider, like a carry-bag or a printed tent wall to finish the look of your canopy. Even if we don't have what you want, we'll be able to point you in the right direction to someone who can meet your needs.
          </p>
        </div>
        <div className="col-md-5 col-sm-5">
          <picture className="d-block mx-auto">
            <img
              src="https://customtentwithlogo.com/media/wysiwyg/ctwl-img-1.jpg"
              alt=""
              className="img-fluid rounded"
            />
          </picture>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-md-5 col-sm-5">
          <picture className="d-block mx-auto">
            <img
              src="https://customtentwithlogo.com/media/wysiwyg/ctwl-img-2.jpg"
              alt=""
              className="img-fluid rounded"
            />
          </picture>
        </div>
        <div className="col-md-7 col-sm-7">
          <h3 className="text-primary">Custom Dye Sublimation Printing</h3>
          <p className="border-bottom border-primary pb-3">
            Adding custom graphics to a canopy tent or wall requires an expert printing process. Our dye sublimation technique is the best available since the prints can stand up to constant use. Typically, folding and unfolding along with exposure to the elements can lead to wear and tear on graphic images. Dye-sublimation printing removes these issues and gives you a vibrant, colorful appearance that will remain stunning no matter where or how many times you use it. If you take your investment in marketing materials seriously, this is the best option for your business over the long term.
          </p>
        </div>
      </div>
    </div>

<div className="hm-save-banner" style={bannerStyle}>
<div className="container">
  <a href="https://customtentwithlogo.com/collections/canopy-10c">
    <picture className="mfwebp">
      <img
        src="https://customtentwithlogo.com/media/wysiwyg/ctl-hm-img-7.png"
        alt="" style={imgStyle}
      />
    </picture>
  </a>
</div>
</div>
</>
  );
}

export default GContent;
