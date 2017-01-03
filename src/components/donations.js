const React = require('react');
const selectionData = require('../../data/selections.json')

import Form from './form';

class Donation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {selections: [], donateActive: true, fundraiseActive: false, speakActive: false };
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
			<Form />
		)
	}	

	fundraiseTemplate() {
		return (
			<div>
				<p>CURE Crew members are making a difference all over the United States by hosting bake sales, swim-a-thons, golf outings, concerts, and much more. By using your own talents, you can lead an event that raises awareness and important funds for research in epilepsy.</p>
				<a href="#" className="hidden-xs btn cure-btn fundraise-btn" role="button">
		    		<div className="btn-text-container">
		    			more about fundraising
		    		</div>
		    	</a>
			</div>
		)

	}

	speakTemplate() {
		return (
			<div>
				<p>Help us spread the word about epilepsy and the need for a cure.</p>
				<div className="boxed-content"><span>"an estimated 3 million americans currently live with epilepsy."</span></div>
				<div className="social-icons">
					<a href="#"><span id="social-icon-fb">share on facebook</span></a>
					<a href="#"><span id="social-icon-twitter">share on twitter</span></a>
				</div>
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
							<h1 onClick={this.donateOnClick} className="selection header-active" id="selection-donate"><span>donate</span></h1>
							<h1 onClick={this.fundraiseOnClick} className="selection" id="selection-fundraise"><span>fundraise</span></h1>
							<h1 onClick={this.speakOnClick} className="selection" id="selection-speak"><span>speak up</span></h1>
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

export default Donation;