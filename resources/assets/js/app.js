import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';

import AIMCongress from './containers/AIMCongress';

class App extends React.Component
{
	render()
	{
		return (
			<Provider store={store}>
				<AIMCongress />
			</Provider>
		)
	}
}

render(
	<App />,
	document.getElementById('root')
);