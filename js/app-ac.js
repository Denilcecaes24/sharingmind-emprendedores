const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');
    header.addEventListener('click', () => {
        body.classList.toggle('active');
    });
});