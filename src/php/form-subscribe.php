<?php

$recepient = "m.pinchuk1995@gmail.com";
$sitename = "spaced.by";
$headers = "Content-type: text/html; charset=\"utf-8\"\n From: $recepient";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$body = "
	<html>
		<body> 
			<h3>Данные лида</h3>
			</br>
			<p><b>Имя:</b> $name</p>
			</br>
			<p><b>Email:</b> $email</p>
		</body> 
	</html>
";

$pagetitle = "Заявка на подписку \"$sitename\"";
mail($recepient, $pagetitle, $body, $headers);
?>