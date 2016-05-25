import React from 'react';

import Users from '../components/Users';
import Speakers from '../components/Speakers';

class AIMCongress extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div>
				<Users />
				<Speakers />
			</div>
		)
	}
}

export default AIMCongress;