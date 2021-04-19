import React from 'react';
import HamburgerBtn from './components/header/HamburgerBtn/HamburgerBtn';
import Navbar from './components/header/Navbar/Navbar';

import './app.module.css';

function App(){
  return (
    <React.Fragment>
      <header>
        <HamburgerBtn/>
        <Navbar/>
      </header>
    </React.Fragment>
  )

}

export default App;