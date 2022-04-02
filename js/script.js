const root = document.querySelector("html");
const btnThemeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

function setTheme() {
    // Change color theme
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
    // Change icon 
    const newThemeIcone = (themeIcon.className.includes("fa-sun")) ? "fa-solid fa-moon fa-xl" : "fa-solid fa-sun fa-xl";
    themeIcon.className = newThemeIcone;
}

btnThemeToggle.addEventListener('click', setTheme);