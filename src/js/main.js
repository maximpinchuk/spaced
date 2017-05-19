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
	setTimeout(function(){
		$('.pace').remove();
		$('.pace__substrate').remove();
	}, 3000);
});



//= vendors/pagepiling.js
//= vendors/maskedinput.min.js
//= vendors/conversational-form.js
//= vendors/in-view.min.js

//= vendors/ScrollMagic.js

//= controllers/scrollAnimations.js
//= controllers/formsValidation.js
//= controllers/formsHandler.js
//= controllers/pageChange.js



$(document).ready(function() {

	// document.oncontextmenu = function(e) {
	// 	e.preventDefault();
	// }

	// alert(navigator.userAgent);

	if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/Trident/i) ){
	    $('html').addClass('ie--support');
	    document.activeElement.blur();
	}

	var bodyHeight = function() {
		var headerElement = document.getElementById('header');
		var contentElement = document.getElementById('content');
		var footerElement = document.getElementById('footer');

		var headerHeight = headerElement.clientHeight;
		var contentHeight = contentElement.clientHeight;
		var footerHeight = footerElement.clientHeight;

		var totalHeight = headerHeight + contentHeight + footerHeight;

		$('body').css({
			height: totalHeight
		});
	}
	bodyHeight();

	

	// if (window.clienWidth <= 992) {
	// 	var headerHeight = document.getElementById('header').clientHeight;
	// 	var contentHeight = document.getElementById('content').clientHeight;
	// 	var footerHeight = document.getElementById('footer').clientHeight;

	// 	var totalHeight = headerHeight + contentHeight + footerHeight;

	// 	$('body').css({
	// 		height: totalHeight
	// 	});

	// 	document.onresize = function() {
	// 		var headerHeight = document.getElementById('header').clientHeight;
	// 		var contentHeight = document.getElementById('content').clientHeight;
	// 		var footerHeight = document.getElementById('footer').clientHeight;

	// 		var totalHeight = headerHeight + contentHeight + footerHeight;

	// 		$('body').css({
	// 			height: totalHeight
	// 		});
	// 	}
	// }



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
		if ($('.header__communication-block').length && document.body.clientWidth >= 992) {
			$('.header__communication-block').fadeOut(200);
		};
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



	// Открытие основного меню при клике на гамбургер
	$('.nav-icon').click(function() {
		if ($(this).hasClass('on')) {
			menuOpen();
		} else if ($(this).hasClass('off')) {
			menuClose();
		}
	});



	// Открытие формы
	function chatFormOpen() {
		$('.header__logo').fadeOut(200);
		$('.nav-icon').fadeOut(200);
		$('.chatForm--close').addClass('open');
		if ($('.header__communication-block').length && document.body.clientWidth >= 992) {
			$('.header__communication-block').fadeOut(200);
		};
		$('body').css({
			overflow: 'hidden'
		});
		$('html').addClass('overflow-hidden');
		// $('.chatForm__substrate').addClass('open');
		$('#conversational-form-docs').addClass('open');
	}

	// Закрытие формы
	function chatFormClose() {
		$('.header__logo').fadeIn(300);
		$('.nav-icon').fadeIn(300);
		$('.chatForm--close').removeClass('open');
		if ($('.header__communication-block').length && document.body.clientWidth >= 992) {
			$('.header__communication-block').fadeIn(300);
		};
		$('body').css({
			overflow: 'auto'
		});
		$('html').removeClass('overflow-hidden');
		// $('.chatForm__substrate').removeClass('open');
		$('#conversational-form-docs').removeClass('open');
	}

	$('.conversational-form__open').click(function() {
		chatFormOpen();
	});

	$('.chatForm--close').click(function() {
		chatFormClose();
	});



	// Services bg hover behaviour
	function servicesBgChange() {
		if (document.body.clientWidth >= 992) {
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
		}
	}
	servicesBgChange();

	window.addEventListener('resize', function() {
		servicesBgChange();
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
                // $('.scissors__line').addClass('firstAnim'); // первый шаг анимации линии разреза
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
                    // $('.scissors__line').hide(); // Удалять линию разреза после анимации
                    // $('.surprise-block').addClass('active');
                    $('.surprise-block').slideDown();
                    bodyHeight();
                });
                // $('.scissors__line').addClass('secondAnim'); // Второй шаг анимации линии разреза
                $('.surprise-block_audio')[0].play();
                break;
            default:
                console.log('End of animation');
                break;
        }
    });





    // Vacancy form opened function
	$('.vacancy__card').on('click', function() {
		$('#vacancy_' + $(this).attr('data-number')).addClass('opened');
		$('html').css({
			overflow: 'hidden'
		});
		// alert(window.location.hash);
	});

    $('.vacancy-popup__close').on('click', function() {
    	$('.vacancy__popup').removeClass('opened');
    	$('html').css({
			overflow: 'auto'
		});
    });



    // Subscribe form opened function
	$('.subscribe__btn').on('click', function() {
		$('.subscribe-popup').addClass('opened');
		$('html').css({
			overflow: 'hidden'
		});
		// alert(window.location.hash);
	});

    $('.subscribe-popup__close').on('click', function() {
    	$('.subscribe-popup').removeClass('opened');
    	$('html').css({
			overflow: 'auto'
		});
    });



    // get the name of uploaded file
	$('input[type="file"]').change(function(){
		var value = $("input[type='file']").val();
		var fileName = value.replace(/^.*[\\/]/, '');
		$('.file-input__label').text(fileName);
		$('.file-input__wrapper').addClass('selected');
	});

});