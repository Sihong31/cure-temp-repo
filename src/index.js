const React = require('react');
const ReactDOM = require('react-dom');
const main = require('./main');
const tiles = require('./tiles');
const donate = require('./donate');

import Carousel from './components/carousel';
import Tile from './components/tiles';
import Donation from './components/donations';

ReactDOM.render(
	<Carousel />,
	document.getElementById('react-carousel-container')
);

ReactDOM.render(
	<Tile />,
	document.getElementById('react-tile')
)

ReactDOM.render(
	<Donation />,
	document.getElementById('react-selections')
)
