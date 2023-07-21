const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
    .then((response) => {
        if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert("Oops, something went wrong. Please try again later.");
        }
    })
    .catch((error) => {
        alert("Oops, something went wrong. Please try again later.");
    });
});
