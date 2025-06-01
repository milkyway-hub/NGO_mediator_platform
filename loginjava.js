document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        // Clear previous errors
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate Email
        const email = emailInput.value.trim();
        if (!email || !validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Validate Password
        const password = passwordInput.value.trim();
        if (!password || password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        }

        // If form is valid, simulate a successful login
        if (valid) {
            alert('Login successful!');
            // Redirect to another page or do something here
            // window.location.href = 'dashboard.html';
        }
    });

    // Simple email validation
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});
