const React = require('react');
const ReactDOM = require('react-dom');
const main = require('./main.js');

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: ""};
	}
	render() {
		return(
			<div className="test-2">
				<h2>react test</h2>
			</div>
		)
	};
}

// ReactDOM.render(
// 	<Carousel />,
// 	document.getElementById('main')
// );