<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Fetch form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set your email address where you want to receive inquiries
    $to = "fzr76@protonmail.com";
    
    // Email subject and content
    $subject = "Someone Reached Out From Your Website!";
    $content = "Name: $name\nEmail: $email\nMessage: $message";
    
    // Send email
    if (mail($to, $subject, $content)) {
        echo "Thank you for contacting me!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
