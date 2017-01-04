function DonateSection() {
	this.activateHeader();
	this.activateBtn();
	this.updateDonateInfo();
}

DonateSection.prototype = {

	constructor: DonateSection,

	activateHeader: function() {
		const headers = ".section-4 .selection-container";
		$("body").on("click", headers, function() {
			$(this).addClass("selection-active");
			$(this).siblings().removeClass("selection-active");
		});
	},

	activateBtn: function() {
		const donateBtns = ".section-4 .donation-buttons label";
		$("body").on("click", donateBtns, function() {
			$(this).addClass("active");
			$(this).parent().siblings().children("label").removeClass("active");
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
