import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as speakerActionCreators from '../actions/speakers';

class Speakers extends React.Component
{
	constructor(props)
	{
		super(props)
	}

	componentDidMount()
	{

	}

	render()
	{
		let speakers = this.props.speakers.map((speaker, index) => {
			return (
				<li key={index} >
					<span 
						onClick={this.toggleSpeaker.bind(this, speaker.id)}
						style={{ textDecoration: speaker.active ? 'line-through' : 'none' }}
					>
						{ speaker.name }
					</span>
					&nbsp;
					<button
						onClick={this.deleteSpeaker.bind(this, index)}
					>
						&times;
					</button>
				</li>	
			)
		});
		return (
			<div>
				<h3>Speakers</h3>
				{ speakers }

				<hr />

				<div className="row">
					<div className="col-md-4">
						<form ref="addSpeakerForm" onSubmit={this.onSubmit.bind(this)}>
							<label>Name</label>
							<input ref="speaker" className="form-control" />
						</form>
					</div>
				</div>
			</div>
		)
	}

	onSubmit(e)
	{
		e.preventDefault();
		
		let name = this.refs.speaker.value;
		this.props.addSpeaker(name);

		this.refs.addSpeakerForm.reset();
	}

	toggleSpeaker(id)
	{
		this.props.toggleSpeaker(id);
	}

	deleteSpeaker(index)
	{
		this.props.deleteSpeaker(index);
	}
}

const mapStateToProps = (state) => {
	return {
		speakers: state.speakers
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(speakerActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);