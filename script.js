// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  
  if (form && status) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      
      if(!name || !email || !message){
        status.textContent = '✗ Please fill in all fields.';
        status.className = 'form-status error';
        return;
      }
      
      // Simulate sending
      status.textContent = '⏳ Sending your message...';
      status.className = 'form-status';
      
      setTimeout(()=>{
        status.textContent = '✓ Thanks! Your message was received. I\'ll get back to you soon.';
        status.className = 'form-status success';
        form.reset();
        
        setTimeout(() => {
          status.textContent = '';
          status.className = 'form-status';
        }, 5000);
      }, 1200);
    });
  }
});

// Add scroll animation to elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards for animation on scroll
document.querySelectorAll('.skill-card, .project-card, .highlight').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
