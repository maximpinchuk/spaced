// Scroll animations



function animationsInit() {
	var bodyWidth = document.body.clientWidth;

	// Set main cobtroller for ScrollMagic
	var controller = new ScrollMagic.Controller();


	// Mainpage portfolio animation
	if ($('#case1').length) {
		if(bodyWidth <= 992) {
			var fadeInCase1 = new ScrollMagic.Scene({
				triggerElement: '#case1',
				triggerHook: 0.8
			})
			.setClassToggle('#case1', 'animated')
			.addTo(controller);
			fadeInCase1.on('enter', function() {
				$('.main--content').css({
					background: '#7d6ade'
				});
			});
			fadeInCase1.on('leave', function() {
				$('.main--content').css({
					background: '#fff'
				});
			});
		} else {
			var fadeInCase1 = new ScrollMagic.Scene({
				triggerElement: '#case1',
				triggerHook: 0.2
			})
			.setClassToggle('#case1', 'animated')
			.addTo(controller);
			fadeInCase1.on('enter', function() {
				$('.main--content').css({
					background: '#7d6ade'
				});
			});
			fadeInCase1.on('leave', function() {
				$('.main--content').css({
					background: '#fff'
				});
			});
		}
	}


	// Contacts page background change animation (on http://spaced.by/contacts)
	if ($('#form-block').length) {
		var fadeInCase2 = new ScrollMagic.Scene({
			triggerElement: '#form-block',
			triggerHook: 0.5
		})
		.setClassToggle('#form-block', 'animated')
		.addTo(controller);
		fadeInCase2.on('enter', function() {
			$('.main--content').css({
				background: '#f9f9f9'
			})
		});
		fadeInCase2.on('leave', function() {
			$('.main--content').css({
				background: '#ffffff'
			})
		});
	}



	// Mainpage common block animation
	if ($('.common').length) {
		var bgMainContenainerColorChange = new ScrollMagic.Scene({
			triggerElement: '.common',
			triggerHook: 0.7
			// reverse: false
		})
		.addTo(controller);
		bgMainContenainerColorChange.on('enter', function() {
			$('.main--content').css({
				background: '#f9f9f9'
			});
		});
		bgMainContenainerColorChange.on('leave', function() {
			$('.main--content').css({
				background: '#7d6ade'
			});
		});

		var fadeInCommonTitle = new ScrollMagic.Scene({
			triggerElement: '.common',
			triggerHook: 0.4
			// reverse: false
		})
		.setClassToggle('.common', 'animated')
		.addTo(controller);
	}



	// Portfolio text animation
	if (bodyWidth >= 992) {
		// Header pin
		if($('.header').length) {
			var scene = new ScrollMagic.Scene({
			    triggerElement: '#main-content__trigger',
			    triggerHook: 'onEnter'
	  		})
			.setClassToggle('.main--content', 'is-relative')
			.addTo(controller);
		}



		// Mainpage about us text animation 
		if ($('#about').length) {
			var fadeInAboutus = new ScrollMagic.Scene({
				triggerElement: '#about',
				triggerHook: 0.5
				// reverse: false
			})
			.setClassToggle('#about .animation__block', 'animated')
			.addTo(controller);
		}



		// Mainpage services block animation
		if ($('#services').length) {
			var fadeInServices = new ScrollMagic.Scene({
				triggerElement: '#services',
				triggerHook: 0.8
				// reverse: false
			})
			.setClassToggle('#services', 'animated')
			.addTo(controller);
			// fadeInServices.on('enter', function() {
			// 	setTimeout(function() {
			// 		$('.services__item__container .item__descr').css({
			// 			display: 'block'
			// 		});
			// 	}, 2500);
			// });
		}

		var AnimateExcerpts = function() {
		  
			var excerpts,
				excerptsInner;

			var _init = function() {
				excerpts = document.querySelectorAll('.case__container');
				excerpts = Array.prototype.slice.call(excerpts);
				_addEventHandlers();
				_inView();
			}
		  
			var _addEventHandlers = function() {
				window.addEventListener('scroll', _inView, false);
				window.addEventListener('resize', _inView, false);
			}
		  
			var _inView = function() {   
				excerpts.forEach(function(element,index) {
					_animateInOut(element, index);
				});
			}
		  
			var _animateInOut = function(element, index) {
				var inner               = element;      
				var pos                 = element.getBoundingClientRect();
				var elHeight            = pos.height;
				var elBottomFromTop     = pos.bottom;
				var elTopFromTop        = pos.top;
				var elTopFromBottom     = pos.top - window.innerHeight;
				var elBottomFromBottom  = pos.bottom - window.innerHeight;

				if( elTopFromTop <= elHeight - 100 && elTopFromTop >= -250 ) {
			  		inner.classList.add('animated');
				} else {
					inner.classList.remove('animated');
				}
		  	} 
		  	return {
				init: _init
		  	}
		}();
		AnimateExcerpts.init();

		// inView.offset(300);

		// inView('.anim__block')
		// 	.on('enter', el => el.classList.add('animated'));

		// inView('.anim__img')
		// 	.on('enter', el => el.classList.add('animated'));

		inView('.anim__block')
			.on('enter', function(el) {
				el.classList.add('animated');
			});

		inView('.anim__img')
			.on('enter', function(el) {
				el.classList.add('animated');
			});
	}
}
animationsInit();

// On window size change event function
window.addEventListener('resize', function() {
	animationsInit();
});