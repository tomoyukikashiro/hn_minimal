import { h, Component } from 'preact';

export default class Navigation extends Component {
	componentDidMount() {
		let lastUpdate = new Date();
		this.setState({ lastUpdate });
	}

	render({ }, { lastUpdate }) {
		return (
			<div class="navigation">
				<h1>Hacker News</h1>
				<span>Last updated at {lastUpdate ? lastUpdate.toString() : 'never'}</span>
			</div>
		);
	}
}
