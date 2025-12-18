// Bannière cookies
const banner = document.getElementById('cookie-banner');
const btnAccept = document.getElementById('accept-cookies');

// Vérifie si l'utilisateur a déjà accepté les cookies
if(localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'none';
}

btnAccept.addEventListener('click', function() {
    // Animation fade-out
    banner.classList.add('fadeout');
    // Après l'animation, on masque la bannière et on enregistre l'acceptation
    banner.addEventListener('transitionend', function handler() {
        banner.removeEventListener('transitionend', handler);
        banner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});


