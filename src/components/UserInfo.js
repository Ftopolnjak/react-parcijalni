import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, repo, setUser } = this.props;

		return (
			<div>
				<img src={user.avatar_url}></img>
				<h1>{user.name}</h1>
				<p>
					<strong>BIO: </strong>
					{user.bio}
				</p>
				<p>
					<strong>LOCATION: </strong>
					{user.location}
				</p>
				<strong>REPOSITORIES:</strong>
				<ul>
					{repo && repo.map((repo) => <li key={repo.id}>{repo.name}</li>)}
				</ul>
				<button onClick={() => setUser(null)}>RESET</button>
			</div>
		);
	}
}

UserInfo.propTypes = {
	user: PropTypes.object,
	repo: PropTypes.array,
	setUser: PropTypes.func,
};
