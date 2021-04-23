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
};

export default function mainReducer(state = initialState, action){
    switch(action.type){
        case 'main/reverseNavigate':
            return {
                ...state,
                navigate: state.navigate,
            };
        default:
            return state;
    }
}