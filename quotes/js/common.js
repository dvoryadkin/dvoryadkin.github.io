// Animate CSS + WayPoints
$(".main__text").animated("fadeInDown", "fadeOutUp");
$(".desc__heading").animated("fadeInDown", "fadeOutDown");
$(".desc__heading-bottom").animated("fadeInUp", "fadeOutDown");
$(".desc__details").animated("fadeInUp", "fadeOutDown");
$(".desc__text").animated("fadeIn", "fadeOut");

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

// Slider
$(document).ready(function(){
	$('.customers__slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
	});
});