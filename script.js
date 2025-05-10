// Configure the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Optional: Remove 'visible' to fade out again when scrolling up
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the image is visible
});

// Observe all images
document.querySelectorAll('.gallery img').forEach(img => {
    observer.observe(img);
});