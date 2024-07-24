(function ($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - 54
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.navbar-collapse').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 56
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($('#mainNav').offset().top > 100) {
			$('#mainNav').addClass('navbar-shrink');
		} else {
			$('#mainNav').removeClass('navbar-shrink');
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);


	// EDONI
	// use plugins and options as needed, for options, detail see
	// http://i18next.com/docs/
	i18next.init({
		lng: 'EN', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
		resources: window.translations
	}, function (err, t) {
		jqueryI18next.init(i18next, $);
		$('.i18n').localize();
		$('.lang-select').click(function () {
			i18next.changeLanguage(this.innerHTML, function () {
				$('.i18n').localize();
			})
		});
	});

})(jQuery); // End of use strict


AOS.init({
	easing: 'ease-out-back',
	duration: 1400,
	delay: 300,
});

