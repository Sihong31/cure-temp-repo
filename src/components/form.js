const React = require('react');

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedOption: 'option1'};
	}

	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		}, console.log(changeEvent.target.value))
	}

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		console.log('You have selected:', this.state.selectedOption);	
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">What would you like to donate</label>
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="$50.00/month"/>
				  </div>
				 <fieldset className="form-group">
				    <legend>Radio buttons</legend>
				    <div className="form-check">
				      <label className="form-check-label">
				        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}/>
				        Monthly
				      </label>
				    <label className="form-check-label">
				       <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
				       One Time
				      </label>
				    </div>
				  </fieldset>
				  <div className="form-check">
				    <label className="form-check-label">
				      <input type="checkbox" className="form-check-input"/>
				      	Give in honor of
				    </label>
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1"></label>
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Tribute Full Name"/>
				  </div>
				  <button type="submit" className="btn btn-primary">Donate</button>
				</form>
			</div>
		)
	}
}

export default Form;