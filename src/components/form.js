const React = require('react');


import DonationOptions from './donation-options';
import TimeOptions from './time-options';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		// this.state = {selectedTimeOption: 'option1', selectedDonationOption: 'option1'};
	}

	// handleTimeOptionChange = (changeEvent) => {
	// 	this.setState({
	// 		selectedTimeOption: changeEvent.target.value
	// 	})
	// }

	// handleDonationOptionChange = (changeEvent) => {
	// 	this.setState({
	// 		selectedDonationOption: changeEvent.target.value
	// 	})
	// }

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		// console.log('You have selected this amount', this.state.selectedDonationOption);
		// console.log('You have selected this time:', this.state.selectedTimeOption);	
	}

	render() {
		return (
			<div>
				<form id="donation-form" onSubmit={this.handleFormSubmit}>
				  <div className="form-group">
				    <label className="donate-inquiry" htmlFor="donation">What would you like to donate</label>
				    <input type="text" className="form-control" className="donate-input" id="donation" placeholder="$25.00/month"/>
				  </div>

				  <DonationOptions />
				  <TimeOptions />
				 {/* <div className="btn-group" data-toggle="buttons">
					  <label className="btn btn-primary active">
					    <input type="radio" name="options" id="donation-option-1" value="option1" checked={this.state.selectedDonationOption === "option1"} onChange={this.handleDonationOptionChange}/>$25
					  </label>
					  <label className="btn btn-primary">
					    <input type="radio" name="options" id="donation-option-2" value="option2" checked={this.state.selectedDonationOption === "option2"} onChange={this.handleDonationOptionChange}/>$50
					  </label>
					  <label className="btn btn-primary">
					    <input type="radio" name="options" id="donation-option-3" value="option3" checked={this.state.selectedDonationOption === "option3"} onChange={this.handleDonationOptionChange}/>$100
					  </label>
				  </div> */}
				  {/* <div className="form-group">
				    <div className="form-check">
				      <label className="form-check-label">
				        <input type="radio" className="form-check-input" name="options" id="time-option-1" value="option1" checked={this.state.selectedTimeOption === "option1"} onChange={this.handleTimeOptionChange}/>
				        Monthly
				      </label>
				    <label className="form-check-label">
				       <input type="radio" className="form-check-input" name="options" id="time-option-2" value="option2" checked={this.state.selectedTimeOption === "option2"} onChange={this.handleTimeOptionChange}/>
				       One Time
				      </label>
				    </div>
				  </div> */}
				  <div className="form-group">
					  <div className="form-check">
					    <label className="form-check-label ckb">
					    	<input type="checkbox" className="form-check-input"/>
					      	<i></i> Give in honor of
					    </label>
					    <label htmlFor="tribute-name">
					    	<input type="text" className="form-control" id="tribute-name" placeholder="Tribute Full Name"/>
					    </label>
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