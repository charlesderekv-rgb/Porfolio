// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initLabActivitiesModal();
    initContactForm();
    initAnimations();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar - Consistent appearance (no color change on scroll)
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        // Navbar now maintains consistent appearance
        // No scroll-based color changes
        console.log('Navbar initialized with consistent futuristic styling');
    }
}

// Laboratory Activities Modal
function initLabActivitiesModal() {
    const modal = document.getElementById('lab-modal');
    const closeBtn = document.querySelector('.close-modal');
    const labButtons = document.querySelectorAll('.lab-details-btn');
    
    // Lab activities data - CUSTOMIZE THIS WITH YOUR LAB DETAILS
    const labData = {
        1: {
            title: "Lab Activity 1: Hover",
            content: `
                <h3>Objective</h3>
                <p>Hover.</p>
                
                <h3>Tasks Completed</h3>
                <ul>
                    <li>Create Hover</li>
                </ul>
                
                <h3>Technologies Used</h3>
                <p>HTML</p>
                
                <h3>Outcome</h3>
                <p>Successfull</p>
            `
        },
        2: {
            title: "Lab Activity 2: Button Show more or less",
            content: `
                <h3>Objective</h3>
                <p>Create Button Show.</p>
                
                <h3>Tasks Completed</h3>
                <ul>
                    <li>Button Show</li>
                </ul>
                
                <h3>Technologies Used</h3>
                <p></p>
                
                <h3>Outcome</h3>
                <p>Success.</p>
            `
        },
        3: {
            title: "Lab Activity 3: Dark mode",
            content: `
                <h3>Objective</h3>
                <p>Create Darkmode.</p>
                
                <h3>Tasks Completed</h3>
                <ul>
                    <li>Added Dark mode</li>
                </ul>
                
                <h3>Technologies Used</h3>
                <p>JavaScript</p>
                
                <h3>Outcome</h3>
                <p>Successfully added Darkmode</p>
            `
        },
        4: {
            title: "Lab Activity 4: Grocery List",
            content: `
                <h3>Objective</h3>
                <p>Build a Grocery list.</p>
                
                <h3>Tasks Completed</h3>
                <ul>
                    <li>Grocery List</li>
                </ul>
                
                <h3>Technologies Used</h3>
                <p>Html,JS,CSS</p>
                
                <h3>Outcome</h3>
                <p>Created Grocery List.</p>
            `
        },
        5: {
            title: "Lab Activity 5: API Integration",
            content: `
                <h3>Objective</h3>
                <p>Connect to external APIs and display retrieved data on a web page.</p>
                
                <h3>Tasks Completed</h3>
                <ul>
                    <li>Made HTTP requests using Fetch API</li>
                    <li>Handled API responses and errors</li>
                    <li>Displayed dynamic data from APIs</li>
                    <li>Implemented loading states</li>
                    <li>Created a weather app or news feed</li>
                </ul>
                
                <h3>Technologies Used</h3>
                <p>JavaScript, Fetch API, JSON</p>
                
                <h3>Outcome</h3>
                <p>Successfully integrated external data sources into web applications, creating dynamic, data-driven experiences.</p>
            `
        }
    };
    
    // Open modal when lab button is clicked
    labButtons.forEach(button => {
        button.addEventListener('click', function() {
            const labCard = this.closest('.lab-card');
            const labId = labCard.getAttribute('data-lab');
            
            if (labData[labId]) {
                document.getElementById('modal-title').textContent = labData[labId].title;
                document.getElementById('modal-body').innerHTML = labData[labId].content;
                modal.style.display = 'flex';
            }
        });
    });
    
    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
}

// Contact Form with Validation
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Create error message elements
        const nameError = document.createElement('div');
        nameError.className = 'form-error';
        nameError.id = 'name-error';
        contactForm.querySelector('#name').parentNode.appendChild(nameError);
        
        const emailError = document.createElement('div');
        emailError.className = 'form-error';
        emailError.id = 'email-error';
        contactForm.querySelector('#email').parentNode.appendChild(emailError);
        
        const messageError = document.createElement('div');
        messageError.className = 'form-error';
        messageError.id = 'message-error';
        contactForm.querySelector('#message').parentNode.appendChild(messageError);
        
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.id = 'form-success';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        contactForm.appendChild(successMessage);
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            resetFormErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('name', 'Please enter your name');
                isValid = false;
            } else if (name.length < 2) {
                showError('name', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('email', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('message', 'Please enter a message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For this example, we'll just show a success message
                document.getElementById('form-success').style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('form-success').style.display = 'none';
                }, 5000);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this.id);
            });
            
            input.addEventListener('input', function() {
                // Clear error when user starts typing
                if (this.classList.contains('input-error')) {
                    this.classList.remove('input-error');
                    document.getElementById(`${this.id}-error`).style.display = 'none';
                }
            });
        });
    }
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    field.classList.add('input-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Helper function to reset form errors
function resetFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    const inputErrors = document.querySelectorAll('.input-error');
    
    errorElements.forEach(element => {
        element.style.display = 'none';
    });
    
    inputErrors.forEach(element => {
        element.classList.remove('input-error');
    });
    
    document.getElementById('form-success').style.display = 'none';
}

// Helper function to validate individual fields
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    
    switch(fieldId) {
        case 'name':
            if (value === '') {
                showError('name', 'Please enter your name');
            } else if (value.length < 2) {
                showError('name', 'Name must be at least 2 characters long');
            }
            break;
        case 'email':
            if (value === '') {
                showError('email', 'Please enter your email');
            } else if (!isValidEmail(value)) {
                showError('email', 'Please enter a valid email address');
            }
            break;
        case 'message':
            if (value === '') {
                showError('message', 'Please enter a message');
            } else if (value.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
            }
            break;
    }
}

// Animation on scroll
function initAnimations() {
    // Simple fade-in animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .experience-card, .project-card, .lab-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.timeline-item, .experience-card, .project-card, .lab-card');
    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
}