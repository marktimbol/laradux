let nextSpeakerId = 0;

const speakers = (state = [], action) => {
	switch(action.type)
	{
		case 'ADD_SPEAKER':
			return [
				...state,
				{
					id: nextSpeakerId++,
					name: action.name,
					active: false
				}
			]
		case 'TOGGLE_SPEAKER':
			return state.map((speaker) => {
				if( action.id !== speaker.id ) {
					return speaker
				}

				return Object.assign({}, speaker, {
					active: !speaker.active
				});
			})
		case 'DELETE_SPEAKER':
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
}

export default speakers;