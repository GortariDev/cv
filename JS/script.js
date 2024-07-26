document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.textContent = 'Mensaje enviado con éxito!';
            formMessage.classList.add('alert', 'alert-success');
        } else {
            formMessage.textContent = 'Por favor, completa todos los campos.';
            formMessage.classList.add('alert', 'alert-danger');
        }
    });
});