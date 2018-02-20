<?php

$recepient = "m.pinchuk1995@gmail.com";
$sitename = "spaced.by";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$code = trim($_POST["code"]);
$msg = trim($_POST["msg"]);
$check = '';
if (!empty($_POST["check"]) && is_array($_POST["check"]))
{
    $check = implode(" ", $_POST["check"]);
}
$body = "
	<html>
		<body> 
			<h3>Данные лида</h3>
			</br>
			<p><b>Имя:</b> $name</p>
			</br>
			<p><b>Телефон:</b> $tel</p>
			</br>
			<p><b>Email:</b> $email</p>
			</br>
			<p><b>Секретный код:</b> $code</p>
			</br>
			<p><b>Услуги:</b> $check</p>
			</br>
			<p><b>Сообщение:</b> $msg</p>
		</body> 
	</html>
";

$pagetitle = "Главная форма \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>