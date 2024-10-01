
function loadHomeScreen() {
    const content = document.getElementById("content");

    const newDiv = document.createElement("div");
    newDiv.classList.add("home-screen");
    content.appendChild(newDiv);

    const H1inNewDiv = document.createElement("h1");
    H1inNewDiv.classList.add("home-screen-h1");
    H1inNewDiv.textContent = "The Premier Gourmet Resturant in Charlotte, NC";
    newDiv.appendChild(H1inNewDiv);

    const pInNewDiv = document.createElement("p");
    pInNewDiv.classList.add("home-screen-p");
    pInNewDiv.textContent = "We are a family-owned and operated resturant that specializes in gourmet food and drinks. We are located in Charlotte, NC and we are open 7 days a week.";
    newDiv.appendChild(pInNewDiv);

    const buttonInNewDiv = document.createElement("button");
    buttonInNewDiv.classList.add("home-screen-button");
    buttonInNewDiv.textContent = "Book a Table";

}

export { loadHomeScreen };