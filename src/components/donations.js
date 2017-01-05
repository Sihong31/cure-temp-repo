const React = require('react');
const donationData = require('../../data/donations.json')

import Form from './form';

class Donation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {donations: [], donateActive: true, fundraiseActive: false, speakActive: false, headerActiveValue: 1 };
	}

	componentDidMount() {
		this.setState({
			donations: donationData.donations
		})
	}

	componentWillUnMount(){
		console.log("unmounted!"); 
	}

	headerIsActive = (value) => {
		return 'col-xs-4 col-sm-12 selection-container ' + ((value===this.state.headerActiveValue) ? 'selection-active':'');
	}

	donateOnClick = () => {
		this.setState({ donateActive: true, fundraiseActive: false, speakActive: false, headerActiveValue: 1});
	}

	fundraiseOnClick = () => {
		this.setState({ fundraiseActive: true, donateActive: false, speakActive: false, headerActiveValue: 2});
	}

	speakOnClick = () => {
		this.setState({ speakActive: true, fundraiseActive: false, donateActive: false, headerActiveValue: 3});
	}

	donateTemplate() {
		return (
			<Form />
		)
	}	

	fundraiseTemplate() {
		return (
			<div>
				<p className="fundraise-copy">CURE Crew members are making a difference all over the United States by hosting bake sales, swim-a-thons, golf outings, concerts, and much more. By using your own talents, you can lead an event that raises awareness and important funds for research in epilepsy.</p>
				<a href="#" className="btn cure-btn fundraise-btn" role="button">
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
				<p className="speak-up-copy">Help us spread the word about epilepsy and the need for a cure.</p>
				<div className="boxed-content"><span>"an estimated 3 million americans currently live with epilepsy."</span></div>
				<div className="social-icons">
					<div className="row">
						<div className="col-xs-12 p-0">
							<div className="col-xs-12 col-md-6">
								<a href="#"><span id="social-icon-fb">share on facebook</span></a>
							</div>
							<div className="col-xs-12 col-md-6">
								<a href="#"><span id="social-icon-twitter">share on twitter</span></a>
							</div>
						</div>
					</div>
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
						<div className="row">
							<div className="col-xs-12 p-0">
								<h3 className="selections-header">You can</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 p-0 selections">
								<div onClick={this.donateOnClick} className={this.headerIsActive(1)}>
									<h1 className="selection" id="selection-donate"><span>donate</span></h1>
								</div>
								<div onClick={this.fundraiseOnClick} className={this.headerIsActive(2)}>
									<h1 className="selection" id="selection-fundraise"><span>fundraise</span></h1>
								</div>
								<div onClick={this.speakOnClick} className={this.headerIsActive(3)}>
									<h1 className="selection" id="selection-speak"><span>speak up</span></h1>
								</div>
							</div>
						</div>
						<hr className="hidden-xs"></hr>
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