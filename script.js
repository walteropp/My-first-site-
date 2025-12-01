// Small script to handle contact form submission (no backend)
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if(!name || !email){
      status.textContent = 'Please provide name and email.';
      return;
    }
    // Simulate sending
    status.textContent = 'Sending...';
    setTimeout(()=>{
      status.textContent = 'Thanks  your message was received (simulated).';
      form.reset();
    }, 800);
  });
});
