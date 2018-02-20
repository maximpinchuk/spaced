// Forms handler



// $("#tel").mask("+375 (99) 999 99 99");
$(".tel-input").mask("+375 (99) 999 99 99");



// Response function
var addResponse = function(form, type, position, message) {
	var responseBlock = document.createElement('div');
	responseBlock.classList.add('response-block');
	responseBlock.classList.add(position);

	var responseText = document.createElement('span');
	if (type == 'success') {
		responseText.classList.add('success');
	} else if (type == 'error') {
		responseText.classList.add('error');
	}
	responseText.classList.add('response-block__response');
	responseText.innerHTML = message;

	responseBlock.appendChild(responseText);
	form.append(responseBlock);
}



// Main page form
$('#mainpage__form').submit(function(e) {
	e.preventDefault();

	// localStorage.setItem('codeStore', secretCode);
	var formEl = $(this);

	if (!$('.form__input-block').hasClass('error')) {
		$.ajax({
			type: 'POST',
			url: '../php/form-contact.php',
			data: formEl.serialize()
		}).done(function() {
			localStorage.setItem('codeStore', secretCode);
			formEl.trigger('reset');
			$('.form__input-block').removeClass('has-label');
			addResponse(formEl, 'success', 'center', 'Форма успешно отправлена.');
		}).fail(function() {
			addResponse(formEl, 'error', 'center', 'При отправке формы произошла ошибка.');
		});
	}
});



// Vacancy form
if ($('#vacancy__form').length) {
	document.getElementById('vacancy__form').addEventListener('submit', function(e) {
		e.preventDefault();

		if (!$('.form__input-block').hasClass('error')) {
			var http = new XMLHttpRequest(), 
				f = this;

			// Вставить сюда код вывода спиннера
			$('.form-loader').css({
				display: 'flex'
			});

			http.open("POST", "../php/form-vacancy.php", true);
			http.onreadystatechange = function() {
				if (http.readyState == 4 && http.status == 200) {
					f.name.removeAttribute('value');
					f.name.value='';
					f.tel.removeAttribute('value');
					f.tel.value='';
					f.email.removeAttribute('value');
					f.email.value='';
					f.msg.removeAttribute('value');
					f.msg.value='';
					// document.f.reset();
					// f.getElementsByClassName('form__input-block').classList.remove('has-label');
					// f.getElementsByClassName('file-input__wrapper').classList.remove('selected');
					// f.getElementsByClassName('file-input__label').innerHTML = 'прикрепить резюме';
					$('.form__input-block').removeClass('has-label');
					$('.file-input__wrapper').removeClass('selected');
					$('.file-input__label').text('прикрепить резюме');
					$('.form-loader').css({
						display: 'none'
					});
					addResponse(f, 'success', 'left', 'Форма успешно отправлена.');
				}
		  	}
			http.onerror = function() {
				addResponse(f, 'error', 'left', 'При отправке формы произошла ошибка.');
			}
			http.send(new FormData(f));
		}
	}, false);
}


// Contact page form
$('#contacts__form').submit(function(e) {
	e.preventDefault();

	var formEl = $(this);

	if (!$('.form__input-block').hasClass('error')) {
		$.ajax({
			type: 'POST',
			url: '../php/form-contacts.php',
			data: formEl.serialize()
		}).done(function() {
			formEl.trigger('reset');
			$('.form__input-block').removeClass('has-label');
			addResponse(formEl, 'success', 'left', 'Форма успешно отправлена.');
		}).fail(function() {
			addResponse(formEl, 'error', 'left', 'При отправке формы произошла ошибка.');
		});
	}
});



// Subscribe form
$('#subscribe__form').submit(function(e) {
	e.preventDefault();

	var formEl = $(this);

	if (!$('.form__input-block').hasClass('error')) {
		$.ajax({
			type: 'POST',
			url: '../php/form-subscribe.php',
			data: formEl.serialize()
		}).done(function() {
			formEl.trigger('reset');
			$('.form__input-block').removeClass('has-label');
			addResponse(formEl, 'success', 'left', 'Форма успешно отправлена.');
		}).fail(function() {
			addResponse(formEl, 'error', 'left', 'При отправке формы произошла ошибка.');
		});
	}
});



// Conversational form init
var ConversationalFormDocs = (function () {
	function ConversationalFormDocs() {
		this.el = document.querySelector("main.content");
		this.introFlow2();
	}
	ConversationalFormDocs.prototype.introFlow2 = function () {
		var _this = this;
		document.querySelector("section[role='form']").classList.add('show');
		document.getElementById("cf-toggle-btn").classList.add('show');
		_this.toggleConversation();
	};
	ConversationalFormDocs.prototype.toggleMenuState = function () {
		var open = this.el.classList.toggle('menu-toggle', !this.el.classList.contains('menu-toggle'));
		if (open) {
			this.el.classList.remove('cf-toggle');
		}
		return false;
	};
	ConversationalFormDocs.prototype.toggleConversation = function () {
		var _this = this;
		if (!this.el.classList.contains('cf-toggle')) {
			if (!this.cf) {
				this.cf = new window.cf.ConversationalForm({
					formEl: document.getElementById("cf-form"),
					context: document.getElementById("cf-context"),
					robotImage: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzY0LjAwMDAwMCwgLTUzMC4wMDAwMDApIiBmaWxsPSIjMjIyMjIyIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUzLjAwMDAwMCwgNTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgeD0iMTEiIHk9IjExIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
					submitCallback: function () {
					},
					flowStepCallback: function (dto, success, error) {
						if (dto.tag.domElement) {
							if (dto.tag.domElement.getAttribute("name") == "repeat") {
								location.reload();
							}
							else if (dto.tag.domElement.getAttribute("name") == "msg") {
								var xhr = new XMLHttpRequest();
								xhr.addEventListener("load", function () {
									_this.cf.addRobotChatResponse("Форма успешно заполнена 🙌");
									success();
								});
								xhr.open('POST', document.getElementById("cf-form").getAttribute("action"));
								xhr.setRequestHeader("accept", "application/javascript");
								xhr.setRequestHeader("Content-Type", "application/json");
								xhr.send(JSON.stringify(_this.cf.getFormData(true)));
							}
							else {
								success();
							}
						}
						else {
							success();
						}
					}
				});
			}
			this.cf.focus();
			setTimeout(function () {
				_this.el.classList.remove('menu-toggle');
				_this.el.classList.add('cf-toggle');
			}, 0);
		}
		else {
			this.el.classList.remove('cf-toggle');
		}
		return false;
	};
	ConversationalFormDocs.start = function () {
		if (!ConversationalFormDocs.instance)
			window.conversationalFormDocs = new ConversationalFormDocs();
	};
	return ConversationalFormDocs;
}());
if (document.readyState == "complete") {
	// if document alread instantiated, usually this happens if Conversational Form is injected through JS
	ConversationalFormDocs.start();
}
else {
	// await for when document is ready
	window.addEventListener("load", function () {
		ConversationalFormDocs.start();
	}, false);
}