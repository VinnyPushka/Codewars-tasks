let list = document.querySelector(".todo-list");
let input = document.querySelector(".todo-input");
let form = document.querySelector(".todo-form");
let priority = document.querySelector(".todo-priority");

priority.onclick = function () {
    priority.classList.toggle("is-important");
    if (priority.classList.contains("is-important")) {
        priority.textContent = "Важная задача";
    } else {
        priority.textContent = "Обычная задача";
    }
};

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newTask = document.createElement("li");
    list.append(newTask);
    newTask.textContent = input.value;
    if (priority.classList.contains("is-important")) {
        newTask.classList.add("is-important");
    }
    input.value = "";
};

/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/

//-------------------------------------------------------

let board = document.querySelectorAll(".key");
let screen = document.querySelector(".display");
let clearButton = document.querySelector(".clear");

for (let i = 0; i < board.length; i++) {
    board[i].onclick = function () {
        screen.textContent += board[i].textContent;
    };
}
clearButton.onclick = function () {
    screen.textContent = "";
};

/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/

//-------------------------------------------------------

let radioButtons = document.querySelectorAll(".review");
let submitButton = document.querySelector(".submit-button");
let error = document.querySelector(".error");

for (let radioButton of radioButtons) {
    radioButton.onchange = function () {
        if (radioButton.dataset.evaluation == "bad") {
            submitButton.disabled = true;
            error.classList.add("shown");
        } else {
            submitButton.disabled = false;
            error.classList.remove("shown");
        }
    };
}

/*
1. У всех радиокнопок есть класс review.
2. Чтобы отслеживать переключение радиокнопок, нужно добавить обработчик событий onchange каждой радиокнопке.
3. У каждой радиокнопки есть атрибут data-evaluation. Если отзыв хороший, значение этого атрибута – 'good', а если плохой - 'bad'.
4. Кнопка отправки имеет класс submit-button. Если пользователь выбрал плохой отзыв, кнопку нужно заблокировать, а если хороший — разблокировать.
5. Чтобы показать сигнал об ошибке, элементу с классом error нужно добавить класс shown. Сигнал нужно показывать, если пользователь выбрал плохой отзыв. Если выбран хороший отзыв, сигнал об ошибке нужно спрятать.
*/

//--------------------------------------------------------

let pixels = document.querySelectorAll(".pixel");
let chosenColor = document.querySelector(".chosen-color");
let eraser = document.querySelector(".eraser");

for (let pixel of pixels) {
    pixel.onclick = function () {
        if (eraser.checked) {
            pixel.style.backgroundColor = "white";
        } else {
            pixel.style.backgroundColor = chosenColor.value;
        }
    };
}

/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/
