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
    '@media(min-width: 992px)': {
      display: 'none',
    },
    '&:hover':  {
      cursor: 'pointer',
    }
  },
}));

function Hamburger(){
  const classes = AppStyles();
  return(
    <MenuIcon className={classes.root}/>
  );
}

class Navbar extends Component{
  render(){
    const listMenu = listNavbar.map((item) => 
      <TableContentItem key={item.id} value={item.name} subItem={item.sub_list}/>
    );
    return (
      <div className={styles.navbar}>
        <Hamburger/>
        <nav>
          {listMenu}
        </nav>
      </div>
    );
  }
}

export default Navbar;