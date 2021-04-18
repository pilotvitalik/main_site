import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.modules.css';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <header>
          <Navbar/>
        </header>
      </React.Fragment>
    )
  }  
}

export default App;