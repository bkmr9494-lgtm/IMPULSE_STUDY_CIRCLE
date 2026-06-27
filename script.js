// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navTexts = document.querySelectorAll('.nav-text');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-blur', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
        navTexts.forEach(el => {
            el.classList.remove('text-white', 'text-white/90');
            el.classList.add('text-gray-800');
        });
    } else {
        navbar.classList.remove('nav-blur', 'shadow-lg');
        navbar.classList.add('bg-transparent');
        navTexts.forEach(el => {
            el.classList.add('text-white');
            el.classList.remove('text-gray-800');
        });
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Trigger counters if inside
            const counters = entry.target.querySelectorAll('.counter-value');
            counters.forEach(counter => animateCounter(counter));
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    if (!target || el.classList.contains('counted')) return;
    
    el.classList.add('counted');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + (el.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

// FAQ Toggle
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Lightbox
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    const clone = element.cloneNode(true);
    clone.classList.remove('cursor-pointer');
    content.innerHTML = '';
    content.appendChild(clone);
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Modal functions
function openDemoModal() {
    document.getElementById('demo-modal').classList.remove('hidden');
    document.getElementById('demo-modal').classList.add('flex');
}

function closeDemoModal() {
    document.getElementById('demo-modal').classList.add('hidden');
    document.getElementById('demo-modal').classList.remove('flex');
}

// Exit intent popup
let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        document.getElementById('exit-popup').classList.add('active');
    }
});

function closeExitPopup() {
    document.getElementById('exit-popup').classList.remove('active');
}

// Form handlers
function handleDemoSubmit(e) {
    e.preventDefault();
    showToast();
    closeDemoModal();
    e.target.reset();
}

function handleEnquirySubmit(e) {
    e.preventDefault();
    showToast();
    e.target.reset();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.transform = 'translateX(0)';
    setTimeout(() => {
        toast.style.transform = 'translateX(150%)';
    }, 3000);
}

// Close modals on outside click
document.getElementById('demo-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeDemoModal();
});

document.getElementById('exit-popup').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeExitPopup();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});