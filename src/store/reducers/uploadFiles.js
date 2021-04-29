const initialState = {
	listFiles: [],
};

function addFiles(arr, file){
	console.log(arr, file);
	return{
		id: `upload_${arr.length + 1}`,
		file: file,
	}
}

function deleteFile(arr, id){
	let newArr = arr.slice();
	let delInd;
	newArr.forEach((item, index) => {
		if (item.id === id){
			newArr.splice(index, 1);
			delInd = index;
		}
	})
	newArr.forEach((obj, index) => {
		if (index >=delInd){
			obj.id = `upload_${Number(obj.id.replace(/upload_/gi, '')) - 1}`;
		}
	});
	return newArr;
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
			};
		case 'upload/deleteFile':
			return {
				...state,
				listFiles: deleteFile(state.listFiles, action.payload),
			}
		default:
			return state;
	}
}