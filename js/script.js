 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    window.location.href = `mailto:sergio@sradv.org?subject=Mensagem de ${name}&body=${message}`;
});

function sendWhatsApp() {
    const message = document.getElementById('message').value;
    window.open(`https://wa.me/5591982096180?text=${encodeURIComponent(message)}`, '_blank');
}