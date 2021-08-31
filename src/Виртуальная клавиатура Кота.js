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
