let nextUserId = 0;

let initialState = {
	loading: false,
	all: []
}

const users = (state = initialState, action) =>
{
	switch(action.type)
	{
		case 'RECEIVED_USERS':
			return Object.assign({}, state, {
				loading: false,
				all: action.users
			});
		case 'USER_WAS_SAVED':
			let { name, email, password, active } = action.data;
			return Object.assign({}, state, {
				loading: false,
				all: [
					...state.all,
					{
						id: nextUserId++,
						name, email, password, active
					}
				]
			})
		case 'TOGGLE_USER':
			let users = state.all.map((user) => {
				if( user.id !== action.id ) { return user }
				return Object.assign({}, user, {
					active: ! user.active
				})
				return user;
			})
			return Object.assign({}, state, {
				all: [
					...users
				]
			})
		case 'USER_WAS_DELETED':
			return Object.assign({}, state, {
				all: [
					...state.all.slice(0, action.index),
					...state.all.slice(action.index + 1)
				]
			});
		case 'SHOW_LOADING': 
			return Object.assign({}, state, {
				loading: true
			});
		case 'HIDE_LOADING': 
			return Object.assign({}, state, {
				loading: false
			});
		default:
			return state;
	}
}

export default users;