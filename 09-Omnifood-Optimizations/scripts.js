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


// Smooth scrolling animation for browsers which don't support css scroll-behavior property
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // This still requires to add  <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script> polyfill to our scripts in html to work on IE and Opera
            })
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"})
        }

        // Close mobile navigation on pressing link within it
        if (link.classList.contains('main-nav-link')) {
            headerEl.classList.remove('nav-open');
        }
    })
})
