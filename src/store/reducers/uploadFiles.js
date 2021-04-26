const initialState = {
	listFiles: [],
};

export default function uploadReducer(state = initialState, action){
	switch(action.type){
		case 'upload/addFiles':
			return {
				...state,
				listFiles: [
					...state.listFiles,
					action.payload
				],
		}
		default:
			return state;
	}
}