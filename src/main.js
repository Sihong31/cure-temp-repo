const easeScroll = require('./jquery.easeScroll.js');

$('.carousel').carousel({
	
});

function Parallax() {
	this.mainImage = $(".main-image");
	this.lowerContainer = $(".lower-slide-container");

	this.mainImageScroll();
	this.mainImageResize();
	this.easeScrolling();
	this.fadeAnimation();
}

Parallax.prototype = {
	constructor: Parallax,

	mainImageScroll: function() {
		const mainImage = this.mainImage;
		const lowerContainer = this.lowerContainer;
		$(window).scroll(function(e){
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
		});		
	},

	mainImageResize: function() {
		const mainImage = this.mainImage;
		const lowerContainer = this.lowerContainer;
		$(window).resize(function() {
			const lowerContainerHeight = lowerContainer.height();
			const topChange = 100/lowerContainerHeight;
			const leftChange = -(29/lowerContainerHeight);
			const checkWinWidth = window.innerWidth;
			const scrolled = $(window).scrollTop();
			if (checkWinWidth < 768) {
				mainImage.css("top", 25 + scrolled * topChange + "%");
			}
			if (checkWinWidth > 767) {
				mainImage.css("top", scrolled * topChange + "%"); 
				mainImage.css("left",  50 + scrolled * leftChange + "%");
				mainImage.css("opacity", 1);
			}
			if (checkWinWidth > 767 && checkWinWidth < 1081) {
				mainImage.css("left",  50 + "%");
			}
			if (parseInt(mainImage[0].style.top) > 50 && checkWinWidth < 1081) {
					mainImage.css("opacity", .4);		
			}
			else {
				mainImage.css("opacity", 1);	
			}
		});
	},

	easeScrolling: function() {
		const html = $("html");
		html.easeScroll();

		html.easeScroll({
		  frameRate: 60,
		  animationTime: 2000,
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

	fadeAnimation: function() {
		 // $(".top").css("opacity", 1 - $(window).scrollTop() / 250);

		const lowerSlideRight = $(".lower-slide-right");
		const lowerContainerOffset = $(".lower-slide-container").offset().top;
		lowerSlideRight.each( function(i){
			$(window).scroll(function(e){
			const scrolled = $(window).scrollTop();
			// console.log(scrolled, "******", lowerContainerOffset/2);
				if (scrolled > lowerContainerOffset/2) {
					if ($(lowerSlideRight[i]).css("opacity") == 0) {
						$(lowerSlideRight[i]).fadeTo(500, 1);
					}
				}
				if (scrolled < lowerContainerOffset/2){
					if ($(lowerSlideRight[i]).css("opacity") == 1) {
						$(lowerSlideRight[i]).fadeTo(500, 0);
					}
				}
			});
		});

	  //   $(window).scroll( function(){
	    
	  //      	const scrolled = $(window).scrollTop();
			// const lowerSlideRight = $(".lower-slide-right");
			// const lowerContainerOffset = $(".lower-slide-container").offset().top;

	  //       lowerSlideRight.each( function(i){
	            
	  //           // var bottom_of_object = $(this).position().top + $(this).outerHeight();
	  //           // var bottom_of_window = $(window).scrollTop() + $(window).height();

	  //           // console.log( bottom_of_object, "********", bottom_of_window);
	            
	  //           /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
	  //           // bottom_of_window = bottom_of_window + 200;  
	          
	  //           if( scrolled > lowerContainerOffset/2 ){
	                
	  //               $(this).animate({'opacity':'1'},500);
	                    
	  //           }
	  //       }); 
	    
	  //   });
	}

}

function init() {
	new Parallax();
}

document.addEventListener("DOMContentLoaded", function() {
  init();
}, false);

// function parallax(){
   // const scrolled = $(window).scrollTop();
   // const mainImage = $(".main-image");
   // const lowerContainer = $(".lower-slide-container");
   // const lowerContainerOffset = lowerContainer.offset().top;
   // const lowerContainerHeight = lowerContainer.height();

   // 	const topChange = 100/lowerContainerHeight;
   // 	const leftChange = -(29/lowerContainerHeight);

   // const checkWinWidth = window.innerWidth;

 //   	if (scrolled <= lowerContainerHeight) {
	//     mainImage.css("top", scrolled * topChange + "%");
	//    // mainImage.css("left",  50 + scrolled * leftChange + "%");

	//     if (checkWinWidth < 768 ) {
	//     	mainImage.css("top", 25 + (scrolled * topChange) + "%");
	//     }

 //   		if (checkWinWidth > 1080) {
 //   			mainImage.css("left",  50 + scrolled * leftChange + "%");
 //   		}
 //   		else {
 //   			mainImage.css("left",  50 + "%");
 //   			if (parseInt(mainImage[0].style.top) > 50 && checkWinWidth < 1081) {
	// 	      mainImage.css("opacity", .4);
	// 		}
	// 		else {
 //   				mainImage.css("opacity", 1);				
	// 		}
 //   		};
	// }
	// if (parseInt(mainImage[0].style.left) < 27 && checkWinWidth < 1081) {
	// 	console.log("hello");
	// 	mainImage.css("opacity", .4);
	// }
	// else {
	// 	mainImage.css("opacity", 1);
	// }

// }

// $(window).scroll(function(e){
//     parallax();
// });

// $(window).resize(function() {
// 	const scrolled = $(window).scrollTop();
// 	const checkWinWidth = window.innerWidth;
// 	const mainImage = $(".main-image");	
// 	const lowerContainer = $(".lower-slide-container");
// 	const lowerContainerHeight = lowerContainer.height();
//    	const topChange = 100/lowerContainerHeight;
//    	const leftChange = -(29/lowerContainerHeight);
// 	if (checkWinWidth < 768) {
// 		mainImage.css("top", 25 + scrolled * topChange + "%");
// 	}
// 	if (checkWinWidth > 767) {
// 		mainImage.css("top", scrolled * topChange + "%"); 
// 		mainImage.css("left",  50 + scrolled * leftChange + "%");
// 		mainImage.css("opacity", 1);
// 	}
// 	if (checkWinWidth > 767 && checkWinWidth < 1081) {
// 		mainImage.css("left",  50 + "%");
// 	}
// 	if (parseInt(mainImage[0].style.top) > 50 && checkWinWidth < 1081) {
// 		mainImage.css("opacity", .4);		
// 	}
// 	else {
// 		mainImage.css("opacity", 1);	
// 	}
// });

