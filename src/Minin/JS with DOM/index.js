let a = document.createElement("h1");
let b = document.querySelector("h2");

function addStylesTo(node, fontSize) {
    node.style.color = "red";
    node.style.textAlign = "center";
    node.style.backgroundColor = "black";
    node.style.padding = "2rem";
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

a.textContent = "TEST";
b.textContent = "NEW TEST";

document.querySelector("body").append(a);

addStylesTo(a, "3rem");
addStylesTo(b, "4rem");

a.onclick = function () {
    if (a.style.backgroundColor === "gray") {
        a.style.backgroundColor = "blue";
    } else if (a.style.backgroundColor === "blue") {
        a.style.backgroundColor = "black";
    } else if (a.style.backgroundColor === "black") {
        a.style.backgroundColor = "gray";
    }
};
