feather.replace({ 'stroke-width': 1.75 })

const toggler = document.getElementById('theme-toggler');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function updateIcon() {
    while (toggler.firstChild) {
        toggler.firstChild.remove();
    }

    let icon = document.body.classList.contains('dark-theme') ? 'sun' : 'moon';
    
    let newIcon = feather.icons[icon].toSvg({ 'stroke-width': 1.25 });
    
    toggler.insertAdjacentHTML('afterbegin', newIcon);
    toggler.firstChild.setAttribute('aria-hidden', 'true');
}

// Check for saved theme in localStorage
let savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    // If theme was saved, apply it
    document.body.classList.add(savedTheme);
} else {
    // If no theme was saved, apply system preference
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

updateIcon();

toggler.addEventListener('click', function() {
    let currentTheme;
    
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        currentTheme = 'light-theme';
    } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        currentTheme = 'dark-theme';
    }

    // Save theme preference to localStorage
    localStorage.setItem('theme', currentTheme);

    updateIcon();
});
