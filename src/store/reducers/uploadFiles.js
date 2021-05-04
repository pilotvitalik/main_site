import axios from 'axios';

const initialState = {
	listFiles: [],
	common_size: 0,
	isSend: {
		status: '',
		trigger: false,
	}
};

function addFiles(arr, file){
	return{
		id: `upload_${arr.length + 1}`,
		file: file,
		checked: false,
	}
}

function checkedFile(arr, id){
	let newArr = arr.slice();
	newArr.forEach((item, index) => {
		if (item.id === id){
			item.checked = !item.checked
		}
	})
	return newArr;
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

function calcFileSize(actVal, val){
	return actVal + val;
}

function checkFiles(arr, val){
	let updArr = arr.slice();
	if (val === 'all'){
		updArr.forEach(item => {
			console.log(item)
			item.checked = true;
		});
	}
	return updArr;
}

function changeStatusSend(val){
	return {
		status: val,
		trigger: true,
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
			};
		case 'upload/checkedFiles':
			return {
				...state,
				listFiles: checkedFile(state.listFiles, action.payload),
			};
		case 'upload/deleteFile':
			return {
				...state,
				listFiles: deleteFile(state.listFiles, action.payload),
			};
		case 'upload/calcSize':
			return {
				...state, 
				common_size: calcFileSize(state.common_size, action.payload),
			}
		case 'upload/checkFiles':
			return {
				...state,
				listFiles: checkFiles(state.listFiles, action.payload),
			}
		case 'upload/sendServer':
			return{
				...state,
				isSend: changeStatusSend(action.payload),
			}
		default:
			return state;
	}
}

export function sendFilesToServer(dispatch, getState){
	const store = getState();
	const filesArr = store.upload.listFiles;
	const form = new FormData();
	const updArr = filesArr.slice();
	updArr.forEach(item => {
		form.append(item.file.name, item.file);
	});
	axios.post('/send/file', form)
		.then(res => {
			dispatch({type:'upload/sendServer', payload: 'success'});
			console.log(res);
		})
		.catch(err => {
			dispatch({type:'upload/sendServer', payload: 'error'});
			console.log(err)}
		);
}