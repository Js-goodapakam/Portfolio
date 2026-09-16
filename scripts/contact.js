const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const btn = contactForm.querySelector(".btn");

    const originalText = btn.innerHTML;

    btn.innerHTML = "Sending...";
    btn.disabled = true;

    emailjs.sendForm(

        "service_2iiyln9",
        "template_0eyrysb",
        "#contactForm"

    )

    .then(() => {

       Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting me. I'll get back to you soon.",
    confirmButtonColor: "#00bcd4"
});

contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Something went wrong. Please try again.",
    confirmButtonColor: "#ff4d4d"
});

    })

    .finally(() => {

        btn.innerHTML = originalText;

        btn.disabled = false;

    });

});