function DonateSection() {
	this.activateHeader();
	this.activateBtn();
	this.updateDonateInfo();
}

DonateSection.prototype = {

	constructor: DonateSection,

	activateHeader: function() {
		const headers = ".section-4 h1.selection";
		$("body").on("click", headers, function() {
			$(this).addClass("header-active");
			$(this).siblings("h1").removeClass("header-active");
		});
	},

	activateBtn: function() {
		const donateBtns = ".section-4 .donation-buttons label";
		$("body").on("click", donateBtns, function() {
			$(this).addClass("active");
			$(this).siblings("label").removeClass("active");
		});
	},

	updateDonateInfo: function() {

		const donationButtons = "form .donation-buttons input";
		$("body").on("click", donationButtons, function() {
				const donatePlaceholder = $("#donation-form #donation");
				if ( this.value === "option1" ) {
					donatePlaceholder.attr("placeholder", "$25.00/month")
				}		
				if ( this.value === "option2" ) {
					donatePlaceholder.attr("placeholder", "$50.00/month")
				}		
				if ( this.value === "option3" ) {
					donatePlaceholder.attr("placeholder", "$100.00/month")
				}
		});
	}

}

function init() {
	new DonateSection();
}

document.addEventListener("DOMContentLoaded", function() {
	init();
}, false);
