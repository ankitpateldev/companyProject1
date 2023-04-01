import React from 'react';
import './style.css';
import AHeader1 from './compo/AHeader1.js';
import BPanel from './compo/BPanel.js';

import CRealNav from './compo/CRealNav.js';
import XFooter from './compo/XFooter.js';
import EFront from './compo/EFront.js';
import DNavHeader from './compo/DNavHeader.js'
import FSlider123 from './compo/FSlider123.js';
import GContent from './compo/GContent.js'
import HeyChooseUs from './compo/HeyChooseUs.js'

export default function App() {
  return (
    <div>
      <AHeader1 />
      <BPanel />
      <CRealNav />
     <DNavHeader/>
      <EFront />
    <FSlider123/>
    <GContent/>
    <HeyChooseUs/>
      <XFooter />
    </div>
  );
}
