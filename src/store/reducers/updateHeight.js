const initState = {
	maxHeight: 0,
}

function increment(){
	return '117';
}

function decrease(){
	return 0;
}

export default function changeHeight(state = initState, action){
	switch(action.type){
		case 'css/plusHeight':
			return {
				...state,
				maxHeight: increment(),
			}
		case 'css/minusHeight':
			return {
				...state,
				maxHeight: decrease(),
			}
		default:
			return state;
	}
}