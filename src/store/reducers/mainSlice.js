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
            name: 'NodeJS',
            url_page: '/nodejs',
            url_image: '/img/categories/node.svg',
            alt: 'NodeJs',
        },
    ]
};

export default function mainReducer(state = initialState, action){
    switch(action.type){
        case 'main/reverseNavigate':
            return {
                ...state,
                navigate: state.navigate,
            };
        case 'main/categories':
            return {
                ...state,
                categories: state.categories,
            }
        default:
            return state;
    }
}