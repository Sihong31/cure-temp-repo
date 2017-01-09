"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const carouselAnimation = require('./carouselAnimation');
const tiles = require('./tiles');
const donate = require('./donate');
const slick = require('./slickSlide');

import Carousel from './components/carousel';
import Tile from './components/tiles';
import Donation from './components/donations';

// ReactDOM.render(
// 	<Carousel />,
// 	document.getElementById('react-carousel-container')
// );

ReactDOM.render(
	<Tile />,
	document.getElementById('react-tile')
)

ReactDOM.render(
	<Donation />,
	document.getElementById('react-donations')
)
