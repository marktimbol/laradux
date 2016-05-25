import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../actions/users';
import AllUsers from './AllUsers';

class Users extends React.Component
{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		let { loading, all } = this.props.users;
		
		if( loading ) {
			return (
				<div>Loading...</div>
			)
		}

		return (
			<div className="row">
				<div className="col-md-6">
					<h3>Users</h3>
					<AllUsers {...this.props} />
				</div>
				<div className="col-md-6">
					<form ref="UserForm" onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
							<label>Name</label>
							<input ref="name" className="form-control" />
						</div>
						<div className="form-group">
							<label>E-Mail</label>
							<input ref="email" className="form-control" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" ref="password" className="form-control" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

	onSubmit(e) {
		e.preventDefault();

		let name = this.refs.name.value;
		let email = this.refs.email.value;
		let password = this.refs.password.value;

		this.refs.UserForm.reset();

		this.props.savingUser(name, email, password);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);