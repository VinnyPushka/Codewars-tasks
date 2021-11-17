const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeL = document.querySelector("#time");
const board = document.querySelector("#board");
let time = 0;
let score = 0;
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

startBtn.addEventListener("click", (event) => {
    event.preventDefault(); //! Отменяем действие ссылки (# в адресной строке не добавляется)
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add("up");
        startGame();
    } //! Есть ли у элемента определенный класс
});

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeL.innerHTML = `00:${value}`;
}

function finishGame() {
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 30);
    const { width, height } = board.getBoundingClientRect(); //! Получаем размерности и координаты нашей доски!!!
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
