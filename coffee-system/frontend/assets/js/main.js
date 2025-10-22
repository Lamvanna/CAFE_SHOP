// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Coffee System loaded');

    // Initialize common functionality
    initNavigation();
});

function initNavigation() {
    // Add active class to current page link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}
