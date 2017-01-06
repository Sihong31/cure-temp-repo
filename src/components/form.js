const React = require('react');


import DonationOptions from './donation-options';
import TimeOptions from './time-options';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
	}

	render() {
		return (
			<div>
				<form id="donation-form" onSubmit={this.handleFormSubmit}>
				  <div className="form-group donate-input-container">
				    <label className="donate-inquiry hidden-xs" htmlFor="donation">What would you like to donate</label>
				    <input type="text" className="form-control" className="donate-input" id="donation" placeholder="$25.00"/>
				  </div>

				  <DonationOptions />
				  <TimeOptions />
				  <div className="form-group tribute-container">
					  <div className="form-check">
					  	<div className="row">
					  		<div className="col-xs-12 p-0">
					  			<div className="col-xs-12 col-md-5 p-r-0">
								    <label className="form-check-label ckb tribute-name-ckb">
								    	<input type="checkbox" className="form-check-input"/>
								      	<i></i> Give in honor of
								    </label>
								</div>
								<div className="col-xs-12 col-md-7 p-r-0">
								    <label htmlFor="tribute-name" className="tribute-name-label">
								    	<input type="text" className="form-control" id="tribute-name" placeholder="Tribute Full Name"/>
								    </label>
								</div>
							</div>
						</div>
					  </div>
				  </div>
				  <button type="submit" className="btn donation-submit-btn">
					  <div className="submit-btn-container">
					  	donate
					  </div>
				  </button>
				</form>
				<div>
					<p className="learn-more">Curious about where your money goes? <a href="#">Learn more</a> about what we do.</p>
				</div>
			</div>
		)
	}
}

export default Form;