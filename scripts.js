document.addEventListener('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.vertical-menu .menu-item');
    const sections = document.querySelectorAll('section');

    // Function to remove all active classes
    function clearActive() {
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
    }

    // Function to highlight menu item based on scroll position
    function highlightMenuItem() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        clearActive();
        menuItems[index].classList.add('active');
    }

    // Call the highlight function when scrolling
    window.addEventListener('scroll', highlightMenuItem);

    // Smooth scroll to section when menu item clicked
    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            clearActive();
            item.classList.add('active');
        });
    });
});
