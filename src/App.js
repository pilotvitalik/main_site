import React from 'react';
import Navbar from './components/Navbar/Navbar';

import from './app.module.css';

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
  return (
    <React.Fragment>
      <header>
        <Navbar func={showMenu}/>
      </header>
    </React.Fragment>
  )

}

export default App;