// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = bookingForm.querySelector('input[placeholder="Your Name"]').value;
        const email = bookingForm.querySelector('input[placeholder="Your Email"]').value;
        const packageDetails = bookingForm.querySelector('input[placeholder="Package Details"]').value;
        const destination = bookingForm.querySelector('input[placeholder="Destination"]').value;
        
        // Simple validation
        if (name && email && packageDetails && destination) {
            alert(`Thank you for your booking, ${name}! We'll contact you at ${email} soon.`);
            bookingForm.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Lazy loading animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe package cards, destination cards, and testimonial cards
document.querySelectorAll('.package-card, .destination-card, .testimonial-card, .gallery-item').forEach(card => {
    observer.observe(card);
});

// FAQ accordion functionality
document.querySelectorAll('.faq-item h3').forEach(heading => {
    heading.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const paragraph = this.nextElementSibling;
        
        // Toggle max-height for smooth animation
        if (paragraph.style.maxHeight) {
            paragraph.style.maxHeight = null;
        } else {
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
        }
        
        faqItem.classList.toggle('active');
    });
});

// Add smooth scroll behavior to page
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// Add event listener to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#book').scrollIntoView({ behavior: 'smooth' });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Console message
console.log('Welcome to Black Pearl Shipping Services!');
