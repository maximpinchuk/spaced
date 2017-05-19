// Fors validation script



// Secret code
var secretCode = 'code';
var codeStore = JSON.stringify(secretCode);

function showError(container, errorMessage) {
	container.className = 'form__input-block error';
	var msgElem = document.createElement('span');
	msgElem.className = 'error';
	msgElem.innerHTML = errorMessage;
	container.appendChild(msgElem);
}

function resetError(container) {
	container.className = 'form__input-block has-label';
	if (container.lastChild.className == 'error') {
		container.removeChild(container.lastChild);
	}
}

function validate(form) {
	var elems = form.elements;
	var formId = form.classList;
	var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	resetError(elems.name.parentNode);
	if (!elems.name.value) {
		showError(elems.name.parentNode, 'Заполните поле');
	}

	if (!formId.contains('subscribe-form')) {
		resetError(elems.tel.parentNode);
		if (!elems.tel.value) {
			showError(elems.tel.parentNode, 'Заполните поле');
		}
	}

	resetError(elems.email.parentNode);
	if (!elems.email.value) {
		showError(elems.email.parentNode, 'Заполните поле');
	} else if(!elems.email.value.match(emailRegExp)) {
		showError(elems.email.parentNode, 'Укажите корректный e-mail');
	}

	if (formId.contains('vacancy-form')) {
		resetError(elems.msg.parentNode);
		if (!elems.msg.value) {
			showError(elems.msg.parentNode, 'Заполните поле');
		}
	}

	if($('#code').length) {
		resetError(elems.code.parentNode);
		elems.code.parentNode.classList.remove('has-label');
		if (elems.code.value != 0 && elems.code.value != secretCode) {
			showError(elems.code.parentNode, 'Не угадал');
			elems.code.parentNode.classList.add('has-label');
		} else if (elems.code.value === localStorage.codeStore) {
			showError(elems.code.parentNode, 'Второй раз не прокатит');
			elems.code.parentNode.classList.add('has-label');
		}
	}
}