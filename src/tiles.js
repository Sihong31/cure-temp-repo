function Tiles() {
	this.tiles = $(".section-3 .tile-container");
	this.onHover();
}

Tiles.prototype = {

	constructor: Tiles,

	replaceText: function(text) {
		const textContainer = $(".section-3 .tile-change");
		textContainer.text(text);
	},

	onHover: function() {
		const tiles = this.tiles;
		const replaceText = this.replaceText;
		
				tiles.hover(function(){

				if ($(this).attr("id") == "tile-1") {
					replaceText("pineapples");
				}				
				if ($(this).attr("id") == "tile-2") {
					replaceText("coffee beans");
				}				
				if ($(this).attr("id") == "tile-3") {
					replaceText("pandas");
				}				
				if ($(this).attr("id") == "tile-4") {
					replaceText("dolphins");
				}
		})
	}

}

function init() {
	new Tiles();
}

document.addEventListener("DOMContentLoaded", function() {
  init();
}, false);
