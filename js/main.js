document.addEventListener('DOMContentLoaded', (event) => {
    feather.replace({ 'stroke-width': 1.75 });

    const toggler = document.getElementById('theme-toggler');
    let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    function updateIcon() {
        while (toggler.firstChild) {
            toggler.firstChild.remove();
        }

        let icon = document.body.classList.contains('dark-theme') ? 'sun' : 'moon';

        let newIcon = feather.icons[icon].toSvg({ 'stroke-width': 1.25 });

        toggler.insertAdjacentHTML('afterbegin', newIcon);
        toggler.firstChild.setAttribute('aria-hidden', 'true');
    }

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add('dark-theme');
    }

    updateIcon();

    toggler.addEventListener('click', function () {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        updateIcon();
    });
});
