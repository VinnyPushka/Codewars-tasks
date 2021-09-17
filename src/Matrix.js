const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

function perimetr(arr) {
    let p = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "X") {
                p += j === 0 || arr[i][j - 1] === "O";
                p += i === 0 || arr[i - 1][j] === "O";
                p += j === arr[i].length - 1 || arr[i][j + 1] === "O";
                p += i === arr.length - 1 || arr[i + 1][j] === "O";
            }
        }
    }
    return p;
}

console.log(perimetr(matrix));
