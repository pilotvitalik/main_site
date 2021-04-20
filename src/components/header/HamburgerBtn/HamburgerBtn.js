import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

const AppStyles = makeStyles((theme) => ({
  root: {
    width: '32px',
    height: '32px',
    color: '#fff',
    transition: 'all .3s linear',
    'margin-left': '7px',
    'margin-right': 'auto',
    '@media(min-width: 992px)': {
      display: 'none',
    },
    '&:hover':  {
      cursor: 'pointer',
    },
    '&.rotateSVG': {
      transform: 'rotate(90deg)',
    }
  },
}));

function HamburgerBtn(props){
  const classes = AppStyles();
  const dispatch = useDispatch();

  function showHideNavbar(e){
    dispatch({type: 'header/visibleNavbar', payload: ''});
  }

  return(
    <MenuIcon className={classes.root} onClick={showHideNavbar}/>
  );
}

export default HamburgerBtn;