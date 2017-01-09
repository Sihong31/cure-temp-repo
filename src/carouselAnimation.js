const easeScroll = require('./jquery.easeScroll.js');

	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = $("section");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
					// duration: 300
					// triggerHook: 0,
					// reverse: true
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}

	});

function Parallax() {
	this.mainImageScroll();
	this.mainImageResize();
	this.mainImageOnPageLoad();
	this.easeScrolling();
}

Parallax.prototype = {
	constructor: Parallax,

	scrollConditions: function() {
		const mainImage = $(".main-image");
		const lowerContainer = $(".lower-slide-container");
		const lowerContainerHeight = lowerContainer.height();
		const topChange = 100/lowerContainerHeight;
		const leftChange = -(29/lowerContainerHeight);
		const checkWinWidth = window.innerWidth;
		const scrolled = $(window).scrollTop();

		if (scrolled <= lowerContainerHeight) {
		    mainImage.css("top", scrolled * topChange + "%");

		    if (checkWinWidth < 768 ) {
		    	mainImage.css("top", 25 + (scrolled * topChange) + "%");
		    }

	   		if (checkWinWidth > 1080) {
	   			mainImage.css("left",  50 + scrolled * leftChange + "%");
	   			mainImage.css("opacity", 1);
	   		}
	   		else {
	   			mainImage.css("left",  50 + "%");
	   			if (parseInt(mainImage[0].style.top) > 50 && checkWinWidth < 1081) {
			     	mainImage.css("opacity", .4);
				}
				else {
					mainImage.css("opacity", 1);
				}
	   		};
		}
		if (scrolled > lowerContainerHeight) {
			mainImage.css("top", 98.13 + "%");
			mainImage.css("left", 21.6767 + "%");
			if (checkWinWidth < 768) {
				mainImage.css("top", 125 + "%");					
			}
			if (checkWinWidth < 1081) {
				mainImage.css("left", 50 + "%");
				mainImage.css("opacity", .4);
			}
			if (checkWinWidth > 1080) {
				mainImage.css("opacity", 1);
			}
		}	
	},

	mainImageScroll: function() {
		const scrollConditions = this.scrollConditions;
		$(window).scroll(function(e){
			scrollConditions();
		});		
	},

	mainImageOnPageLoad: function() {
		const scrollConditions = this.scrollConditions;
		$(window).load(function () {
			scrollConditions();			
		});
	},

	mainImageResize: function() {
		const scrollConditions = this.scrollConditions;
		$(window).resize(function() {
			scrollConditions();
		});
	},

	easeScrolling: function() {
		const html = $("html");
		html.easeScroll();

		html.easeScroll({
		  frameRate: 60,
		  animationTime: 1500,
		  stepSize: 120,
		  pulseAlgorithm: 1,
		  pulseScale: 8,
		  pulseNormalize: 1,
		  accelerationDelta: 20,
		  accelerationMax: 1,
		  keyboardSupport: true,
		  arrowScroll: 50,
		  touchpadSupport: true,
		  fixedBackground: true
		});
	},


}

function FadeAnimation() {
	this.toAnimate();
}

FadeAnimation.prototype = {

	constructor: FadeAnimation,
	fadeConditions: function(lowerSlideRight, lowerContainerOffset, index) {
		const scrolled = $(window).scrollTop();
		if (scrolled > lowerContainerOffset/1.5) {
			if ($(lowerSlideRight[index]).css("opacity") == 0) {
				$(lowerSlideRight[index]).fadeTo(500, 1);
			}
		}
		if (scrolled < lowerContainerOffset/1.5){
			if ($(lowerSlideRight[index]).css("opacity") == 1) {
				$(lowerSlideRight[index]).fadeTo(500, 0);
			}
		}
	},

	toAnimate: function() {
		const lowerSlideRight = $(".lower-slide-right");
		const lowerContainerOffset = $(".lower-slide-container").offset().top;
		const fadeConditions = this.fadeConditions;
		lowerSlideRight.each( function(index){
			$(window).scroll(function(e){
				fadeConditions(lowerSlideRight, lowerContainerOffset, index);
			});			
			$(window).resize(function(e){
				fadeConditions(lowerSlideRight, lowerContainerOffset, index);
			});			
			$(window).load(function(e){
				fadeConditions(lowerSlideRight, lowerContainerOffset, index);
			});
		});
	}

}

function DownArrow() {
	this.arrowScroll();
}

DownArrow.prototype = {

	constructor: DownArrow,

	pageOn: function(page) {
      page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
        page.stop(); //stop scroll animation if user does something manual
      });
    },

    pageOff: function(page) {
      page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    },

	arrowAnimate: function(section, page, fn) {
		page.animate({
			scrollTop: section.offset().top
		}, 'slow', function() {
			fn(page);
		});
	},

	arrowScroll: function() {
		const downArrows = $(".down-arrow-container .down-arrow");
		const downArrowsString = ".down-arrow-container .down-arrow";
		const page = $("html, body");
		const arrowAnimate = this.arrowAnimate;
		const pageOn = this.pageOn;
		const pageOff = this.pageOff;
		$("body").on("click", downArrowsString, function(){
			const section1 = $(".carousel .active .lower-slide-container");
			const section2 = $(".section-2");
			const section3 = $(".section-3");
			const section4 = $(".section-4");
			pageOn(page);
			if ($(this).hasClass("arrow-1")) {
				arrowAnimate(section1, page, pageOff)
			}

			if ($(this).hasClass("arrow-2")) {
				arrowAnimate(section2, page, pageOff)	
			}	

			if ($(this).hasClass("arrow-3")) {
				arrowAnimate(section3, page, pageOff)
			}	

			if ($(this).hasClass("arrow-4")) {
				arrowAnimate(section4, page, pageOff)
			}	
		});
	}

}

function init() {
	// new Parallax();
	// new FadeAnimation();
	// new DownArrow();
}

document.addEventListener("DOMContentLoaded", function() {
  init();
}, false);
