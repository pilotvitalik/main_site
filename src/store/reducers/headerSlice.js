const initialState = {
	navbar: [
	  {
	    id: 'navbar_2',
	    name: 'Портфолио',
		url: '/works',
		exact: true,
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
	],
	isShowNavbar: false,
}

export default function headerReducer(state = initialState, action){
	switch(action.type){
		case 'header/navbar':
			return {
				...state,
				navbar: state.navbar,
			};
		case 'header/visibleNavbar':
			return {
				...state,
				isShowNavbar: !state.isShowNavbar,
			};
		default:
			return state;
	}
}

export function initNavbar(dispatch){
		dispatch({type: 'header/navbar', payload: ''});
}