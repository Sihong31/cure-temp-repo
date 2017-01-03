const React = require('react');

class DonationOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedDonationOption: 'option1'};
	}

	handleDonationOptionChange = (changeEvent) => {
		this.setState({
			selectedDonationOption: changeEvent.target.value
		}, console.log(changeEvent.target.value))
	}

	render() {
		return(

		  <div className="btn-group donation-buttons">
			  <label className="btn btn-primary active">
			    <input type="checkbox" name="options" className="donation-options" id="donation-option-1" value="option1" checked={this.state.selectedDonationOption === "option1"} onChange={this.handleDonationOptionChange}/>$25
			  </label>
			  <label className="btn btn-primary">
			    <input type="checkbox" name="options" className="donation-options" id="donation-option-2" value="option2" checked={this.state.selectedDonationOption === "option2"} onChange={this.handleDonationOptionChange}/>$50
			  </label>
			  <label className="btn btn-primary">
			    <input type="checkbox" name="options" className="donation-options" id="donation-option-3" value="option3" checked={this.state.selectedDonationOption === "option3"} onChange={this.handleDonationOptionChange}/>$100
			  </label>
		  </div>
		)
	}
}

export default DonationOptions;