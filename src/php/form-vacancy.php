<?php
if (isset ($_POST['email'])) {
  $to = "m.pinchuk1995@gmail.com"; // поменять на свой электронный адрес
  $from = $_POST['email'];
  $subject = "Заполнена контактная форма с ".$_SERVER['HTTP_REFERER'];
  $message = "Вакансия: ".$_POST['vacancy']."\nИмя: ".$_POST['name']."\nТелефон: ".$_POST['tel']."\nEmail: ".$from."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['msg'];
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
     if(is_uploaded_file($_FILES['file-cv']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file-cv']['tmp_name'])));
         $filename = $_FILES['file-cv']['name'];
         $filetype = $_FILES['file-cv']['type'];
         $filesize += $_FILES['file-cv']['size'];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
   }
   $message.="
--$boundary--";

  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    // echo $_POST['name'].', Ваше сообщение получено, спасибо!';
  } else {
    // echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
?>