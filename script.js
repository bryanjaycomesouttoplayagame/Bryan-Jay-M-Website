// Ensure the DOM is loaded before applying functionality
document.addEventListener("DOMContentLoaded", function () {
    
    // Menu Toggle Functionality
    const menuToggleButton = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const pageContent = document.getElementById("page-content-wrapper");

    // Check if elements exist before adding event listener
    if (menuToggleButton && sidebar && pageContent) {
        menuToggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("toggled");
            pageContent.classList.toggle("toggled");
        });
    }

    // Dark Mode Toggle
    const themeToggleSwitch = document.getElementById("theme-toggle");

    // Check if the theme toggle switch exists before adding event listener
    if (themeToggleSwitch) {
        themeToggleSwitch.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});