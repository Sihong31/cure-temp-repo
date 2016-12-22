const React = require('react');
const selectionData = require('../../data/selections.json')



class Selection extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selections: [], donateActive: true, fundraiseActive: false, speakActive: false };
		// this.donateOnClick = this.donateOnClick.bind(this);
		// this.fundraiseOnClick = this.fundraiseOnClick.bind(this);
		// this.speakOnClick = this.speakOnClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			selections: selectionData.selections
		})
	}

	componentWillUnMount(){
		console.log("unmounted!"); 
	}

	donateOnClick = () => {
		this.setState({ donateActive: true, fundraiseActive: false, speakActive: false});
	}

	fundraiseOnClick = () => {
		this.setState({ fundraiseActive: true, donateActive: false, speakActive: false});
	}

	speakOnClick = () => {
		this.setState({ speakActive: true, fundraiseActive: false, donateActive: false});
	}

	donateTemplate() {
		return (
			<div>
				<h4>What would you like to donate?</h4>
				
			</div>
		)
	}	

	fundraiseTemplate() {
		return (
			<div>
				<h1>fundraise template</h1>
			</div>
		)

	}

	speakTemplate() {
		return (
			<div>
				<h1>speak template</h1>
			</div>
		)
	}

	donateImage() {
		return (
			<div>
				<img className="img-responsive hidden-xs" src="./images/selections/desktop-selection-1.jpg" alt=""/>
				<img className="img-responsive hidden-sm hidden-md hidden-lg" src="./images/selections/mobile-selection-1.jpg" alt=""/>
			</div>
		)
	}

	fundraiseImage() {
		return (
			<div>
				<img className="img-responsive hidden-xs" src="./images/selections/desktop-selection-2.jpg" alt=""/>
				<img className="img-responsive hidden-sm hidden-md hidden-lg" src="./images/selections/mobile-selection-2.jpg" alt=""/>
			</div>
		)
	}

	speakImage() {
		return (
			<div>
				<img className="img-responsive hidden-xs" src="./images/selections/desktop-selection-3.jpg" alt=""/>
				<img className="img-responsive hidden-sm hidden-md hidden-lg" src="./images/selections/mobile-selection-3.jpg" alt=""/>
			</div>
		)
	}

	render() {
		return(
			<div>
				<div className="col-sm-6 col-sm-push-6 right">
					<div className="right-content-container">
						<div className="selections">
							<h3>You can</h3>
							<h1 onClick={this.donateOnClick} className="selection active" id="selection-donate">donate</h1>
							<h1 onClick={this.fundraiseOnClick} className="selection" id="selection-fundraise">fundraise</h1>
							<h1 onClick={this.speakOnClick} className="selection" id="selection-speak">speak up</h1>
							<hr></hr>
						</div>
						<div>
						    { this.state.donateActive ? this.donateTemplate() : null }
						    { this.state.fundraiseActive ? this.fundraiseTemplate() : null }
						    { this.state.speakActive ? this.speakTemplate() : null }
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-sm-pull-6 left">
					<div className="left-content-container">
							{ this.state.donateActive ? this.donateImage() : null }
						    { this.state.fundraiseActive ? this.fundraiseImage() : null }
						    { this.state.speakActive ? this.speakImage() : null }
					</div>
				</div>
			</div>
		);
	}


}

export default Selection;