const btnThemeToggle = document.querySelector(".theme-toggle");

function setTheme() {
    const root = document.querySelector("html");
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

btnThemeToggle.addEventListener('click', setTheme);