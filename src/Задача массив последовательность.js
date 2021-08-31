/* Дана последовательность положительных чисел
длиной N и число X 

Нужно найти два различных числа А и В из последовательности,
таких что А + В = Х или вернуть пару 0, 0, если такой пары чисел нет
*/

const seq = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function findNums(x) {
    let ans = [];
    for (let i of seq) {
        for (let j of seq) {
            if (i + j == x && i !== j) {
                ans.push([i, j]);
            }
        }
    }
    return ans == undefined ? [0, 0] : ans;
}

function findNums2(x) {
    let ans = [];
    for (let i of seq) {
        if (ans.includes(x - i)) return [i, x - i];
        ans.push(i);
    }
}
console.log(findNums2(16));
