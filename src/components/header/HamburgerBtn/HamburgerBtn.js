import React, {useState} from 'react';

import style from './hamburgerBtn.module.css';

import { useDispatch } from 'react-redux';

function HamburgerBtn(props){
  const dispatch = useDispatch();
  const [isOpen, changeType] = useState(false);

  function showHideNavbar(e){
    dispatch({type: 'header/visibleNavbar', payload: ''});
    changeType(!isOpen);
  }

  return(
    <div className={isOpen ? style.menuHamb + ' ' + style.open : style.menuHamb} onClick={showHideNavbar}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerBtn;