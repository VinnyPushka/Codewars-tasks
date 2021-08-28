//? На шахматной доске N x N находятся M ладей (ладья бьет клетки на той же горизонтали или вертикали до ближайшей занятой)

//? Определите, сколько пар ладей бьют друг друга.
//? Ладьи задаются парой чисел I и J, обозначающих координаты клетки.
//? 1 <= N <= 10^9 ,  0 <= M <= 2*10^5;

//!  Л....Л.....Л...Л.. (определим сколько пар из определенного количество ладей) если 4 ладьи, то 3 пары.
//! Для маленьких полей:
//!    0 2 0 0
//!  0 - - - -
//!  1 - Л - -
//!  1 - Л - -
//!  0 - - - -

function countBeatingRooks(rookCoords) {
    function addrook(roworcol, key) {
        roworcol[key] ? (roworcol[key] += 1) : (roworcol[key] = 0);
    }

    function countpairs(roworcol) {
        let pairs = 0;
        for (key in roworcol) {
            pairs += roworcol[key] - 1;
        }
        return pairs;
    }

    rooksinrow = {};
    rooksincol = {};
}
