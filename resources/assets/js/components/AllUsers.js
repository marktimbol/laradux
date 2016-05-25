import React from 'react';

class AllUsers extends React.Component
{
	constructor(props) {
		super(props);
	}

	render()
	{
		let users = this.props.users.all.map((user, index) => {
			return (
				<li className="list-group-item" key={index}>
					<span 
						onClick={this.toggleUser.bind(this, user.id)}
						style={{ textDecoration: user.active ? 'line-through' : 'none' }}
					>
						{ user.name } - { user.email }
					</span>
					&nbsp;
					<a href="#"
						className="pull-right"
						onClick={this.onDeleteUser.bind(this, index, user.id)}
					>
						&times;
					</a>
				</li>	
			)
		});

		return (
			<ul className="list-group">
				{ users }
			</ul>
		)
	}

	onDeleteUser(index, id) {
		this.props.deletingUser(index, id);
	}

	toggleUser(id) {
		this.props.toggleUser(id);
	}
}

export default AllUsers;