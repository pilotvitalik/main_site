import React from 'react';
import HamburgerBtn from './components/header/HamburgerBtn/HamburgerBtn';
import Navbar from './components/header/Navbar/Navbar';
import Works from './components/body/Works/Works';
import { Switch, Route } from 'react-router-dom';
import './app.module.css';

function App(){
  return (
    <React.Fragment>
      <header>
        <HamburgerBtn/>
        <Navbar/>
      </header>
      <main>
        <Switch>
            <Route
                path='/'
                exact={true}
            />
            <Route
                path='/works'
                component={Works}
            />
        </Switch>
      </main>
    </React.Fragment>
  )

}

export default App;