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

// Add sticky navigation only when scrolled past hero

const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    } else {
        document.body.classList.remove('sticky');
    }
}, {
    root: null, // setting to null will mean it will track how element will move in relation to the viewport
    threshold: 0, // fire event as soon as 0% of the hero-section is in the viewport
    rootMargin: '-80px' // 80px is the height of the hero section. We want to fire the event 80px before the hero section is out of the viewport so that when it appears, we are not immediately covering the featured-in section
})
observer.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions (also needs additional CSS for each element where gap is used. I've added code for this specific website in queries.css, but it would need to manually be made for each website)
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

