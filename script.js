// Toggle Navigation
const toggleBtn = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".navlinks");

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("click");
  navLinks.classList.toggle("open");
});

// Typed.js Effect
new Typed(".input", {
  strings: ["App Developer", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true
});

// Firebase Form Submission
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("❗ Please fill in all fields.");
      return;
    }

    try {
      await firebase.firestore().collection("contacts").add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert("✅ Your message has been sent!");
      contactForm.reset();
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("⚠️ Failed to send message. Please try again later.");
    }
  });
}
