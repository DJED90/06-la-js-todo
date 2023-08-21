// Fonction pour mettre à jour le mode sombre
export function toggleDarkMode() {
    const toggleSwitch = document.querySelector(".checkbox");
    const container = document.querySelector("body");
    const logoElement = document.querySelector("#logo");
    const originalLogoSrc = logoElement.src;

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            logoElement.src = "./image/logo-dark-mode.webp";
            container.classList.add("dark-mode", "dark-transition");
            applyDarkModeToElements("ul");
            applyDarkModeToElements("li");
            applyDarkModeToElements("#addtask");
        } else {
            logoElement.src = originalLogoSrc;
            container.classList.remove("dark-mode", "dark-transition");
            removeDarkModeFromElements("ul");
            removeDarkModeFromElements("li");
            removeDarkModeFromElements("#addtask");
        }
    });
    function applyDarkModeToElements(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add("dark-mode");
        });
    }
    
    function removeDarkModeFromElements(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.remove("dark-mode");
        });
    }
}

