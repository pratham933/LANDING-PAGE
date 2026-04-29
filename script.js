// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = document.getElementById('scrollTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        scrollTop.style.display = 'block';
    } else {
        navbar.classList.remove('shadow-sm');
        scrollTop.style.display = 'none';
    }
});

// Scroll to Top Function
document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation & Success Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    
    // Simple Validation
    if(name.length < 3) {
        alert("Please enter a valid name");
        return;
    }
    
    if(phone.length < 10) {
        alert("Please enter a valid phone number");
        return;
    }

    // Success Message (Real projects would use EmailJS or Formspree here)
    const btn = this.querySelector('button');
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    btn.disabled = true;

    setTimeout(() => {
        // Redirect to WhatsApp with pre-filled message
        const message = `Hello, my name is ${name}. I'm interested in your services. Please contact me.`;
        const whatsappUrl = `https://wa.me/916261375866?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        alert(`Thank you ${name}! Redirecting to WhatsApp...`);
        this.reset();
        btn.innerHTML = 'Submit Request';
        btn.disabled = false;
    }, 1500);
});