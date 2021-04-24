const initialState = {
    navigate: [
        {
            id: 'navigate_1',
            url: '/works',
            list_pages: [
                {
                    id: 'page_1',
                    url: '/',
                    name: 'Главная',
                },
                {
                    id: 'page_2',
                    url: '/works',
                    name: 'Портфолио',
                }
            ],
        }
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