document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('category-modal');
    const menuBtn = document.getElementById('menu-fab');
    const closeBtn = document.querySelector('.close-modal');
    const modalLinks = document.querySelectorAll('.modal-link');

    // Open Modal
    menuBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        // Small timeout to allow display:flex to apply before adding class for transition
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for transition
    };

    // Close Modal on X button
    closeBtn.addEventListener('click', closeModal);

    // Close Modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Smooth scrolling and closing modal when clicking a category link
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Since there is no sticky header anymore, we just need a small offset for breathing room
                const headerOffset = 20;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close the modal after selection
            closeModal();
        });
    });
});
