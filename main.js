document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    setupNavToggle();
    setupGoToTopButton();
    setupPage();
    setupAuthForms();
    setupContactPage();  
});

function setupNavToggle() {
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';  
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(navToggle);
        navToggle.addEventListener('click', () => {
            const navList = document.querySelector('nav ul');
            if (navList) {
                navList.classList.toggle('show');
            }
        });
    } else {
        console.error('Header element not found in the DOM.');
    }
}

function setupPage() {
    if (document.body.classList.contains('index')) {
        setupAppointmentPage(); // Appointment form on index page
    }
    if (document.body.classList.contains('about')) {
        setupAboutPage(); //  about page setup function
    }
    if (document.body.classList.contains('appointment')) {
        setupAppointmentPage();
    }
    if (document.body.classList.contains('contact')) {
        setupContactPage(); // contact page setup function
    }
    if (document.body.classList.contains('loginsignup')) {
        setupLoginSignupPage(); // login/signup page setup function
    }
    if (document.body.classList.contains('services')) {
        setupServicesPage(); // services page setup function
    }
    if (document.body.classList.contains('gallery')) {
        setupGalleryPage(); // gallery page setup function
    }
}

function setupAppointmentPage() {
    const form = document.querySelector('#appointment-form');
    const confirmation = document.getElementById('confirmation');

    if (form && confirmation) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const phone = form.querySelector('#phone').value.trim();
            const service = form.querySelector('#service').value;
            const date = form.querySelector('#date').value;
            const time = form.querySelector('#time').value;

            if (name && email && phone && service && date && time) {
                form.style.display = 'none';
                confirmation.style.display = 'block';
                confirmation.querySelector('#confirmName').textContent = name;
                confirmation.querySelector('#confirmService').textContent = service;
                confirmation.querySelector('#confirmDate').textContent = date;
                confirmation.querySelector('#confirmTime').textContent = time;
                confirmation.querySelector('#confirmEmail').textContent = email;
                confirmation.querySelector('#confirmPhone').textContent = phone;
                form.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });

        confirmation.querySelector('button').addEventListener('click', () => {
            confirmation.style.display = 'none';
            form.style.display = 'block';
        });
    } else {
        console.error('Appointment form or confirmation section not found.');
    }
}

function setupAuthForms() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authMessage = document.getElementById('auth-message');

    if (loginBtn && signupBtn && loginForm && signupForm && authMessage) {
       
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');

         
        loginBtn.addEventListener('click', () => {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            loginBtn.classList.add('active');
            signupBtn.classList.remove('active');
        });

         
        signupBtn.addEventListener('click', () => {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            signupBtn.classList.add('active');
            loginBtn.classList.remove('active');
        });

         
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            authMessage.textContent = 'Success! You are now logged in.';
            authMessage.classList.remove('hidden');
            loginForm.reset();
            setTimeout(() => authMessage.classList.add('hidden'), 3000);
        });

         
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            authMessage.textContent = 'Success! You are now signed up.';
            authMessage.classList.remove('hidden');
            signupForm.reset();
            setTimeout(() => authMessage.classList.add('hidden'), 3000);
        });
    } else {
        console.error('One or more authentication elements not found in the DOM.');
    }
}

function setupGoToTopButton() {
    const goToTopButton = document.getElementById('go-to-top');

    if (goToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                goToTopButton.style.display = 'block';
            } else {
                goToTopButton.style.display = 'none';
            }
        });

        goToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error('Go to Top button not found in the DOM.');
    }
}

// For About page
function setupAboutPage() {
     
    console.log('About page setup initialized.');
}

// For Contact page
function setupContactPage() {
    const contactForm = document.getElementById('contact-form');
    const confirmation = document.getElementById('confirmation');
    const goBackBtn = document.getElementById('goBackBtn');

    if (contactForm && confirmation && goBackBtn) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const firstName = contactForm.querySelector('#first-name').value.trim();
            const lastName = contactForm.querySelector('#last-name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const phone = contactForm.querySelector('#phone').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (firstName && lastName && email && phone && message) {
                contactForm.style.display = 'none';
                confirmation.style.display = 'block';
                contactForm.reset();
            } else {
                alert('Please fill out all required fields.');
            }
        });

        goBackBtn.addEventListener('click', () => {
            confirmation.style.display = 'none';
            contactForm.style.display = 'block';
        });
    } else {
        console.error('Contact form or confirmation section not found.');
    }
}

// For Login/Signup page
function setupLoginSignupPage() {
     
}

// For Services page
function setupServicesPage() {
     
}

// For Gallery page
function setupGalleryPage() {
    
}
