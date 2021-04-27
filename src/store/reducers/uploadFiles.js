const initialState = {
	listFiles: [],
};

function addFiles(arr, file){
	return{
		id: `upload_${arr.length + 1}`,
		file: file,
	}
}

export default function uploadReducer(state = initialState, action){
	switch(action.type){
		case 'upload/addFiles':
			return {
				...state,
				listFiles: [
					...state.listFiles,
					addFiles(state.listFiles, action.payload)
				],
		}
		default:
			return state;
	}
}