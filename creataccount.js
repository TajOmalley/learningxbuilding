document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signin-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorIcon = document.getElementById('password-error-icon');
    
    // Function to check if passwords match
    function checkPasswords() {
        if (confirmPassword.value.length > 0) {
            if (password.value !== confirmPassword.value) {
                errorIcon.classList.add('show');
            } else {
                errorIcon.classList.remove('show');
            }
        } else {
            errorIcon.classList.remove('show');
        }
    }
    
    // Check passwords as user types
    password.addEventListener('input', checkPasswords);
    confirmPassword.addEventListener('input', checkPasswords);
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }
        
        alert('Account created!');
    });
});