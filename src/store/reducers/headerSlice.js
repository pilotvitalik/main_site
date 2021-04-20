const initialState = {
	navbar: [
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
	],
}

export default function headerReducer(state = initialState, action){
	switch(action.type){
		case 'header/navbar':
			return state;
		default:
			return state;
	}
}

export function initNavbar(dispatch, getState){
		dispatch({type: 'header/navbar', payload: ''});
}