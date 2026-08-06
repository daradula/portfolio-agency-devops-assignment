function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "#f87171";
        return false;
    }

    status.textContent = `Thanks, ${name}! Your message has been received. We'll get back to you soon.`;
    status.style.color = "#22d3ee";

    event.target.reset();
    return false;
}