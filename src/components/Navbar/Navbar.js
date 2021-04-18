import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import './navbar.module.css';

const AppStyles = makeStyles((theme) => ({
  root: {
    width: '32px',
    height: '32px',
    color: '#fff',
    transition: 'all .3s linear',
    'margin-left': 'auto',
    'margin-right': '5px',
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

function Navbar(props){
  const classes = AppStyles();

  return(
    <MenuIcon className={classes.root} onClick={props.func}/>
  );
}

export default Navbar;