const React = require('react');

class TimeOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedTimeOption: 'option1'};
	}

	handleTimeOptionChange = (changeEvent) => {
		this.setState({
			selectedTimeOption: changeEvent.target.value
		}, console.log(changeEvent.target.value))
	}

	render() {
		return(
			<div className="form-group">
			    <div className="form-check time-options-container">
			      <label className="form-check-label rad" htmlFor="time-option-1">
			      	<input type="radio" className="form-check-input" name="options" id="time-option-1" value="option1" checked={this.state.selectedTimeOption === "option1"} onChange={this.handleTimeOptionChange}/>
			      	<i></i> Monthly
			      </label>
			     <label className="form-check-label rad" htmlFor="time-option-2">
			     	<input type="radio" className="form-check-input" name="options" id="time-option-2" value="option2" checked={this.state.selectedTimeOption === "option2"} onChange={this.handleTimeOptionChange}/>
			        <i></i> One Time
			     </label>
			    </div>
			</div>
		)
	}
}

export default TimeOptions;