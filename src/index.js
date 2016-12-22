const React = require('react');
const ReactDOM = require('react-dom');
const main = require('./main.js');
const tiles = require('./tiles');

import Carousel from './components/carousel';
import Tile from './components/tiles';
import Selection from './components/selections';

ReactDOM.render(
	<Carousel />,
	document.getElementById('react-carousel-container')
);

ReactDOM.render(
	<Tile />,
	document.getElementById('react-tile')
)

ReactDOM.render(
	<Selection />,
	document.getElementById('react-selections')
)
