<?php

$recepient = "m.pinchuk1995@gmail.com";
$sitename = "Conversational form";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["msg"]);
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
			<p><b>Email:</b> $email</p>
			</br>
			<p><b>Услуги:</b> $check</p>
			</br>
			<p><b>Сообщение:</b> $msg</p>
		</body> 
	</html>
";

$pagetitle = "Conversational form \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>