document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const emailInput = document.getElementById('email');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const emailError = document.getElementById('email-error');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        // Clear previous errors
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        emailError.textContent = '';

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

        // Validate Confirm Password
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            valid = false;
        }

        // If form is valid, simulate a successful registration
        if (valid) {
            alert('Registration successful!');
            // You can redirect to the login page or another page after registration.
            // window.location.href = 'login.html';
        }
    });

    // Simple email validation
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});
