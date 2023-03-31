import React from 'react';
import './style.css';
import Header1 from '../compo/Header1.js';
import Panel from '../compo/Panel.js';

import RealNav from '../compo/RealNav.js';
import AboveFooter from '../compo/AboveFooter.js';
import Front from '../compo/Front.js';

export default function App() {
  return (
    <div>
      <Header1 />
      <Panel />
      <RealNav />
      <Front />
      <AboveFooter />
    </div>
  );
}
