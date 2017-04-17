// Scroll animations



var bodyWidth = document.body.clientWidth;

if (bodyWidth >= 992) {

	// Set main cobtroller for ScrollMagic
	var controller = new ScrollMagic.Controller();



	// Header pin
	var pinHeader = new ScrollMagic.Scene({
		tweenChanges: true,
		triggerElement: '#header',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#header', {pushFollowers: false})
	.addTo(controller);



	// Mainpage about us text animation 
	if ($('#about').length) {
		var fadeInAboutus = new ScrollMagic.Scene({
			triggerElement: '#about',
			triggerHook: 0.5,
			reverse: false
		})
		.setClassToggle('#about .animation__block', 'animated')
		.addTo(controller);
	}



	// Mainpage services block animation
	if ($('#services').length) {
		var fadeInServices = new ScrollMagic.Scene({
			triggerElement: '#services',
			triggerHook: 0.8,
			reverse: false
		})
		.setClassToggle('#services', 'animated')
		.addTo(controller);
		fadeInServices.on('enter', function() {
			setTimeout(function() {
				$('.services__item__container .item__descr').css({
					display: 'block'
				});
			}, 2500);
		});
	}



	// Mainpage portfolio animation
	if ($('#portfolio').length) {

		// Portfolio animation
		var fadeInPortfolio = new ScrollMagic.Scene({
			triggerElement: '#portfolio',
			triggerHook: 0.7,
			reverse: false
		})
		.setClassToggle('.swiper-slide', 'anim')
		.addTo(controller);

		// Portfolio pin
		var pinPortfolio = new ScrollMagic.Scene({
			triggerElement: '#portfolio',
			triggerHook: 0,
			duration: '0'
		})
		.setPin('#portfolio', {pushFollowers: false})
		.addTo(controller);
	}

	// Mainpage common block animation
	if ($('.common').length) {
		var fadeInCommonLines = new ScrollMagic.Scene({
			triggerElement: '.common',
			triggerHook: 0.6,
			reverse: false
		})
		.setClassToggle('.contact__lines', 'animated')
		.addTo(controller);

		var fadeInCommonTitle = new ScrollMagic.Scene({
			triggerElement: '.common',
			triggerHook: 0.7,
			reverse: false
		})
		.setClassToggle('.common', 'animated')
		.addTo(controller);
	}

}