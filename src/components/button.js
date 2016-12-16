const React = require('react');

function Button(props) {
	return (
		<a href="#" className="hidden-xs btn cure-btn donate-btn donate-btn-first-section" id={props.id} role="button">
			<div className="btn-text-container">
				{props.bodyText}
			</div>
		</a>
	);
}

export default Button;