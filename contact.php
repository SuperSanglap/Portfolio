<?php
// Setting up Variable
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];
$mailHeaders = "From: " . $name . "<". $email .">\r\n";

if (empty($name) || empty($email) || empty($message))
{
    echo "Please Fill the Fields";
}
else
{
    mail("putatundasanglap@gmail.com", $subject, $message, $mailHeaders);
    echo "<script type='text/javascript'>alert('Message Sent!')</script>";
    window.history.log(-1);
}
?>