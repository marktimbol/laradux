const addSpeaker = (name) => {
	return {	
		type: 'ADD_SPEAKER',
		name
	}
}

const toggleSpeaker = (id) => {
	return {
		type: 'TOGGLE_SPEAKER',
		id
	}
}

const deleteSpeaker = (index) => {
	return {
		type: 'DELETE_SPEAKER',
		index
	}
}

export {
	addSpeaker,
	toggleSpeaker,
	deleteSpeaker
}