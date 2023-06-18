<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require 'vendor/autoload.php';
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true); // Параметр 'true' разрешает модель исключений
    try {
      $email = $_POST['email'];
      $message = $_POST['notes'];
      $mail->isSMTP();
      $mail->Host = 'smtp.yandex.ru';// вместо Yandex указываем свою почту
      $mail->SMTPAuth = true;
      $mail->Username = ''; // Логин почты
      $mail->Password = ''; // Пароль
      $mail->SMTPSecure = 'TLS'; // Включение шифрования TLS, как вариант можно 'ssl'
      $mail->Port = 587; // TCP-порт, для Яндекса работает именно такой 587
  
      // Получатели
      $mail->setFrom($_POST['email'], $_POST['name']);// Получатель
      $mail->addAddress('');// Отправитель(почта компании)

      // Контент письма
      $mail->CharSet = 'UTF-8'; // Кодировка для всех текстов
      $mail->isHTML(true); // Включение HTML-формата
      $mail->Subject = 'СustomCraft';
      $mail->Body = "<h1>Email: $email</h1><br><h2> Сообщение: $message</h2>";
  
      // Отправка
      $mail->send();
      header("page1.html");
      die();
      echo 'Письмо отправлено';
  
    } catch (Exception $e) {
      echo $mail->ErrorInfo;   
      header("page1.html");
      die();
    }
  }
?>
