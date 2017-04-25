// E-mail Ajax Send
// Documentation & Example: https://github.com/agragregra/uniMail
$(function() {
$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Animate CSS + WayPoints
// Example: $(".element").animated("zoomInUp", "zoomOutDown");




// Menu button animation
var menu = {
	el: {
		ham: $('.menu__button'),
		menuTop: $('.menu__button-top'),
		menuMiddle: $('.menu__button-middle'),
		menuBottom: $('.menu__button-bottom'),
		menuText: $('.menu__button-text')
	},
	init: function() {
		menu.bindUIactions();
	},
	bindUIactions: function() {
		menu.el.ham
		.on(
			'click',
			function(event) {
				menu.activateMenu(event);
				event.preventDefault();
			});
	},
	activateMenu: function() {
		menu.el.menuTop.toggleClass('menu-top-click');
		menu.el.menuMiddle.toggleClass('menu-middle-click');
		menu.el.menuBottom.toggleClass('menu-bottom-click'); 
		menu.el.menuText.toggleClass('menu-text-click'); 
	}
};
menu.init();



// Show/hide menu
$(".menu__button").click(function() {
	if ($(".main__overlay").is(":visible")) {
		$(".main__overlay").fadeOut(600);
	} else {
		$(".main__overlay").fadeIn(600);
	};
});


$(document).ready(function(){
	$('.customers__slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,

	});
});