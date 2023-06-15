<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $mail = new PHPMailer(true);
  try {
    // Настройка SMTP
    $email = $_POST['email'];
    $message = $_POST['notes'];
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';//SMTP-почты
    $mail->SMTPAuth = true;
    $mail->Username = '';//Почта
    $mail->Password = '';//Пароль от почты
    $mail->SMTPSecure = 'TSL';
    $mail->Port = 587;

    // Получатель и отправитель
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('www-pain@yandex.ru');

    // Контент письма
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = 'Custom Craft';
    $mail->Body = "<h1>Email: $email</h1><br><h2> Сообщение: $message</h2>";
    // Отправка письма
    if ($mail->send()) {
        echo 'Письмо успешно отправлено.';
        header('Location: page1.html');
    } else {
        echo 'Ошибка отправки письма: ' . $mail->ErrorInfo;
    }
    } catch (Exception $e) {
        echo 'Произошла ошибка: ' . $e->getMessage();
    }
  }
?>
