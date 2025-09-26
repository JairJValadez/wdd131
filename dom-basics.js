//Adds a new paragraph to the HTML
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//Adds a new image to the HTML
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200?grayscale");
newImage.setAttribute("alt", "Grayscale Image");
document.body.appendChild(newImage);

//Adds a list to the HTML in a whole string in at once
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//Creates a new section with a heading and a paragraph inside it
const newSection = document.createElement("section");
const subtitle = document.createElement("h2");
const anotherP = document.createElement("p");
subtitle.innerText = "DOM Basics";
anotherP.innerText = "This was added through Javascript";

//Appends the elements so it is added to HTML
newSection.appendChild(subtitle);
newSection.appendChild(anotherP);
document.body.appendChild(newSection);