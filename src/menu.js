
function loadMenuScreen() {
    const content = document.getElementById("content");

    const newDiv = document.createElement("div");
    newDiv.classList.add("menu-screen");
    content.appendChild(newDiv);
}

export { loadMenuScreen };
