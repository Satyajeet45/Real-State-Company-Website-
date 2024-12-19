// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Toggle mobile menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Property search functionality
const searchForm = document.getElementById('property-search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(searchForm);
        const searchParams = new URLSearchParams(formData);
        alert(`Search parameters: ${searchParams.toString()}`);
        // In a real application, you would send this data to the server or update the UI
    });
}

// Property listing filter
const propertyCards = document.querySelectorAll('.property-card');
const filterForm = document.getElementById('filter-form');

if (filterForm) {
    filterForm.addEventListener('change', () => {
        const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
        const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
        const propertyType = document.getElementById('property-type').value;

        propertyCards.forEach(card => {
            const price = parseFloat(card.dataset.price);
            const type = card.dataset.type;

            if (price >= minPrice && price <= maxPrice && (propertyType === '' || type === propertyType)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}
