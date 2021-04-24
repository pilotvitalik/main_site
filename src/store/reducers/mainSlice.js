const initialState = {
    navigate: [
        {
            id: 'navigate_1',
            url: '/',
            name_url: 'Главная',
            key_word: '',
        },
        {
            id: 'navigate_2',
            url: '/works',
            name_url: 'Портфолио',
            key_word: 'works',
        },
        {
            id: 'navigate_3',
            url: '/nodejs',
            name_url: 'NodeJS',
            key_word: 'nodejs',
        },
    ],
    categories: [
        {
            id: 'cat_1',
            url_page: '/nodejs',
            url_image: '/img/categories/node.svg',
            alt: 'NodeJs',
            name: 'NodeJS'
        }
    ],
    sub_categories: {
        node_js: [
            {
                id: 'nodejs_1',
                name: 'Загрузить файл',
                url_page: '/nodejs',
                url_image: '/file_to_server',
                alt: 'upload',
            },
            {
                id: 'nodejs_2',
                name: 'Скачать файл',
                url_page: '/nodejs',
                url_image: '/download_file',
                alt: 'download',
            },  
        ],
    }
};

export default function mainReducer(state = initialState, action){
    switch(action.type){
        case 'main/categories':
            return {
                ...state,
                categories: state.categories,
            }
        case 'main/workNode':
            return {
                ...state,
                categories: state.sub_categories.node_js
            }
        default:
            return state;
    }
}