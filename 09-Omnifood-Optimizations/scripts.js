// update copyright year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.button-mobile-nav');

btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle('nav-open');
})
