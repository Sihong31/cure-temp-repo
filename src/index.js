const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const main = require('./main.js');

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: true, slides: [] };
	}

	componentDidMount() {
		axios.get('/api')
			.then(resp => {
				this.setState({
					slides: resp.data.slides,
				}, console.log(resp.data.slides));
			})
			.catch(console.error)
	}

	componentWillUnMount(){

	}

	activeFirstItem() {
		$(window).load(function () {
			$('.carousel-inner div:first').addClass('active');
		});
	}

	render() {
			return (
	      	  	<div id="carousel" className="carousel slide" data-ride="carousel" data-interval="false">

				  <ol className="carousel-indicators">
				    <li data-target="#carousel" data-slide-to="0" className="active"></li>
				    <li data-target="#carousel" data-slide-to="1"></li>
				    <li data-target="#carousel" data-slide-to="2"></li>
				  </ol>

				  <div className="carousel-inner" role="listbox">   	  		
	      	  		  {this.state.slides.map(slide =>
					    <div className="item cure-carousel-item" key={slide.id}>
					      <div className="row">
					      	<div className="col-xs-12">
					      	  <div className="upper-slide-container">
					      	  	<h4 className="header-left" dangerouslySetInnerHTML={{__html: slide.headerLeft}}></h4>
						    	<img className="img-responsive" src={`/images/carousel/${slide.upperImg}`} alt="slide-{slide.id}"/>
						    	<h4 className="header-right" dangerouslySetInnerHTML={{__html: slide.headerRight}}></h4>
						    	<h1 dangerouslySetInnerHTML={{__html: slide.upperMainHeader}}></h1>
						    	<a href="#" className="btn cure-btn upper-carousel-btn" role="button">
						    		<div className="btn-text-container">
						    			{slide.btnText}
						    		</div>
						    	</a>
						      </div>
					      	</div>	
						  </div>

					      <div className="row">
					      	<div className="col-xs-12 col-sm-6 lower-slide-left">
					      	  <div className="lower-slide-container">
						    	<img className="img-responsive hidden-xs" src={`/images/carousel/${slide.lowerImgD}`} alt="slide-{slide.id}"/>
						    	<img className="img-responsive hidden-sm hidden-md hidden-lg" src={`/images/carousel/${slide.lowerImgM}`} alt="slide-{slide.id}"/>
						      </div>
					      	</div>

					    	<div className="col-xs-12 col-sm-6">
					    	</div>
						  </div>
					    </div>
  	      	  	      )}
				  </div>

				  <a className="left carousel-control" href="#carousel"
				     role="button" data-slide="prev">
				    <span className="carousel-prev" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="right carousel-control" href="#carousel"
				     role="button" data-slide="next">
				    <span className="carousel-next" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				  {this.activeFirstItem()}
				</div>

			);
			
	}
}

ReactDOM.render(
	<Carousel />,
	document.getElementById('react-carousel-container')
);



