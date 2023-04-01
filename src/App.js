import React from 'react';
import './style.css';
import AHeader1 from './compo/AHeader1.js';
import BPanel from './compo/BPanel.js';

import CRealNav from './compo/CRealNav.js';
import GFooter from './compo/GFooter.js';
import EFront from './compo/EFront.js';
import DNavHeader from './compo/DNavHeader.js'
import FSlider123 from './compo/FSlider123.js';
export default function App() {
  return (
    <div>
      <AHeader1 />
      <BPanel />
      <CRealNav />
     <DNavHeader/>
      <EFront />
    <FSlider123/>
      <GFooter />
    </div>
  );
}
