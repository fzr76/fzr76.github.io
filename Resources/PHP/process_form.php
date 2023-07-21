<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email address where you want to receive the form submissions
    $to = "gaitheraaronjosh@protonmail.com";
    $subject = "New Contact Form Submission";

    // Compose the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_body);

    // Redirect the user back to the contact form after submission
    header("Location: index.html#footer");
    exit;
}
?>
