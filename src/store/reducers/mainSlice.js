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
            url: '/works/nodejs',
            name_url: 'NodeJS',
            key_word: 'nodejs',
        },
        {
            id: 'navigate_4',
            url: '/works/nodejs/file_to_server',
            name_url: 'Закачать файл',
            key_word: 'file_to_server',
        },
    ],
    categories: [
        {
            id: 'cat_1',
            url_page: '/nodejs',
            url_image: '/img/categories/node.svg',
            alt: 'NodeJs',
            name: 'NodeJS',
            class: '',
        }
    ],
    sub_categories: {
        node_js: [
            {
                id: 'nodejs_1',
                name: 'Загрузить файл',
                url_page: '/file_to_server',
                url_image: '/img/sub_categories/nodejs/upload.svg',
                alt: 'upload',
                class: 'subCat',
            },
            {
                id: 'nodejs_2',
                name: 'Скачать файл',
                url_page: '/download_file',
                url_image: '/img/sub_categories/nodejs/download.svg',
                alt: 'download',
                class: 'subCat',
            },  
        ],
    },
    nodejs_projects:[
        {
            id: 'node_project_1',
            url: '/works/nodejs/file_to_server',
            component: 'file_to_server',
        },
        {
            id: 'node_project_1',
            url: '/works/nodejs/download_file',
            component: 'download_file',
        },
    ],
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
                node: state.sub_categories.node_js,
            }
        case 'main/nodeProjects':
            return {
                ...state,
                nodeProject: state.nodejs_projects,
            }
        default:
            return state;
    }
}