import fetch from 'isomorphic-fetch';
const domain = 'http://laradux.dev';

/**
* Show or hide loading indicator
**/
const showLoading = () => {
	return {
		type: 'SHOW_LOADING'
	}
}

const hideLoading = () => {
	return {
		type: 'HIDE_LOADING'
	}
}

/**
* Get the users
**/
const fetchUsers = () => {
	return (dispatch) => {
		dispatch(showLoading());
		return fetch(`${domain}/api/users`)
			.then((response) => response.json())
			.then((users) => {
				dispatch(receivedUsers(users));
			});
	}
}

const receivedUsers = (users) => {
	return {
		type: 'RECEIVED_USERS',
		users
	}
}

/**
* Saving a user
**/
const savingUser = (name, email, password) => {
	return (dispatch) => {
		return fetch(`${domain}/api/users`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name, email, password
			})
		})
		.then((response) => response.json())
		.then((data) => {
			dispatch(userWasSaved(data));
		})
		.catch((error) => {
			console.warn(error);
		});
	}
}

const userWasSaved = (data) => {
	return {	
		type: 'USER_WAS_SAVED',
		data
	}
}

/**
* Toggling a user
**/ 
const toggleUser = (id) => {
	return {
		type: 'TOGGLE_USER',
		id
	}
}

/**
* Deleting a user
**/
const deletingUser = (index, id) => {
	return (dispatch) => {
		return fetch(`${domain}/api/users/${id}`, {
			method: 'DELETE',
			header: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((responseData) => {
			dispatch(userWasDeleted(index));
		})
	}
}

const userWasDeleted = (index) => {
	return {
		type: 'USER_WAS_DELETED',
		index
	}
}

export {
	showLoading,
	hideLoading,

	fetchUsers,
	receivedUsers,

	savingUser,
	userWasSaved,

	deletingUser,
	userWasDeleted,

	toggleUser
}