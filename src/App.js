import React from 'react';
import './style.css';
import Header1 from './compo/Header1.js';
import Panel from './compo/Panel.js';

import RealNav from './compo/RealNav.js';
import AboveFooter from './compo/AboveFooter.js';
import Front from './compo/Front.js';
import NavHeaderD from './compo/NavHeaderD.js'
import Slider123 from './compo/Slider123.js';
export default function App() {
  return (
    <div>
      <Header1 />
      <Panel />
      <RealNav />
     <NavHeaderD/>

      <Front />
    <Slider123/>
      <AboveFooter />
    </div>
  );
}
