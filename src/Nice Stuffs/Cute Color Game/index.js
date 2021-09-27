const board = document.querySelector("#board");
const colors = [
    "#F9DA00",
    "#D93740",
    "#D70C7A",
    "#00A0DC",
    "#98C11D",
    "#DA3248",
    "#ABC230",
    "#8B1E75",
    "#1CAF94",
    "#008E74",
    "#E06E1E",
    "#1AA1BD",
    "#53A63A",
];
// const event1 = new Event("mouseover");
// const event2 = new Event("mouseleave"); //! Создаем новые ивенты для document.dispatchEvent(event) (ЗАПУСК СОБЫТИЯ)
//! можно воспользоваться и document.onmouseover() etc...
const SQUARES_NUMBER = 805;
// const divsArray = [];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    // divsArray.push(square);

    square.classList.add("square");

    // square.textContent = i;
    // square.style.fontSize = "10px";
    // square.style.color = "white";

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));
    // square.addEventListener("click", () => boom(square, i));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px black`;
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]; //! Выбираем рандомный элемент массива цветов
