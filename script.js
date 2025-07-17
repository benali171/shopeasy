// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');

    const loginButton = document.getElementById('loginButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const closeRegisterModalButton = document.getElementById('closeRegisterModalButton');
    const closeForgotPasswordModalButton = document.getElementById('closeForgotPasswordModalButton');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const signUpLink = document.getElementById('signUpLink');
    const backToLoginLink = document.getElementById('backToLoginLink');
    const forgotPasswordModalLink = document.getElementById('forgotPasswordModalLink');
    const backToLoginFromForgotLink = document.getElementById('backToLoginFromForgotLink');

    // --- Helper Functions for Modals ---

    // Hides all modals
    const hideAllModals = () => {
        loginModal.classList.add('hidden');
        registerModal.classList.add('hidden');
        forgotPasswordModal.classList.add('hidden');
    };

    // Shows a specific modal
    const showModal = (modalElement) => {
        hideAllModals(); // Hide any open modals first
        modalElement.classList.remove('hidden');
    };

    // --- Event Listeners ---

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Show Login Modal
    loginButton.addEventListener('click', () => {
        showModal(loginModal);
    });

    // Close Login Modal
    closeModalButton.addEventListener('click', () => {
        hideAllModals();
    });

    // Close Register Modal
    closeRegisterModalButton.addEventListener('click', () => {
        hideAllModals();
    });

    // Close Forgot Password Modal
    closeForgotPasswordModalButton.addEventListener('click', () => {
        hideAllModals();
    });

    // Switch from Login Modal to Register Modal
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(registerModal);
    });

    // Switch from Register Modal to Login Modal
    backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(loginModal);
    });

    // Switch from Login Modal to Forgot Password Modal
    forgotPasswordModalLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(forgotPasswordModal);
    });

    // Switch from Forgot Password Modal back to Login Modal
    backToLoginFromForgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(loginModal);
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log('Login attempt with:', { email, password });
        alert('Login functionality would be implemented here. Email: ' + email);
        
        hideAllModals(); // Close the modal after submission (or show success/error)
    });

    // Handle registration form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Registration attempt with:', { username, email, password });
        alert('Registration functionality would be implemented here. Username: ' + username + ', Email: ' + email);
        
        hideAllModals(); // Close the modal after submission
        showModal(loginModal); // Optionally, show login modal after successful registration
    });

    // Handle forgot password form submission
    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value;
        
        console.log('Forgot password request for email:', email);
        alert('A password reset link would be sent to: ' + email + ' (this is simulated).');
        
        hideAllModals(); // Close the modal after submission
    });

    // Add smooth scrolling to all navigation links (header and mobile menu)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
