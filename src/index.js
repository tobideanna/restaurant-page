import "./styles.css";
import { loadHomeScreen } from "./home-screen.js";
import { loadMenuScreen } from "./menu.js";

console.log("Hello World");

function clearContent() {
    contentDiv.innerHTML = "";
}

const homeNavButton = document.getElementById("home");
const menuNavButton = document.getElementById("menu");
const contentDiv = document.getElementById("content");

// loadHomeScreen();

homeNavButton.addEventListener("click", () => {
    if (!contentDiv.querySelector(".home-screen")) {
        contentDiv.innerHTML = "";
        loadHomeScreen();
    }
});

menuNavButton.addEventListener("click", () => {
    if (!contentDiv.querySelector(".menu-screen")) {
        contentDiv.innerHTML = "";
        loadMenuScreen();
    }
});





const contactNavButton = document.getElementById("contact");
contactNavButton.addEventListener("click", () => {
    clearContent();
});