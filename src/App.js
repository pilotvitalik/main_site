import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import TableContentItem from './components/Navbar/TableContentItem/TableContentItem';

import styles from './app.module.css';

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
  },
  {
    id: 'navbar_2',
    name: 'Портфолио',
    sub_list: [
      {
        id: 'item_2',
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
  },
  {
    id: 'navbar_3',
    name: 'Портфолио',
    sub_list: [
      {
        id: 'item_3',
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

function App(){
  const [isShowMenu, toggleIsShow] = useState(false);

  function showMenu(e){
    e.currentTarget.classList.toggle('rotateSVG');
    toggleIsShow(!isShowMenu);
  }

  const listMenu = listNavbar.map((item) => 
    <TableContentItem key={item.id} value={item.name} subItem={item.sub_list}/>
  );

  return (
    <React.Fragment>
      <header>
        <Navbar func={showMenu}/>
        <nav className={isShowMenu ? styles.showNavbar : ''}>
          {listMenu}
        </nav>
      </header>
    </React.Fragment>
  )

}

export default App;