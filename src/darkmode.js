// Fonction pour mettre à jour le mode sombre
export function toggleDarkMode() {
    const toggleSwitch = document.querySelector(".checkbox");
    const container = document.querySelector("body");
    const logoElement = document.querySelector("#logo");
    const ul = document.querySelector("ul");
    const originalLogoSrc = logoElement.src;

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            logoElement.src = "./image/logo-dark-mode.webp";
            container.classList.add("dark-mode", "dark-transition");
            ul.classList.add("dark-mode");
        } else {
            logoElement.src = originalLogoSrc;
            container.classList.remove("dark-mode", "dark-transition");
            ul.classList.remove("dark-mode");
        }
    });
}

