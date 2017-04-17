//= vendors/jquery.js
//= vendors/pace.js

// Preloader
Pace.on('done', function() {
	setTimeout(function() {
		$('.pace').css({
	    	transform: 'translateY(-100%)'
	    });
	    $('.pace__substrate').css({
	    	transform: 'translateY(-100%)'
	    });
	    $('body').addClass('page--loaded');
	    $('header').addClass('header--loaded');
	}, 2000);
});


//= vendors/jquery.mousewheel.js
//= vendors/pagepiling.js
//= vendors/swiper.min.js
//= vendors/wow.js

//= vendors/scrollMonitor.js
//= vendors/scrollParallax.js

//= vendors/ScrollMagic.js
//= vendors/animation.gsap.js
//= vendors/debug.addIndicators.js

//= controllers/scrollAnimations.js
//= controllers/formsValidation.js
//= controllers/formsHandler.js
//= controllers/pageChange.js



$(document).ready(function() {



	// Анимация при скролле
	function wowInit() {
		var bodyWidth = document.body.clientWidth;
		wow = new WOW({
			boxClass: 'animation__block',
			animateClass: 'animated',
			offset: 0,
			mobile: false
		});
		if (bodyWidth >= 992) {
			wow.init();
		}
	}
	wowInit();



	// Проверка на наличие элемента на странице для плагина
	if($('#pagepilling').length) {
		$('#pagepiling').pagepiling({});
	}



	// Анимация при наведении на кнопку
	function btnHover() {
		$('.btn-js').mouseenter(function() {
			$(this).removeClass('off');
			$(this).addClass('on');
		});
		$('.btn-js').mouseleave(function() {
			$(this).addClass('off');
			$(this).removeClass('on');
		});
	}
	btnHover();



	// Трансформация икноки меню при клике и открытие меню
	(function () {
		var menuIcon;
		menuIcon = document.querySelector('.nav-icon');
		menuIcon.addEventListener('click', function () {

			if ($('.nav-icon').hasClass('off')) {
				menuIcon.classList.add('on');
				menuIcon.classList.remove('off');    
			} else if ($('.nav-icon').hasClass('on')) {
				menuIcon.classList.add('off');
				menuIcon.classList.remove('on');
			}
			
		});
	}.call(this));



	// Функция открытия меню
	function menuOpen() {
		$('.menu').addClass('menu--open');
		$('.menu__substrate').removeClass('menu__substrate--closed');
		$('.menu__content').removeClass('menu__content--closed');
		$('.menu__substrate').addClass('menu__substrate--opened');
		$('.menu__content').addClass('menu__content--opened');
		$('html').addClass('overflow-hidden');
		$('.header__logo').fadeOut(200);
		$('.header__communication-block').fadeOut(200);
		$('body').css({
			overflow: 'hidden'
		});
	}



	// Функция закрытия меню
	function menuClose() {
		$('.menu').removeClass('menu--open');
		$('.menu__substrate').removeClass('menu__substrate--opened');
		$('.menu__content').removeClass('menu__content--opened');
		$('.menu__substrate').addClass('menu__substrate--closed');
		$('.menu__content').addClass('menu__content--closed');
		$('html').removeClass('overflow-hidden');
		$('.header__logo').fadeIn(300);
		if ($('.header__communication-block').length && document.body.clientWidth >= 992) {
			$('.header__communication-block').fadeIn(300);
		};
		$('body').css({
			overflow: 'auto'
		});
	}



	$('.services__item.item--1').mouseenter(function() {
		$('.bg__container.bg--1').fadeIn(400);
		$('.bg__container.bg--2').css({
			zIndex: '-1'
		});
	});
	$('.services__item.item--2').mouseenter(function() {
		$('.bg__container.bg--2').fadeIn(400);
		$('.bg__container.bg--2').css({
			zIndex: '1'
		});
	});



	// Открытие основного меню при клике на гамбургер
	$('.nav-icon').click(function() {
		if ($(this).hasClass('on')) {
			menuOpen();
		} else if ($(this).hasClass('off')) {
			menuClose();
		}
	});

	

	// Swiper init (portfolio)
	var swiper = new Swiper('.swiper-container', {
		freeMode: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		grabCursor: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			640: {
				freeMode: false
			}
		}
	});



	// Smooth scroll
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 800);
		return false;
	});



	// Input material onfocus effect
	$('.input-block__input').focus(function() {
    	$(this).parent().addClass('is-focused has-label');
	});

	$('.input-block__input').blur(function() {
		var $parent = $(this).parent();
		if ($(this).val() == '') {
			$parent.removeClass('has-label');
		}
		$parent.removeClass('is-focused');
	});



	// Scissors animation
	var k = 0;
    $('.scissors').click(function() {
        k += 1;
        switch(k) {
            case 1:
                $('.st1').addClass('isAnim');
                $('.st2').addClass('isAnim'); 
                $('.scissors').animate({
                    left: '49%'
                }, 1500, "linear", function() {
                    $('.st1').removeClass('isAnim');
                    $('.st2').removeClass('isAnim');
                });
                $('.scissors__line').addClass('firstAnim'); // первый шаг анимации линии разреза
                break;
            case 2: 
                $('.st1').addClass('isAnim');
                $('.st2').addClass('isAnim');
                $('.scissors').animate({
                    left: '101%'
                }, 1500, "linear", function() {
                    $('.st1').removeClass('isAnim');
                    $('.st2').removeClass('isAnim');
                    // Вставить сюда функцию, вызывающую открытие блока
                    // с акцией и удаляющую ножницы
                    $('.scissors').hide();
                    $('.scissors__line').hide(); // Удалять линию разреза после анимации
                    $('.surprise-block').addClass('active');
                });
                $('.scissors__line').addClass('secondAnim'); // Второй шаг анимации линии разреза
                $('.surprise-block_audio')[0].play();
                break;
            default:
                console.log('End of animation');
                break;
        }
    });

});