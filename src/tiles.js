function Tiles() {
	this.tiles = $(".section-3 .tile-container");
	this.onHover();
}

Tiles.prototype = {

	constructor: Tiles,

	onHover: function() {
		$('body').bind('touchstart', function() {});
		const tiles = this.tiles;
		const textContainer = $(".section-3 .tile-change");
		
				tiles.hover(function(){

				if ($(this).attr("id") == "tile-1") {
					textContainer.text("pineapples")
				}				
				if ($(this).attr("id") == "tile-2") {
					textContainer.text("coffee beans")
				}				
				if ($(this).attr("id") == "tile-3") {
					textContainer.text("pandas")
				}				
				if ($(this).attr("id") == "tile-4") {
					textContainer.text("dolphins")
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
