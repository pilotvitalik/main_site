export const defVal = (storeAPI) => (next) => (action) => {
	setTimeout(() => {
		console.log(storeAPI.getState().updHeight);
	}, 2000)
	return next(action)
}