document.addEventListener('DOMContentLoaded', function() {
    // Get the 'About' link and 'About' section
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    
    // Get the 'Contact' link and 'Contact' section
    const contactLink = document.getElementById('contact-link');
    const contactSection = document.getElementById('contact');
    
    // Function to show only the 'About' section
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'block';
        contactSection.style.display = 'none';
    });

    // Function to show only the 'Contact' section
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.style.display = 'block';
        aboutSection.style.display = 'none';
    });

    // Add event listeners to the "Place Order" buttons
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cakeItem = button.closest('.cake-item');
            const cakeName = cakeItem.getAttribute('data-cake');
            const price = cakeItem.getAttribute('data-price');
            
            // Ask user to choose between phone call or WhatsApp
            if (confirm(`Do you want to place an order for ${cakeName} (${price}) via Phone Call? Click 'Cancel' for WhatsApp.`)) {
                // Open dialer
                window.location.href = 'tel:9539314776';
            } else {
                // Open WhatsApp
                window.location.href = 'https://wa.me/9539314776?text=I%20want%20to%20place%20an%20order%20for%20' + encodeURIComponent(cakeName) + '%20(' + encodeURIComponent(price) + ')';
            }
        });
    });
});









// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the 'About' link and 'About' section
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');
    
    // Get the 'Contact' link and 'Contact' section
    const contactLink = document.getElementById('contact-link');
    const contactSection = document.getElementById('contact');
    
    // Function to show only the 'About' section
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        aboutSection.style.display = 'block'; // Show 'About' section
        contactSection.style.display = 'none'; // Hide 'Contact' section
    });

    // Function to show only the 'Contact' section
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        contactSection.style.display = 'block'; // Show 'Contact' section
        aboutSection.style.display = 'none'; // Hide 'About' section
    });
});