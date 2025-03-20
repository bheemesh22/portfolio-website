// Wait for the DOM to fully load before executing animations and event listeners
document.addEventListener("DOMContentLoaded", function() {

    // GSAP Animations for smooth page loading effects

    // Animate the header - fades in and moves down
    gsap.from("header", { opacity: 0, y: -50, duration: 1 });

    // Animate the About section - fades in and slides in from the left
    gsap.from("#about", { opacity: 0, x: -100, duration: 1.2, delay: 0.5 });

    // Animate the Skills section - fades in and slides in from the right
    gsap.from("#skills", { opacity: 0, x: 100, duration: 1.2, delay: 0.7 });

    // Animate the Projects section - fades in and slides up
    gsap.from("#projects", { opacity: 0, y: 50, duration: 1.2, delay: 0.9 });

    // Animate the Contact section - fades in and scales up
    gsap.from("#contact", { opacity: 0, scale: 0.8, duration: 1.2, delay: 1.1 });

    // Chatbot toggle functionality
    document.getElementById("chatbot-toggle").addEventListener("click", function() {
        let chatbot = document.getElementById("chatbot-box");

        // Toggle the chatbot visibility by adding/removing the "hidden" class
        chatbot.classList.toggle("hidden");
    });

});
