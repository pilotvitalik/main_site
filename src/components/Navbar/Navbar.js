import React, { Component } from 'react';
import TableContentItem from './TableContentItem/TableContentItem';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import styles from './navbar.module.css';

const listNavbar = [
  {
    id: 'navbar_1',
    name: 'Портфолио',
    sub_list: [
      {
        id: 'item_1',
        name: 'NodeJS',
        subItem: [
          {
            id: 'sub_item_1',
            name: 'Загрузить файл',
            url: 'work/nodejs/file_to_server',
          },
          {
            id: 'sub_item_2',
            name: 'Скачать файл',
            url: 'work/nodejs/download_file?user="user_name" + "user_id"',
          },
        ],
      },
    ]
  }
];

const AppStyles = makeStyles((theme) => ({
  root: {
    width: '32px',
    height: '32px',
    color: '#fff',
    transition: 'all .3s linear',
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

function Hamburger(props){
  const classes = AppStyles();

  return(
    <MenuIcon className={classes.root} onClick={props.func}/>
  );
}

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShowMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(e){
    e.currentTarget.classList.toggle('rotateSVG');
    this.setState(state => ({
      isShowMenu: !state.isShowMenu
    }));
  }

  render(){
    const listMenu = listNavbar.map((item) => 
      <TableContentItem key={item.id} value={item.name} subItem={item.sub_list}/>
    );
    return (
      <div className={styles.navbar}>
        <Hamburger func={this.showMenu}/>
        <div className={styles.wrapperNavbar}>
          <nav className={this.state.isShowMenu ? styles.showNavbar : ''}>
            {listMenu}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;