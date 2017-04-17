// Fors validation script



function validate() {
	var form = document.getElementById('contact__form');
	var validateElement = $('.input-block__input');
	var elLength = validateElement.length;

	if(elLength == 0) {
		alert('Fuck');
	}
}